"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { language, t } = useLanguage();
  
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-[var(--card)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-full h-px bg-[var(--border)]" />
        </div>

        <div className="flex flex-col gap-16 md:hidden">
          {projects.map((projeto) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="group"
            >
              <Link href={`/projects/${projeto.id}`} className="block">
                <div className={`relative overflow-hidden bg-[var(--border)] mb-6 ${
                  projeto.mainImageAspect === 'square' ? 'aspect-square' : 
                  projeto.mainImageAspect === 'portrait' ? 'aspect-[3/4]' :
                  'aspect-[4/3]'
                }`}>
                  <Image
                    src={projeto.mainImage}
                    alt={projeto.title[language]}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-3">
                  <div>
                    <h3 className="font-cormorant text-2xl md:text-3xl text-[var(--foreground)] mb-1 group-hover:italic transition-all duration-300">
                      {projeto.title[language]}
                    </h3>
                    <p className="text-[10px] text-[var(--text-secondary)] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mb-2">
                      {projeto.technologies.join(" · ")}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] tracking-wider uppercase">
                      {projeto.company}
                    </p>


                  </div>
                  <span className="self-start md:self-auto text-sm border border-[var(--text-muted)] px-3 py-1.5 rounded-full text-[var(--text-muted)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-all duration-300">
                    {t('projects.viewProject')}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex flex-row gap-12">
          <div className="flex flex-col gap-16 flex-1">
            {projects.filter((_, i) => i % 2 === 0).map((projeto, i) => (
              <motion.div
                key={projeto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/projects/${projeto.id}`} className="block">
                  <div className={`relative overflow-hidden bg-[var(--border)] mb-6 ${
                    projeto.mainImageAspect === 'square' ? 'aspect-square' : 
                    projeto.mainImageAspect === 'portrait' ? 'aspect-[3/4]' :
                    'aspect-[4/3]'
                  }`}>
                    <Image
                      src={projeto.mainImage}
                      alt={projeto.title[language]}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-3">
                    <div>
                      <h3 className="font-cormorant text-2xl lg:text-3xl text-[var(--foreground)] mb-1 group-hover:italic transition-all duration-300">
                        {projeto.title[language]}
                      </h3>
                      <p className="text-[10px] text-[var(--text-secondary)] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mb-2">
                        {projeto.technologies.join(" · ")}
                      </p>
                      <p className="text-sm text-[var(--text-muted)] tracking-wider uppercase">
                        {projeto.company}
                      </p>

                    </div>
                    <span className="self-start md:self-auto text-sm border border-[var(--text-muted)] px-3 py-1.5 rounded-full text-[var(--text-muted)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-all duration-300">
                      {t('projects.viewProject')}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-16 flex-1 mt-16">
            {projects.filter((_, i) => i % 2 === 1).map((projeto, i) => (
              <motion.div
                key={projeto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.1, ease: "easeOut" }}
                className="group"
              >
                <Link href={`/projects/${projeto.id}`} className="block">
                  <div className={`relative overflow-hidden bg-[var(--border)] mb-6 ${
                    projeto.mainImageAspect === 'square' ? 'aspect-square' : 
                    projeto.mainImageAspect === 'portrait' ? 'aspect-[3/4]' :
                    'aspect-[4/3]'
                  }`}>
                    <Image
                      src={projeto.mainImage}
                      alt={projeto.title[language]}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-3">
                    <div>
                      <h3 className="font-cormorant text-2xl lg:text-3xl text-[var(--foreground)] mb-1 group-hover:italic transition-all duration-300">
                        {projeto.title[language]}
                      </h3>
                      <p className="text-[10px] text-[var(--text-secondary)] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mb-2">
                        {projeto.technologies.join(" · ")}
                      </p>
                      <p className="text-sm text-[var(--text-muted)] tracking-wider uppercase">
                        {projeto.company}
                      </p>

                    </div>
                    <span className="self-start md:self-auto text-sm border border-[var(--text-muted)] px-3 py-1.5 rounded-full text-[var(--text-muted)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-all duration-300">
                      {t('projects.viewProject')}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
