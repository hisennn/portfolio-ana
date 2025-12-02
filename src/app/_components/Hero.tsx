"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
            <h2 className="text-sm md:text-base tracking-[0.3em] text-[var(--text-muted)] uppercase pl-1">
              {t('hero.subtitle')}
            </h2>
            <a 
              href="/downloads/Ana_Zabala_Designer_Resume.pdf" 
              download
              className="text-xs md:text-sm tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-300"
            >
              {t('footer.resume')}
            </a>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light text-[var(--foreground)] leading-[0.85] tracking-tight mb-8">
            Ana <br />
            <span className="italic font-normal">Zabala</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="h-[1px] w-16 md:w-20 bg-[var(--text-muted)] mb-8" />

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-lg leading-relaxed mb-4">
            {t('hero.description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-base text-[var(--text-muted)] mb-12">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{t('hero.location')}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm tracking-widest uppercase text-[var(--text-muted)]">
            <a 
              href="mailto:anazabala.arq@gmail.com" 
              className="hover:text-[var(--foreground)] transition-colors duration-300 text-lg"
            >
              anazabala.arq@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/ana-paula-zabala-854558327/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[var(--foreground)] transition-colors duration-300 text-lg"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--text-muted)]">{t('hero.scroll')}</span>
        <div className="w-12 h-[1px] bg-[var(--border)]" />
      </motion.div>
    </section>
  );
}
