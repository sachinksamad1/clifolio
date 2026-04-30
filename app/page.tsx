import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import Experience from "@/app/components/Experience";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import StackGrid from "@/app/components/StackGrid";
import LogsSection from "@/app/components/LogsSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <Hero />
      <AboutMe />
      <Experience />
      <ProjectsGrid />
      <StackGrid />
      <LogsSection />
      <ContactSection />
    </div>
  );
}
