import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-headline text-headline-lg uppercase">
          Selected_Projects
        </h2>
        <div className="flex-grow h-0.5 bg-on-background/10"></div>
        <Link
          href="/projects"
          className="font-label-caps text-label-caps text-primary hover:underline flex items-center gap-2"
        >
          VIEW_ALL_RECORDS{" "}
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
