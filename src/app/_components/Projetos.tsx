"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="font-cormorant text-5xl md:text-6xl text-gray-900 mb-6">
            Selected Works
          </h2>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((projeto, i) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <Link href={`/projects/${projeto.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={projeto.mainImage}
                    alt={projeto.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
                  <div>
                    <h3 className="font-cormorant text-3xl text-gray-900 mb-1 group-hover:italic transition-all">
                      {projeto.title}
                    </h3>
                    <p className="text-sm text-gray-500 tracking-wide uppercase">
                      {projeto.company}
                    </p>
                  </div>
                  <span className="self-start md:self-auto text-xs border border-gray-300 px-3 py-1 rounded-full text-gray-500 group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">
                    View Project
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
