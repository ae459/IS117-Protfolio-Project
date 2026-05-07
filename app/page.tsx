import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";

const identitySignals = [
  {
    eyebrow: "What I Build",
    title: "AI-Forward Systems",
    description:
      "Tools and workflows where AI is an intentional architectural layer — not an afterthought. Automation pipelines, LLM integrations, and orchestration patterns.",
    icon: Zap,
  },
  {
    eyebrow: "How I Work",
    title: "Spec First, Then Build",
    description:
      "I plan before I code. Every project starts with a clear problem statement, research, and a written spec. AI is used as a collaborator, not a crutch.",
    icon: BookOpen,
  },
  {
    eyebrow: "Where I’m Headed",
    title: "AI Engineering",
    description:
      "I want to work at the intersection of software engineering and applied AI — building the infrastructure that makes intelligent systems reliable at scale.",
    icon: Target,
  },
];

const skillPreview = [
  "Python", "TypeScript", "Next.js", "Tailwind CSS",
  "OpenAI API", "Prompt Engineering", "Git", "Spec-Driven Dev",
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing page-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">AI Forward Engineer · Freshman at NJIT</p>
            <h1 className="text-[var(--foreground)] leading-[1.05]">
              Building the systems that make AI{" "}
              <span className="text-[var(--accent-soft)]">useful.</span>
            </h1>
            <p className="text-[var(--ink-70)] text-lg leading-relaxed max-w-[50ch]">
              I’m a freshman at NJIT studying Computer Science with a focus on
              AI-forward engineering. I’m not just learning to use AI tools —
              I’m learning to design the workflows, architectures, and systems
              where AI does serious work.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Projects
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div
              className="rounded-[var(--radius-xl)] border border-[var(--ink-12)] bg-[var(--surface-1)] overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center p-8">
                  <div
                    className="w-16 h-16 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center"
                  >
                    <Zap size={28} className="text-[var(--accent-soft)]" />
                  </div>
                  <p className="font-mono text-xs text-[var(--ink-40)] tracking-widest uppercase">
                    AI · Systems · Engineering
                  </p>
                  <p className="text-[var(--ink-60)] text-sm max-w-[24ch] leading-relaxed">
                    Designing intelligent systems with intention and discipline.
                  </p>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-[var(--radius-xl)] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, var(--accent-muted) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Identity Signals */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Direction"
          title="Who I’m Building Toward"
          description="Three things that define how I approach my work and where I’m heading."
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {identitySignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <Panel key={signal.title} variant="default" className="hover-lift flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-[var(--radius-sm)] bg-[var(--accent-muted)] border border-[var(--accent-border)]">
                    <Icon size={16} className="text-[var(--accent-soft)]" />
                  </div>
                  <p className="eyebrow">{signal.eyebrow}</p>
                </div>
                <h3 className="text-[var(--foreground)] text-lg font-semibold">
                  {signal.title}
                </h3>
                <p className="text-[var(--ink-60)] text-sm leading-relaxed">
                  {signal.description}
                </p>
              </Panel>
            );
          })}
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I’m Building With"
          />
          <Button asChild variant="ghost">
            <Link href="/skills">
              Full skill set <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillPreview.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="rounded-[var(--radius-xl)] border border-[var(--accent-border)] bg-[var(--accent-muted)] p-10 text-center flex flex-col items-center gap-5">
          <p className="eyebrow">Get in Touch</p>
          <p className="text-[var(--foreground)] text-2xl font-bold tracking-tight max-w-[32ch]">
            I’m at the beginning of this path. But I’m building it with intention.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Let’s Talk <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
