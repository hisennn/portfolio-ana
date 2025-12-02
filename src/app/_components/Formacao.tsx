"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-20 md:py-28 px-6 md:px-12 bg-[var(--card)]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-12 md:mb-16 text-center">
          {t('education.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-3xl mx-auto">
          <div className="space-y-4">
            <span className="text-sm tracking-widest uppercase text-[var(--text-muted)] font-semibold">{t('education.academic')}</span>
            <div className="border-l border-[var(--border)] pl-6 py-1">
              <h3 className="font-cormorant text-xl md:text-2xl text-[var(--foreground)]">{t('education.degree')}</h3>
              <p className="text-base text-[var(--text-secondary)] mt-2">{t('education.university')}</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">{t('education.period')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-sm tracking-widest uppercase text-[var(--text-muted)] font-semibold">{t('education.certifications')}</span>
            <div className="border-l border-[var(--border)] pl-6 py-1 space-y-6">
              <div>
                <h3 className="font-cormorant text-xl md:text-2xl text-[var(--foreground)]">Enscape + SketchUp + AI</h3>
                <p className="text-base text-[var(--text-secondary)] mt-1">BM Maquetes</p>
              </div>
              <div>
                <h3 className="font-cormorant text-xl md:text-2xl text-[var(--foreground)]">V-Ray Next 4.0</h3>
                <p className="text-base text-[var(--text-secondary)] mt-1">BM Maquetes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
