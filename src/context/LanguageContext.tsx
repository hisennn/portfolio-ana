"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Portfolio 2025",
    "hero.description": "Architectural Designer, 3D modeling, and photorealistic renderings.",
    "hero.location": "São Paulo, Brazil",
    "hero.scroll": "Scroll Down",

    // Projects
    "projects.title": "Projects",
    "projects.viewProject": "View Project",

    // Skills
    "skills.title": "Tools I Use",
    "skills.soft": "Other Skills",
    "skills.english": "English (Professional Working Proficiency)",
    "skills.teamwork": "Teamwork",
    "skills.detail": "Attention to Detail",
    "skills.problem": "Problem Solving",

    // Education
    "education.title": "Education",
    "education.academic": "Degree",
    "education.certifications": "Courses",
    "education.degree": "Architecture & Urbanism",
    "education.university": "UNESP (São Paulo State University)",
    "education.period": "2020 - 2025 • Graduated",

    // Footer
    "footer.title": "Let's work",
    "footer.subtitle": "together.",
    "footer.resume": "Resume",
    "footer.copyright": "Ana Zabala",
    "footer.tagline": "Architecture Portfolio",

    // Project Detail
    "projectDetail.back": "← Back",
    "projectDetail.role": "Role",
    "projectDetail.tools": "Tools",
    "projectDetail.technical": "Technical Drawings",
    "projectDetail.process": "Process",
  },
  pt: {
    // Header
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.education": "Formação",
    "nav.contact": "Contato",

    // Hero
    "hero.subtitle": "Portfólio 2025",
    "hero.description": "Arquiteta focada em modelagem 3D e renderizações fotorrealistas.",
    "hero.location": "São Paulo, Brasil",
    "hero.scroll": "Role para baixo",

    // Projects
    "projects.title": "Projetos",
    "projects.viewProject": "Ver Projeto",

    // Skills
    "skills.title": "Ferramentas",
    "skills.soft": "Outras Habilidades",
    "skills.english": "Inglês (Avançado)",
    "skills.teamwork": "Trabalho em Equipe",
    "skills.detail": "Atenção aos Detalhes",
    "skills.problem": "Resolução de Problemas",

    // Education
    "education.title": "Formação",
    "education.academic": "Graduação",
    "education.certifications": "Cursos",
    "education.degree": "Arquitetura e Urbanismo",
    "education.university": "UNESP (Universidade Estadual Paulista)",
    "education.period": "2020 - 2025 • Formada",

    // Footer
    "footer.title": "Vamos trabalhar",
    "footer.subtitle": "juntos.",
    "footer.resume": "Currículo",
    "footer.copyright": "Ana Zabala",
    "footer.tagline": "Portfólio de Arquitetura",

    // Project Detail
    "projectDetail.back": "← Voltar",
    "projectDetail.role": "Função",
    "projectDetail.tools": "Ferramentas",
    "projectDetail.technical": "Desenhos Técnicos",
    "projectDetail.process": "Processo",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguageState(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  // Prevent flash of wrong language
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
