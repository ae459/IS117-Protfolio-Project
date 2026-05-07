import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio work, work in progress, and project concepts — all grounded in real research.",
};

type ProjectStatus = "completed" | "in-progress" | "concept";

const projects: {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
  what_it_shows: string;
  tech: string[];
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
}[] = [
  {
    id: "portfolio-site",
    title: "IS117 Portfolio Site",
    status: "completed",
    image: "/project-protfolio-site.png",
    imageAlt: "Code editor and rendered website side by side, dark theme",
    description:
      "A spec-driven portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4. Designed using the professor’s AI orchestration methodology — planning with 9 phase specs, building with purpose, and verifying with quality gates. Every architectural decision is documented.",
    what_it_shows:
      "Spec-first development, design system thinking, and intentional AI-assisted workflow.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "GitHub Pages"],
    live: "/",
  },
  {
    id: "scrollytelling-museum",
    title: "IS117 Scrollytelling Museum",
    status: "completed",
    image: "/project-scrollytelling.png",
    imageAlt: "Museum-style scroll web interface with editorial layout",
    description:
      "A museum-style scrollytelling web experience built as an earlier IS117 project. Demonstrates understanding of layout, narrative flow, and editorial web design — the foundation that informed how I approached this portfolio.",
    what_it_shows:
      "Foundational web skills, design thinking, and storytelling with web technology.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "prompt-lab",
    title: "AI Prompt Engineering Lab",
    status: "in-progress",
    image: "/project-prompt-lab.png",
    imageAlt: "Abstract prompt conversation interface with AI-themed dark design",
    description:
      "A structured personal research workspace for testing and documenting LLM prompting patterns. Not a random folder of prompts — a documented methodology: system prompts, chain-of-thought examples, few-shot patterns, and output evaluation notes. Built as a GitHub repo.",
    what_it_shows:
      "Intentional AI use, evaluation discipline, and documentation habit.",
    tech: ["Python", "OpenAI API", "Markdown"],
  },
  {
    id: "spec-generator",
    title: "Spec-to-Site Generator",
    status: "concept",
    image: "/project-spec-generator.png",
    imageAlt: "Spec document transforming into code structure, abstract flow diagram",
    description:
      "A CLI tool that reads a markdown spec file, extracts component requirements, and generates typed Next.js component stubs with correct folder structure. Inspired by the professor’s spec-sprint methodology. Solves the gap between ‘I have a plan’ and ‘I have a starting codebase.’ Spec written. Build planned for Summer 2026.",
    what_it_shows:
      "AI orchestration thinking, developer tooling interest, and systems design approach.",
    tech: ["TypeScript", "Node.js", "OpenAI API"],
  },
];

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  completed: { label: "Completed", className: "status-badge status-badge--completed" },
  "in-progress": { label: "In Progress", className: "status-badge status-badge--in-progress" },
  concept: { label: "Concept", className: "status-badge status-badge--concept" },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <section className="section-spacing page-shell">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Projects"
            title="Work, Work in Progress, and Where I’m Heading"
            description="A mix of completed work, active projects, and researched concepts. Concepts are clearly labeled — a written spec is more honest than a half-built project."
          />
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const status = statusConfig[project.status];
            return (
              <Panel
                key={project.id}
                variant={project.status === "concept" ? "ghost" : "default"}
                className="hover-lift flex flex-col gap-5"
              >
                {/* Project image */}
                <div className="relative rounded-[var(--radius-md)] overflow-hidden border border-[var(--ink-08)] bg-[var(--surface-2)]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[var(--foreground)]">{project.title}</h3>
                  <span className={status.className} style={{ whiteSpace: "nowrap" }}>
                    {status.label}
                  </span>
                </div>

                <p className="text-[var(--ink-60)] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-col gap-3 border-t border-[var(--ink-08)] pt-4">
                  <p className="text-xs text-[var(--accent-soft)] italic">
                    “{project.what_it_shows}”
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-badge">{t}</span>
                    ))}
                  </div>
                  {(project.live || project.github) && (
                    <div className="flex gap-3 mt-1">
                      {project.live && (
                        <Button asChild variant="ghost" size="sm">
                          <Link href={project.live}>
                            View Site <ExternalLink size={12} />
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild variant="secondary" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub <ArrowRight size={12} />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Panel>
            );
          })}
        </div>
      </section>

      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="rounded-[var(--radius-xl)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="eyebrow mb-2">Opportunities</p>
            <p className="text-[var(--foreground)] font-semibold">
              Have a project or internship opportunity?
            </p>
            <p className="text-[var(--ink-60)] text-sm mt-1">
              I’m actively looking for ways to build real experience.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/contact">
              Get in touch <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
