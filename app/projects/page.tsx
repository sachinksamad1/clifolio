import { projects } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="mb-12">
        <nav className="flex items-center gap-2 font-code text-xs mb-4 text-on-surface-variant">
          <Link href="/" className="hover:text-primary">
            root
          </Link>
          <span>/</span>
          <span className="text-on-background font-bold uppercase">
            projects
          </span>
        </nav>
        <h1 className="font-headline text-headline-xl mb-4">
          Project <span className="text-primary">Records</span>
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
          Exhaustive list of system deployments, research initiatives, and
          technical prototypes.
        </p>
      </div>

      <div className="space-y-12">
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
