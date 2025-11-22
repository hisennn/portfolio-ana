"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <h2 className="text-sm md:text-base tracking-[0.3em] text-gray-500 uppercase mb-6">
            Portfolio 2025
          </h2>
          <h1 className="font-cormorant text-7xl md:text-9xl font-light text-gray-900 leading-[0.9] tracking-tight mb-8">
            Ana <br />
            <span className="italic font-normal">Zabala</span>
          </h1>
          
          <div className="h-[1px] w-24 bg-gray-900 mb-8" />

          <p className="text-lg md:text-xl text-gray-600 font-light max-w-md leading-relaxed mb-8">
            Architectural Designer & 3D Visualizer based in São Paulo, Brazil. Translating design concepts into technical plans and photorealistic visuals.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm tracking-widest uppercase text-gray-500">
            <a 
              href="mailto:anazabala.arq@gmail.com" 
              className="hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-0.5"
            >
              anazabala.arq@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/ana-paula-zabala-854558327/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-0.5"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-gray-400">Scroll Down</span>
        <div className="w-12 h-[1px] bg-gray-300" />
      </motion.div>
    </section>
  );
}
