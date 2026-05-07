import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Tools, technologies, and workflow practices I’m developing — with honest self-assessment.",
};

const categories = [
  {
    title: "Languages & Runtimes",
    skills: [
      { name: "Python", level: "Learning", note: "Primary language for AI/ML work. Used for API scripts and prompt experiments." },
      { name: "TypeScript", level: "Practicing", note: "Used in this portfolio project. Strong preference over plain JS." },
      { name: "HTML & CSS", level: "Comfortable", note: "Foundational — built multiple web projects." },
      { name: "JavaScript", level: "Comfortable", note: "Used throughout IS117 coursework." },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js (App Router)", level: "Learning", note: "Used for this portfolio. Static export + App Router." },
      { name: "Tailwind CSS v4", level: "Practicing", note: "Used in this project with a custom token system." },
      { name: "React", level: "Learning", note: "Foundational to Next.js work." },
      { name: "Node.js", level: "Familiar", note: "Used for CLI scripts and tooling." },
    ],
  },
  {
    title: "AI Tools & APIs",
    skills: [
      { name: "OpenAI API", level: "Learning", note: "Prompt engineering experiments, basic API integration." },
      { name: "ChatGPT / Gemini", level: "Practicing", note: "Used intentionally in workflow — not mindlessly." },
      { name: "GitHub Copilot", level: "Practicing", note: "AI pair programming — learning to direct it effectively." },
      { name: "Prompt Engineering", level: "Practicing", note: "Structured prompting, chain-of-thought, few-shot patterns." },
    ],
  },
  {
    title: "Dev Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Comfortable", note: "Version control, branching, GitHub Pages deployment." },
      { name: "VS Code", level: "Comfortable", note: "Primary editor." },
      { name: "ESLint + Prettier", level: "Learning", note: "Code quality tools — used in this project." },
      { name: "Spec-Driven Dev", level: "Practicing", note: "Learned from professor’s methodology. Writing specs before building." },
    ],
  },
];

const levelColors: Record<string, string> = {
  Familiar: "text-[var(--ink-50)]",
  Learning: "text-[var(--accent-soft)]",
  Practicing: "text-[#60d394]",
  Comfortable: "text-[#4ade80]",
};

const workflowSteps = [
  {
    step: "01",
    title: "Research Phase",
    detail: "Use ChatGPT or Gemini to understand a new concept. Cross-reference with official docs — never accept AI output as ground truth.",
  },
  {
    step: "02",
    title: "Planning Phase",
    detail: "Write specs before writing code. This portfolio has 9 spec documents. Use AI to review a spec for gaps, then make decisions myself.",
  },
  {
    step: "03",
    title: "Building Phase",
    detail: "Use GitHub Copilot for boilerplate. Direct it explicitly. Always review generated code. Use typecheck and lint to verify quality.",
  },
  {
    step: "04",
    title: "Verification Phase",
    detail: "Run quality gates after every phase. AI-generated code that doesn’t pass typecheck gets fixed or rewritten. Tests are the authority.",
  },
];

const roadmap = [
  { date: "Summer 2026", goal: "LangChain fundamentals — build a simple RAG system from scratch." },
  { date: "Summer 2026", goal: "Start Spec-to-Site Generator project (spec already written)." },
  { date: "Fall 2026", goal: "Data Structures course at NJIT." },
  { date: "Fall 2026", goal: "Begin Python for Machine Learning (self-directed)." },
  { date: "2027", goal: "First internship application in AI/ML engineering." },
  { date: "2027–2028", goal: "Deep dive: vector databases, embeddings, production AI systems." },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing page-shell">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Skills"
            title="What I Know, What I’m Learning, What’s Next"
            description="Honest self-assessment using text labels instead of made-up percentage bars. Levels reflect real, current capability — not aspirations."
          />
        </div>
      </section>

      {/* Skill Categories */}
      <section className="page-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((cat) => (
            <Panel key={cat.title} variant="default" className="flex flex-col gap-5">
              <h3 className="text-[var(--foreground)] text-base font-semibold border-b border-[var(--ink-08)] pb-3">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--ink-80)]">
                        {skill.name}
                      </span>
                      <span
                        className={`font-mono text-xs font-bold tracking-wider ${levelColors[skill.level] || "text-[var(--ink-60)]"}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--ink-50)] leading-relaxed">
                      {skill.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>

        {/* Level Key */}
        <div className="mt-6 flex flex-wrap gap-4 p-4 rounded-[var(--radius-md)] border border-[var(--ink-08)] bg-[var(--surface-1)]">
          <p className="text-xs text-[var(--ink-40)] font-mono uppercase tracking-widest w-full">Level Key</p>
          {Object.entries(levelColors).map(([level, color]) => (
            <span key={level} className={`text-xs font-bold font-mono ${color}`}>
              {level}
            </span>
          ))}
          <p className="text-xs text-[var(--ink-40)] w-full">Familiar → Learning → Practicing → Comfortable</p>
        </div>
      </section>

      {/* AI Workflow */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="AI Workflow"
          title="How I Actually Use AI Tools"
          description="AI is a collaborator in my process — not a replacement for it."
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {workflowSteps.map((step) => (
            <Panel key={step.step} variant="ghost" className="flex flex-col gap-3">
              <p className="font-mono text-3xl font-bold text-[var(--ink-12)]">
                {step.step}
              </p>
              <h4 className="text-[var(--accent-soft)]">{step.title}</h4>
              <p className="text-[var(--ink-60)] text-sm leading-relaxed">
                {step.detail}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Learning Roadmap"
          title="What’s Next"
          description="Specific, dated, and realistic. Not a wishlist — a plan."
          className="mb-10"
        />
        <div className="flex flex-col gap-3">
          {roadmap.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 p-4 rounded-[var(--radius-md)] border border-[var(--ink-08)] bg-[var(--surface-1)]"
            >
              <span className="font-mono text-xs text-[var(--accent-soft)] tracking-widest uppercase shrink-0 pt-0.5">
                {item.date}
              </span>
              <p className="text-[var(--ink-70)] text-sm leading-relaxed">
                {item.goal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-[var(--ink-70)] text-lg max-w-[42ch]">
            Looking for someone who builds with intention and learns fast?
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
