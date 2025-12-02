'use client';

import Link from "next/link";
import { useState } from "react";
import { useScrollDirection } from "../_hooks/useScrollDirection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { key: 'projects', label: t('nav.projects') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'education', label: t('nav.education') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-6 transition-transform duration-500 ${
          scrollDirection === 'down' && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
        } bg-[var(--background)]/80 backdrop-blur-sm`}
      >
        <Link href="/" className="text-2xl font-cormorant font-bold tracking-wide text-[var(--foreground)] z-50">
          ANA ZABALA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-base font-medium tracking-widest uppercase text-[var(--muted)]">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link 
                  href={`#${item.key}`}
                  className="hover:text-[var(--foreground)] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--foreground)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <div className="flex items-center gap-2 text-base font-medium tracking-wide text-[var(--text-muted)] border-l border-[var(--border)] pl-8">
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'}`}
            >
              EN
            </button>
            <span className="text-[var(--border)]">/</span>
            <button 
              onClick={() => setLanguage('pt')}
              className={`transition-colors ${language === 'pt' ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'}`}
            >
              PT
            </button>
          </div>
        </nav>

        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 text-[var(--foreground)]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 items-center justify-center h-full pb-24">
              {navItems.map((item) => (
                <Link 
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-cormorant text-[var(--foreground)] hover:text-[var(--text-muted)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-lg text-[var(--text-muted)] mt-4"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
              
              <div className="flex items-center gap-4 mt-4 pt-8 border-t border-[var(--border)]">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-lg transition-colors ${language === 'en' ? 'text-[var(--foreground)] font-medium' : 'text-[var(--text-muted)]'}`}
                >
                  English
                </button>
                <span className="text-[var(--border)]">|</span>
                <button 
                  onClick={() => setLanguage('pt')}
                  className={`text-lg transition-colors ${language === 'pt' ? 'text-[var(--foreground)] font-medium' : 'text-[var(--text-muted)]'}`}
                >
                  Português
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
