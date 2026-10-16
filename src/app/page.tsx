import Image from "next/image";
import {
  certifications,
  education,
  featuredProject,
  leadership,
  profile,
  projects,
  skillGroups,
  stats,
  type Project,
} from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header
        ctaHref={profile.resume || profile.linkedin}
        ctaLabel={profile.resume ? "Download CV" : "LinkedIn"}
      />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
      </footer>
    </>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="01" title="About me">
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:content-start">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-surface p-4 md:w-44">
              <dt className="text-xs text-muted">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="02" title="Skills & tools">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}><Tag>{item}</Tag></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="03" title="Projects">
      <FeaturedProject project={featuredProject} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
      >
        See everything on GitHub <ArrowUpRightIcon />
      </a>
    </Section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {project.images?.map((image) => (
          <div key={image.src} className="relative aspect-[4/3] bg-background">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Featured · Final year project</p>
        <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
        {project.highlights && (
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
        <ProjectFooter project={project} />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/60">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ProjectFooter project={project} />
    </article>
  );
}

function ProjectFooter({ project }: { project: Project }) {
  return (
    <>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}><Tag>{tag}</Tag></li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm font-semibold">
        <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
          <GitHubIcon className="size-4" /> Code
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
            Live demo <ArrowUpRightIcon />
          </a>
        )}
      </div>
    </>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="04" title="Education & leadership">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
          <Timeline items={education} />
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted">Leadership</h3>
          <Timeline items={leadership} />
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li key={cert.name} className="rounded-xl border border-border bg-surface p-4">
                <p className="font-medium">{cert.name}</p>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Timeline({ items }: { items: { title: string; place: string; period: string; detail?: string }[] }) {
  return (
    <ol className="mt-4 space-y-6 border-l border-border pl-6">
      {items.map((item) => (
        <li key={item.title + item.period} className="relative">
          <span className="absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-accent bg-background" aria-hidden="true" />
          <p className="font-mono text-xs text-accent">{item.period}</p>
          <p className="mt-1 font-semibold">{item.title}</p>
          <p className="text-sm text-muted">{item.place}</p>
          {item.detail && <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>}
        </li>
      ))}
    </ol>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="05" title="Get in touch">
      <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m looking for internship and graduate opportunities in software engineering and AI/ML.
          If you have a role, a project or just a question, my inbox is open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
        >
          <MailIcon /> {profile.email}
        </a>
        <div className="mt-6 flex justify-center gap-4 text-muted">
          <SocialLink href={profile.github} label="GitHub"><GitHubIcon /></SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn"><LinkedInIcon /></SocialLink>
        </div>
      </div>
    </Section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
        <span className="font-mono text-base text-accent">{eyebrow}.</span>
        {title}
        <span className="ml-2 hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
      {children}
    </span>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="rounded-md p-1 transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
