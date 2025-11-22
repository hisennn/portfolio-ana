"use client";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 mb-16 text-center">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Degree */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Academic</span>
            <div className="border-l border-gray-200 pl-8 py-2">
              <h3 className="font-cormorant text-2xl text-gray-900">Architecture & Urbanism</h3>
              <p className="text-gray-600 mt-2">UNESP (Universidade Estadual Paulista)</p>
              <p className="text-sm text-gray-400 mt-1">2020 - 2025 • Graduated</p>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Certifications</span>
            <div className="border-l border-gray-200 pl-8 py-2 space-y-8">
              <div>
                <h3 className="font-cormorant text-2xl text-gray-900">Enscape + SketchUp + AI</h3>
                <p className="text-gray-600 mt-2">BM Maquetes</p>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-gray-900">V-Ray Next 4.0</h3>
                <p className="text-gray-600 mt-2">BM Maquetes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
