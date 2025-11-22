"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-[#1A1A1A] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-cormorant text-5xl md:text-6xl mb-8">
              Let&apos;s create <br />
              <span className="italic text-gray-400">something beautiful.</span>
            </h2>
            <a 
              href="mailto:anazabala.arq@gmail.com" 
              className="text-xl md:text-2xl border-b border-gray-600 pb-2 hover:text-gray-300 hover:border-white transition-all"
            >
              anazabala.arq@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-6 text-gray-400 font-light">
            <p>São Paulo, Brazil</p>
            <p>+55 (11) 9 5079-2001</p>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/ana-paula-zabala-854558327/" target="_blank" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
              <a href="/downloads/Ana_Zabala_Designer_Resume.pdf" download className="hover:text-white transition-colors">
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Ana Zabala</p>
          <p>Architectural Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
