"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  
  const skills = [
    "AutoCAD", "SketchUp", "V-Ray", "Revit", 
    "Photoshop", "Enscape", "Archicad", "Layout", 
    "Illustrator", "Office 365"
  ];

  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-6 lg:mb-0">
            {t('skills.title')}
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <span className="h-px w-3 bg-[var(--text-muted)] group-hover:w-6 group-hover:bg-[var(--foreground)] transition-all duration-300" />
                <span className="text-xl font-light text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-[var(--border)]">
            <h3 className="font-cormorant text-xl md:text-2xl text-[var(--foreground)] mb-4 font-medium">{t('skills.soft')}</h3>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-6 text-lg text-[var(--text-secondary)] font-light">
              <span>{t('skills.english')}</span>
              <span className="hidden md:inline text-[var(--text-muted)]">·</span>
              <span>{t('skills.teamwork')}</span>
              <span className="hidden md:inline text-[var(--text-muted)]">·</span>
              <span>{t('skills.detail')}</span>
              <span className="hidden md:inline text-[var(--text-muted)]">·</span>
              <span>{t('skills.problem')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
