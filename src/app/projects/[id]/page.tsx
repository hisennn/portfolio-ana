"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pb-24">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 flex justify-between items-center bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-300">
          {t('projectDetail.back')}
        </Link>
        
        <span className="hidden md:block text-sm font-medium tracking-widest uppercase text-[var(--foreground)] truncate max-w-[200px]">
          {project.title[language]}
        </span>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--text-muted)]">
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-colors duration-300 ${language === 'en' ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'}`}
            >
              EN
            </button>
            <span className="text-[var(--border)]">/</span>
            <button 
              onClick={() => setLanguage('pt')}
              className={`transition-colors duration-300 ${language === 'pt' ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'}`}
            >
              PT
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[680px] mx-auto px-6 md:px-8 pt-24 md:pt-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="block text-sm tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4">
            {project.company}
          </span>
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-[var(--foreground)] mb-8 leading-[0.9]">
            {project.title[language]}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed border-l-2 border-[var(--border)] pl-6">
            {project.description[language]}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="space-y-20 md:space-y-24">
          {/* Renders */}
          {project.gallery.some((item) => item.type === "render") && (
            <section>
              <div className="grid grid-cols-1 gap-12">
                {project.gallery
                  .filter((item) => item.type === "render")
                  .map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                    >
                      <div className={`relative w-full overflow-hidden bg-[var(--border)] mb-4 ${
                        item.aspect === 'square' ? 'aspect-square' : 
                        item.aspect === '4/3' ? 'aspect-[4/3]' : 
                        item.aspect === 'portrait' ? 'aspect-[3/4]' :
                        'aspect-video'
                      }`}>
                        <Image
                          src={item.url}
                          alt={item.caption[language]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-[var(--text-muted)] font-light tracking-wide">
                        {item.caption[language]}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}

          {/* Technical Documentation */}
          {project.gallery.some((item) => item.type === "technical") && (
            <section className="space-y-8">
              <h3 className="font-cormorant text-2xl md:text-3xl text-[var(--foreground)] border-b border-[var(--border)] pb-3">
                {t('projectDetail.technical')}
              </h3>
              <div className="grid grid-cols-1 gap-12">
                {project.gallery
                  .filter((item) => item.type === "technical")
                  .map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--card)] border border-[var(--border)] mb-4 p-8">
                        <Image
                          src={item.url}
                          alt={item.caption[language]}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-[var(--text-muted)] font-light tracking-wide">
                        {item.caption[language]}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}

          {/* Process & Modeling */}
          {project.gallery.some((item) => item.type === "sketchup") && (
            <section className="space-y-8">
              <h3 className="font-cormorant text-2xl md:text-3xl text-[var(--foreground)] border-b border-[var(--border)] pb-3">
                {t('projectDetail.process')}
              </h3>
              <div className="grid grid-cols-1 gap-12">
                {project.gallery
                  .filter((item) => item.type === "sketchup")
                  .map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                    >
                      <div className={`relative overflow-hidden bg-[var(--border)] mb-4 ${
                        item.aspect === 'square' ? 'aspect-square' : 
                        item.aspect === '4/3' ? 'aspect-[4/3]' : 
                        'aspect-video'
                      }`}>
                        <Image
                          src={item.url}
                          alt={item.caption[language]}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <p className="text-sm text-[var(--text-muted)] font-light tracking-wide">
                        {item.caption[language]}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-20 md:mt-24 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-[var(--text-muted)] font-light uppercase tracking-widest">
          <div>
            <span className="block text-[var(--text-secondary)] mb-1">{t('projectDetail.role')}</span>
            {project.role[language]}
          </div>
          <div className="md:text-right">
            <span className="block text-[var(--text-secondary)] mb-1">{t('projectDetail.tools')}</span>
            {project.technologies.join(" · ")}
          </div>
        </div>
      </div>
    </div>
  );
}
