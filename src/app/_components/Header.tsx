'use client';

import Link from "next/link";
import { useState } from "react";
import { useScrollDirection } from "../_hooks/useScrollDirection";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-6 transition-transform duration-500 ${
          scrollDirection === 'down' && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
        } bg-[#FAFAFA]/80 backdrop-blur-sm`}
      >
        <Link href="/" className="text-2xl font-cormorant font-bold tracking-wide text-gray-900 z-50">
          ANA ZABALA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-500">
            {['Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-900 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 text-gray-900"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAFAFA] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 items-center justify-center h-full pb-24">
              {['Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-cormorant text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
