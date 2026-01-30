"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Moon, Sun, X } from "lucide-react";

import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function ProjectDetail() {
  const params = useParams();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "keepSnaps",
    align: "center",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbsApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbsApi.scrollTo(index);
  }, [emblaApi, thumbsApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };

    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [lightboxOpen]);

  const imageLabel = language === "pt" ? "Imagem" : "Image";
  const ofLabel = language === "pt" ? "de" : "of";

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  const images = project.gallery;
  const currentImage = images[selectedIndex] ?? images[0];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pb-24">
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-pointer"
          >
            <div className="absolute top-4 left-4 md:top-8 md:left-8 text-[10px] uppercase tracking-[0.3em] text-white/70 bg-white/10 px-3 py-1">
              {imageLabel} {selectedIndex + 1} {ofLabel} {images.length}
            </div>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-[110] bg-white/10 backdrop-blur-md rounded-full"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`relative w-full max-w-7xl px-4 ${
                currentImage.aspect === "portrait"
                  ? "h-[85vh] max-w-[60vh]"
                  : currentImage.aspect === "square"
                  ? "h-[80vw] max-h-[80vh] max-w-[80vh]"
                  : "h-[auto] aspect-video"
              } flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentImage.url}
                  alt={currentImage.caption[language]}
                  fill
                  quality={100}
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scrollPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scrollNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 flex justify-between items-center bg-[var(--background)]/90 backdrop-blur-sm">
        <Link
          href="/"
          className="text-sm font-medium tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-300"
        >
          {t("projectDetail.back")}
        </Link>

        <span className="hidden md:block text-sm font-medium tracking-widest uppercase text-[var(--foreground)] truncate max-w-[60vw]">
          {project.title[language]}
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--text-muted)]">
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors duration-300 ${
                language === "en"
                  ? "text-[var(--foreground)]"
                  : "hover:text-[var(--foreground)]"
              }`}
            >
              EN
            </button>
            <span className="text-[var(--border)]">/</span>
            <button
              onClick={() => setLanguage("pt")}
              className={`transition-colors duration-300 ${
                language === "pt"
                  ? "text-[var(--foreground)]"
                  : "hover:text-[var(--foreground)]"
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <span className="block text-sm tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4">
            {project.company}
          </span>
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-[var(--foreground)] mb-6 leading-[0.9]">
            {project.title[language]}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-[780px]">
            {project.description[language]}
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
          <div className="space-y-6">
            <div className="relative">
              <div
                ref={emblaRef}
                className="overflow-hidden bg-[var(--card)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.5)]"
              >
                <div className="flex">
                  {images.map((item, index) => (
                    <div className="flex-[0_0_100%]" key={item.url}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedIndex(index);
                          setLightboxOpen(true);
                        }}
                        className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[var(--card)]"
                      >
                        <Image
                          src={item.url}
                          alt={item.caption[language]}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 90vw, 70vw"
                          priority={index === 0}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute left-4 top-4 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                {imageLabel} {selectedIndex + 1} {ofLabel} {images.length}
              </div>

              <button
                type="button"
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div
              ref={thumbsRef}
              className="overflow-hidden py-2 -mx-4 px-4"
            >
              <div className="flex gap-3">
                {images.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.url}-thumb`}
                    onClick={() => onThumbClick(index)}
                    className={`relative flex-[0_0_96px] sm:flex-[0_0_112px] aspect-[4/3] transition-all duration-200 ${
                      index === selectedIndex
                        ? "ring-2 ring-[var(--foreground)] z-10"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.url}
                      alt={item.caption[language]}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="space-y-5">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                {imageLabel} {selectedIndex + 1} {ofLabel} {images.length}
              </div>
              <p className="text-xl md:text-2xl font-light text-[var(--foreground)] leading-snug min-h-[96px]">
                {currentImage?.caption[language]}
              </p>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-[0.2em]">
                {project.technologies.join(" · ")}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
