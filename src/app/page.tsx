import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HorizontalProjects from "@/components/horizontal-projects";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProjectVisual({
  title,
  image,
  video,
}: {
  title: string;
  image?: string;
  video?: string;
}) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-muted shadow-[0_24px_80px_-36px_hsl(var(--foreground)/.35)] sm:rounded-3xl">
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
        />
      ) : image ? (
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
        />
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section
        id="top"
        className="relative left-1/2 isolate flex min-h-svh w-screen -translate-x-1/2 flex-col overflow-hidden bg-background text-foreground"
      >
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-20 sm:py-28">
          <div className="w-full lg:w-[62%]">
            <p className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-emerald-500" />
              Available for remote opportunities
            </p>
            <h1 className="max-w-4xl text-[clamp(3.5rem,7.5vw,7.5rem)] font-semibold leading-[.88] tracking-[-.07em]">
              Building products that people enjoy using.
            </h1>
            <div className="mt-10">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I&apos;m {DATA.name.split(" ")[0]}, a full-stack engineer
                turning complex business problems into fast, thoughtful digital
                experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-5">
                  <Link href="#projects">
                    Selected work <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-5"
                >
                  <Link
                    href="/resume_2026.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Résumé <Download className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-8 ml-auto h-[52svh] w-[96vw] shrink-0 md:h-[60svh] md:w-[76vw] lg:absolute lg:-bottom-[5%] lg:-right-[6vw] lg:mt-0 lg:h-[101%] lg:w-[clamp(560px,50vw,880px)]">
          <Image
            src="/me-mono.jpg"
            alt="Victor Adeshina"
            fill
            priority
            sizes="(max-width: 767px) 96vw, (max-width: 1023px) 76vw, 50vw"
            className="object-contain object-bottom-right grayscale mix-blend-multiply dark:mix-blend-lighten [mask-image:linear-gradient(to_right,transparent_0%,black_42%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_42%,black_100%)]"
          />
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-t py-20 sm:py-28">
        <div className="mb-16 flex items-baseline justify-between gap-6">
          <h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
            Selected work
          </h2>
          <span className="hidden text-sm text-muted-foreground sm:block">
            01 — {String(DATA.projects.length).padStart(2, "0")}
          </span>
        </div>
        <HorizontalProjects>
          {DATA.projects.map((project, index) => (
            <article
              key={project.title}
              className="group w-[calc(100vw-3rem)] max-w-[58rem] shrink-0 sm:w-[82vw]"
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <ProjectVisual
                  title={project.title}
                  image={project.image}
                  video={project.video}
                />
              </Link>
              <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="size-1 rounded-full bg-border" />
                    <span>{project.dates}</span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-[-.04em] sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="rounded-full px-3 py-1 font-normal"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium sm:pt-2">
                  {"ctaLabel" in project ? project.ctaLabel : "View project"}{" "}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </HorizontalProjects>
      </section>

      <section id="about" className="scroll-mt-24 border-t py-20 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-[.8fr_1.2fr] sm:gap-20">
          <h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
            About
          </h2>
          <div className="space-y-8">
            <p className="max-w-2xl text-2xl leading-tight tracking-[-.03em] sm:text-4xl">
              I care about the space where product thinking, engineering
              discipline, and excellent interfaces meet.
            </p>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              With 3+ years of experience, I build web and mobile products for
              teams that value clarity, ownership, and quality. My work spans
              enterprise platforms, internal tools, and customer-facing
              products.
            </p>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full px-3 py-1 font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-t py-20 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-[.8fr_1.2fr] sm:gap-20">
          <h2 className="text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
            Experience
          </h2>
          <div className="divide-y">
            {DATA.work.map((work) => (
              <div
                key={work.company}
                className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="text-lg font-medium">{work.company}</p>
                  <p className="text-muted-foreground">{work.title}</p>
                </div>
                <p className="text-sm text-muted-foreground sm:text-right">
                  {work.start} — {work.end ?? "Present"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t py-24 sm:py-36">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm text-muted-foreground">
            Have a project in mind?
          </p>
          <h2 className="text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-8xl">
            Let&apos;s make something useful.
          </h2>
          <Button asChild size="lg" className="mt-10 rounded-full px-5">
            <Link href={`mailto:${DATA.contact.email}`}>
              Get in touch <Mail className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
