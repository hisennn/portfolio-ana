"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  
  const resumeFile = language === 'pt' 
    ? '/downloads/Ana_Zabala_Curriculo.pdf' 
    : '/downloads/Ana_Zabala_Resume.pdf';
  
  return (
    <footer id="contact" className="py-16 md:py-20 px-6 md:px-12 bg-[#2C241F] dark:bg-[#141414] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl mb-6">
              {t('footer.title')} <br />
              <span className="italic text-gray-400">{t('footer.subtitle')}</span>
            </h2>
            <a 
              href="mailto:anazabala.arq@gmail.com" 
              className="inline-block text-lg md:text-xl border-b border-gray-600 pb-1 hover:text-gray-300 hover:border-gray-400 transition-all duration-300"
            >
              anazabala.arq@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-4 text-base text-gray-400 font-light">
            <p>São Paulo, Brazil</p>
            <p>+55 (11) 9 5079-2001</p>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.linkedin.com/in/ana-paula-zabala-854558327/" target="_blank" className="hover:text-white transition-colors duration-300">
                LinkedIn
              </Link>
              <span className="text-gray-600">·</span>
              <a href={resumeFile} download className="hover:text-white transition-colors duration-300">
                {t('footer.resume')}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6 border-t border-gray-800/50 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
          <p>{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
