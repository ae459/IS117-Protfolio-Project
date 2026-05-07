import type { Metadata } from "next";
import { Mail, ArrowUpRight, GitBranch, Link as LinkIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Panel } from "@/components/ui/panel";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — internships, collaboration, or mentorship.",
};

const audience = [
  {
    eyebrow: "Internships",
    who: "Employers & Recruiters",
    description:
      "I’m actively looking for internship opportunities in AI engineering, software development, or technical roles for Summer/Fall 2026. Even if the role is entry-level, I’m ready to work hard and learn fast.",
  },
  {
    eyebrow: "Collaboration",
    who: "Fellow Students & Builders",
    description:
      "If you’re working on a project that uses AI in a serious way — not just as a wrapper — I’m interested in talking and potentially collaborating.",
  },
  {
    eyebrow: "Mentorship",
    who: "Engineers & Practitioners",
    description:
      "If you work in AI engineering and are open to a short conversation about the field, I’d be grateful. I ask specific questions and I do my homework first.",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    sub: "github.com/AmirE",
    href: siteConfig.github,
    icon: GitBranch,
    external: true,
  },
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/amir-e",
    href: siteConfig.linkedin,
    icon: LinkIcon,
    external: true,
  },
  {
    label: "Email",
    sub: "amir@njit.edu",
    href: siteConfig.email,
    icon: Mail,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Contact</p>
          <div className="accent-line mb-6" />
          <h1 className="mb-6">Let’s Talk</h1>
          <p className="text-[var(--ink-70)] text-xl leading-relaxed">
            I’m a freshman at NJIT. I’m not going to pretend I have years
            of experience. What I have is a clear direction, a documented
            workflow, and a genuine interest in building things that work. If
            that’s interesting to you — reach out.
          </p>
        </div>
      </section>

      {/* Who I Want to Hear From */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Who I Want to Hear From"
          title="The Right Conversations"
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {audience.map((item) => (
            <Panel key={item.who} variant="default" className="hover-lift flex flex-col gap-4">
              <div>
                <p className="eyebrow mb-1">{item.eyebrow}</p>
                <h3 className="text-[var(--foreground)] text-lg">{item.who}</h3>
              </div>
              <p className="text-[var(--ink-60)] text-sm leading-relaxed">
                {item.description}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Contact Links */}
      <section className="section-spacing page-shell border-t border-[var(--ink-08)]">
        <SectionHeading
          eyebrow="Links"
          title="Find Me Here"
          className="mb-10"
        />
        <div className="flex flex-col gap-3 max-w-lg">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            const Tag = item.external ? "a" : "a";
            const extraProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Tag
                key={item.label}
                href={item.href}
                {...extraProps}
                className="group flex items-center justify-between p-5 rounded-[var(--radius-lg)] border border-[var(--ink-12)] bg-[var(--surface-1)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-[var(--radius-sm)] bg-[var(--surface-2)] group-hover:bg-[var(--accent-muted)] transition-colors">
                    <Icon size={18} className="text-[var(--ink-60)] group-hover:text-[var(--accent-soft)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {item.label}
                    </p>
                    <p className="font-mono text-xs text-[var(--ink-50)]">
                      {item.sub}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--ink-40)] group-hover:text-[var(--accent-soft)] transition-colors"
                />
              </Tag>
            );
          })}
        </div>
      </section>
    </div>
  );
}
