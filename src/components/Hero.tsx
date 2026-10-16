import Image from "next/image";
import { featuredProject, heroTech, profile } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

// Where each tech badge sits around the photo, as % of the visual's box.
const badgePositions = [
  "left-[6%] top-[30%]",
  "left-[22%] top-[4%]",
  "right-[14%] top-[6%]",
  "right-[2%] top-[42%]",
  "right-[12%] bottom-[8%]",
  "left-[8%] bottom-[14%]",
];

export default function Hero() {
  return (
    <section id="top" className="pt-6 pb-16 sm:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface via-background to-accent-soft px-6 py-12 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 size-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xl text-muted sm:text-2xl">
              Hey, I am <span className="font-semibold text-accent">Keshan</span>
            </p>
            <h1 className="mt-3 text-5xl leading-[1.05] font-light tracking-tight sm:text-6xl lg:text-7xl">
              Software &amp; <span className="font-semibold">AI Developer</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-accent px-7 py-3 font-semibold text-background shadow-lg shadow-accent/20 transition-opacity hover:opacity-90"
              >
                Hire me
              </a>
              <IconButton href={`mailto:${profile.email}`} label="Email"><MailIcon className="size-5" /></IconButton>
              <IconButton href={profile.github} label="GitHub"><GitHubIcon className="size-5" /></IconButton>
              <IconButton href={profile.linkedin} label="LinkedIn"><LinkedInIcon className="size-5" /></IconButton>
            </div>

            <hr className="mt-10 max-w-md border-border" />

            <a
              href="#projects"
              className="group mt-8 block max-w-sm rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-md transition-colors hover:border-accent/60"
            >
              <p className="font-mono text-xs tracking-wider text-accent uppercase">Currently building</p>
              <p className="mt-2 text-lg font-semibold">{featuredProject.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                IoT smart bins + a recycling marketplace app. My final year project.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                See the project <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-border" aria-hidden="true" />
      <div className="absolute inset-[13%] rounded-full border border-border" aria-hidden="true" />
      <div className="absolute inset-[22%] rounded-full bg-accent/25 blur-2xl" aria-hidden="true" />

      {/* Photo */}
      <div className="absolute inset-[22%] overflow-hidden rounded-full border-4 border-accent/70 bg-surface shadow-2xl shadow-accent/20">
        <Image
          src="/keshan.jpg"
          alt={`Photo of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 250px, 60vw"
          className="origin-[45%_35%] scale-[1.25] object-cover"
        />
      </div>

      {/* Floating tech badges */}
      {heroTech.map((tech, i) => (
        <div
          key={tech.label}
          title={tech.label}
          className={`animate-float absolute ${badgePositions[i]} grid size-12 place-items-center rounded-2xl border border-border bg-surface/80 shadow-lg backdrop-blur-md sm:size-14`}
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <Image src={tech.src} alt={tech.label} width={28} height={28} className="size-6 sm:size-7" />
        </div>
      ))}
    </div>
  );
}

function IconButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="grid size-12 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
