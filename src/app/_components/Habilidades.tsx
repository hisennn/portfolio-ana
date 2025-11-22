"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "AutoCAD", "SketchUp", "V-Ray", "Revit", 
    "Photoshop", "Enscape", "Archicad", "Layout", 
    "Illustrator", "Office 365"
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 mb-8">
            Technical <br /> Expertise
          </h2>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 group"
              >
                <span className="h-[1px] w-4 bg-gray-300 group-hover:w-8 group-hover:bg-gray-900 transition-all duration-300" />
                <span className="text-lg font-light text-gray-600 group-hover:text-gray-900 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="font-cormorant text-2xl text-gray-900 mb-6">Soft Skills</h3>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 text-gray-500 font-light">
              <span>English (Professional Working Proficiency)</span>
              <span className="hidden md:inline">•</span>
              <span>Team Collaboration</span>
              <span className="hidden md:inline">•</span>
              <span>Detail Oriented</span>
              <span className="hidden md:inline">•</span>
              <span>Proactive Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
