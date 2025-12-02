import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projetos";
import Skills from "./_components/Habilidades";
import Education from "./_components/Formacao";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] selection:bg-gray-200 dark:selection:bg-zinc-700 selection:text-gray-900 dark:selection:text-gray-100">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
