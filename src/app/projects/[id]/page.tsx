"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-gray-200 selection:text-gray-900 pb-24">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FAFAFA]/80 backdrop-blur-sm">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">
          ← Back
        </Link>
        <span className="text-sm font-medium tracking-widest uppercase text-gray-900">
          {project.title}
        </span>
      </nav>

      <div className="max-w-[900px] mx-auto px-6 md:px-12 pt-24 md:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl"
        >
          <span className="block text-sm tracking-[0.2em] uppercase text-gray-400 mb-6">
            {project.company}
          </span>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-gray-900 mb-12 leading-[0.9]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed border-l border-gray-300 pl-8">
            {project.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="space-y-32">
          {/* Renders */}
          {project.gallery.some((item) => item.type === "render") && (
            <section>
              <div className="grid grid-cols-1 gap-12">
                {project.gallery
                  .filter((item) => item.type === "render")
                  .map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 mb-4">
                        <Image
                          src={item.url}
                          alt={item.caption}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-500 font-light tracking-wide">
                        {item.caption}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}

          {/* Technical Documentation */}
          {project.gallery.some((item) => item.type === "technical") && (
            <section className="space-y-12">
              <h3 className="font-cormorant text-3xl text-gray-900 border-b border-gray-200 pb-4">
                Technical Documentation
              </h3>
              <div className="grid grid-cols-1 gap-12">
                {project.gallery
                  .filter((item) => item.type === "technical")
                  .map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-white border border-gray-100 mb-4 p-8">
                        <Image
                          src={item.url}
                          alt={item.caption}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-gray-500 font-light tracking-wide">
                        {item.caption}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}

          {/* Process & Modeling */}
          {project.gallery.some((item) => item.type === "sketchup") && (
            <section className="space-y-12">
              <h3 className="font-cormorant text-3xl text-gray-900 border-b border-gray-200 pb-4">
                Process & Modeling
              </h3>
              <div className="grid grid-cols-1 gap-12">
                {project.gallery
                  .filter((item) => item.type === "sketchup")
                  .map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    >
                      <div className="relative aspect-video overflow-hidden bg-gray-100 mb-4">
                        <Image
                          src={item.url}
                          alt={item.caption}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <p className="text-sm text-gray-500 font-light tracking-wide">
                        {item.caption}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-32 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-gray-500 font-light uppercase tracking-widest">
          <div>
            <span className="block text-gray-900 mb-1">Role</span>
            {project.role}
          </div>
          <div>
            <span className="block text-gray-900 mb-1">Tools</span>
            {project.technologies.join(" • ")}
          </div>
        </div>
      </div>
    </div>
  );
}
