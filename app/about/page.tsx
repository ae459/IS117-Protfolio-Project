import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";
import { imgPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who I am, why I chose AI engineering, and where I’m building toward.",
};

const values = [
  {
    title: "Spec First",
    description:
      "I write down what I’m building before I build it. Planning prevents drift. This portfolio has 9 spec documents written before a single page was coded.",
  },
  {
    title: "Intentional AI Use",
    description:
      "AI is a collaborator, not a replacement for judgment. I direct it, verify its output, and make all architectural decisions myself.",
  },
  {
    title: "Verification Discipline",
    description:
      "Nothing is done until it’s tested. Quality gates — typecheck, lint, build — are not optional steps I skip when I’m in a hurry.",
  },
  {
    title: "Learning in Public",
    description:
      "I document my process. This portfolio is itself evidence of that practice. The specs, the research, the workflow log — it’s all in the repo.",
  },
];

const timeline = [
  {
    date: "Fall 2022",
    title: "Started at NJIT — Information Technology",
    detail:
      "Transferred foundational CS credits from Middlesex County College (OOP, Data Structures, Discrete Math) and began the IT program. Also completed Computing & Effective Communication.",
  },
  {
    date: "Spring 2023",
    title: "Information Design, Ethics & Professional Development",
    detail:
      "IT 201 Information Design Techniques, IS 350 Computers Society & Ethics, YWCC 307 Professional Development in Computing. First exposure to design principles and the professional responsibilities of working in tech.",
  },
  {
    date: "Spring 2025",
    title: "Networking & Internet Applications",
    detail:
      "IT 120 Intro to Networking Technology, IT 202 Internet Applications. Built understanding of how systems communicate and how web applications are structured and deployed.",
  },
  {
    date: "Fall 2025",
    title: "Databases & System Administration",
    detail:
      "IS 331 Database Design Management & Applications, IT 340 Intro to System Administration. Learned how data is structured at scale and how production systems are managed.",
  },
  {
    date: "Spring 2026",
    title: "Final Semester — Capstone, Systems Integration & IS117",
    detail:
      "IT 491 IT Capstone Project, IT 490 Systems Integration, IT 420 Computer Systems & Networks, and IS117 Web Development. Built this portfolio and the Marvel Comic Book Museum as final-semester projects.",
  },
  {
    date: "May 2026",
    title: "Graduated — B.S. Information Technology, NJIT",
    detail:
      "Completed degree. Now building toward AI Forward Engineering — applying the systems, networking, and design foundations from the IT program to AI-integrated architectures.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing page-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden border border-[var(--ink-12)] bg-[var(--surface-1)]" style={{ aspectRatio: "3/4" }}>
            <Image
              src={imgPath("/about-portrait.png")}
              alt="Stylized digital illustration of a young engineer at a workstation with indigo accent lighting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="eyebrow mb-3">About</p>
            <div className="accent-line mb-6" />
            <h1 className="mb-6">Where I Am and Where I&apos;m Going</h1>
            <p className="text-[var(--ink-70)] text-xl leading-relaxed">
              I&apos;m a recent graduate from NJIT in Information Technology. I don&apos;t have
              years of industry experience yet. What I have is a clear
              research-backed direction, the discipline to plan before I build,
              and the judgment to use AI as a tool — not a shortcut.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <SectionHeading eyebrow="Story" title="Why AI Engineering" />
          <div className="flex flex-col gap-5 text-[var(--ink-70)] leading-relaxed">
            <p>
              I got interested in AI the way most people do — using the tools.
              But the more I used them, the more I wanted to understand what was
              actually happening underneath. Not the math (not yet), but the
              architecture: how do these systems get built? How do you make them
              reliable? How do you integrate them into something real?
            </p>
            <p>
              That question led me to the professor’s reference repo, which
              taught me something more valuable than any specific technology:
              a methodology. Spec-driven development, sprint contracts,
              verification gates. A way of working that keeps AI as a tool
              rather than letting it become the decision-maker.
            </p>
            <p>
              AI Forward Engineering appeals to me because it’s specific. It’s
              not “work in AI” — it’s build the orchestration layer, design the
              prompting system, make the pipeline reliable. That’s a job I can
              research, practice, and build toward now that I&apos;ve graduated.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Direction */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Direction"
          title="What an AI Forward Engineer Actually Does"
          description="Based on research into real job listings, industry writing, and the methodology I’ve studied."
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              title: "Designs prompting systems",
              desc: "Not just writing prompts — building structured, repeatable prompting patterns that produce consistent results.",
            },
            {
              title: "Builds LLM pipelines",
              desc: "Integrating AI APIs into real applications with proper error handling, fallbacks, and output validation.",
            },
            {
              title: "Orchestrates AI workflows",
              desc: "Multi-step pipelines where models, tools, and data work together with clear control flow.",
            },
            {
              title: "Evaluates AI output",
              desc: "Creating criteria for ‘good enough’ and building evaluation systems — not just eyeballing results.",
            },
          ].map((item) => (
            <Panel key={item.title} variant="ghost" className="flex flex-col gap-2">
              <h4 className="text-[var(--accent-soft)]">{item.title}</h4>
              <p className="text-[var(--ink-60)] text-sm leading-relaxed">{item.desc}</p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="How I Work"
          title="Working Values"
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <Panel key={v.title} variant="default" className="flex flex-col gap-3">
              <h4 className="text-[var(--foreground)]">{v.title}</h4>
              <p className="text-[var(--ink-60)] text-sm leading-relaxed">
                {v.description}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Learning Timeline"
          title="The Arc So Far"
          className="mb-10"
        />
        <ol className="flex flex-col gap-0">
          {timeline.map((item, i) => (
            <li key={i} className="flex gap-6 pb-8 relative">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--background)] mt-1 shrink-0" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--ink-12)] mt-2" />
                )}
              </div>
              <div className="flex flex-col gap-1 pb-2">
                <p className="font-mono text-xs text-[var(--accent-soft)] tracking-widest uppercase">
                  {item.date}
                </p>
                <h4 className="text-[var(--foreground)]">{item.title}</h4>
                <p className="text-[var(--ink-60)] text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              See My Projects <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
