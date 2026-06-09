import { AwardCard } from "@/components/award-card";
import BentoGrid from "@/components/bento-grid";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowRight, BookOpen, Download, Mail, MapPin, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Markdown from "react-markdown";

const WavingHand = dynamic(() => import("@/components/waving-hand"), {
  ssr: false,
});

const BLUR_FADE_DELAY = 0.04;

const proofPoints = [
  {
    title: "Enterprise-ready",
    text: "Built systems for onboarding, collaboration, and internal operations.",
  },
  {
    title: "Product-minded",
    text: "I care about the flow, the edge cases, and how polished it feels to use.",
  },
  {
    title: "Remote-friendly",
    text: "Comfortable working across time zones with clear communication and ownership.",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-16">
      <section id="hero" className="pt-4 sm:pt-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-full px-3 py-1">Full-stack engineer</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Remote-first
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Lagos, Nigeria
              </Badge>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="flex flex-wrap items-center gap-x-2 gap-y-2 text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
                <span>Hi, I&apos;m</span>
                <span className="inline-flex items-center gap-x-1">
                  {DATA.name.split(" ")[0]}
                  <span className="inline-flex size-14 items-center justify-center sm:size-16">
                    <WavingHand />
                  </span>
                </span>
              </h1>
            </BlurFade>

            <BlurFadeText
              className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
              delay={BLUR_FADE_DELAY}
              text="I build premium web and mobile products that feel fast, calm, and easy to trust. My focus is clean systems, strong UI/UX, and shipping work that makes a real business difference."
            />

            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#projects">
                    View projects
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/resume_2026.pdf" target="_blank" rel="noreferrer">
                    Download resume
                    <Download className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-full">
                  <Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  <MapPin className="mr-1.5 size-3.5" />
                  Based in Lagos
                </Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  <Sparkles className="mr-1.5 size-3.5" />
                  3+ years shipping production code
                </Badge>
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  React, Next.js, Node.js, Go
                </Badge>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-amber-500/10 blur-2xl" />
              <div className="rounded-[2rem] border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Now
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight">Shaping better product experiences</h2>
                  </div>
                  <Avatar className="size-16 border">
                    <AvatarImage src={DATA.avatarUrl} alt={DATA.name} className="object-cover" />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl bg-muted/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Current focus
                    </p>
                    <p className="mt-2 text-sm font-semibold">Fluxio Admin Dashboard</p>
                    <p className="text-sm text-muted-foreground">
                      Building a crisp analytics-first dashboard with reusable patterns and polished workflows.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-muted/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Available for
                    </p>
                    <p className="mt-2 text-sm font-semibold">Remote roles and high-trust collaborations</p>
                    <p className="text-sm text-muted-foreground">
                      Product teams that want clean execution, clear communication, and strong ownership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {proofPoints.map((point, id) => (
          <BlurFade key={point.title} delay={BLUR_FADE_DELAY * (4 + id)}>
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <p className="text-sm font-semibold">{point.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{point.text}</p>
            </div>
          </BlurFade>
        ))}
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <BentoGrid />
      </BlurFade>

      <section id="about" className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Markdown className="prose max-w-none text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What I optimize for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                <span>Clear product thinking before visual flair.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                <span>Reusable architecture that stays maintainable as the app grows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                <span>Interfaces that feel premium without adding noise.</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "React Native", "Go"].map((skill) => (
                <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="work" className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="flex min-h-0 flex-col gap-y-3">
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex min-h-0 flex-col gap-y-3">
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <p className="max-w-2xl text-sm text-muted-foreground">
              A practical stack for building modern product experiences, from interface work to backend services.
            </p>
          </BlurFade>
          <div className="flex flex-wrap gap-1.5">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.03}>
                <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1">
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-8 py-4 sm:py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-start gap-4">
            <div className="space-y-2">
              <Badge className="rounded-full px-3 py-1">Featured work</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Case studies that show the craft behind the code
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                A few projects that show how I think about product quality, scalability, and polished execution.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {DATA.projects.map((project, id) => (
            <div
              key={project.title}
              className={id === 0 ? "md:col-span-3" : "md:col-span-2"}
            >
              <BlurFade delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  highlights={project.highlights}
                  featured={project.featured}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="space-y-8 py-4 sm:py-8">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="space-y-3">
            <Badge className="rounded-full px-3 py-1">Recognition</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Achievements and recognition
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A small snapshot of the work that has earned trust and acknowledgement along the way.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.awards.map((award, id) => (
              <BlurFade
                key={award.title + award.dates}
                delay={BLUR_FADE_DELAY * 17 + id * 0.05}
              >
                <AwardCard
                  title={award.title}
                  description={award.description}
                  location={award.location}
                  dates={award.dates}
                  image={award.image}
                  links={award.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </section>

      <section id="writing" className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Writing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Notes, experiments, and lessons from building real software
              </h2>
              <p className="text-muted-foreground">
                I keep a small blog for thoughts, experiments, and practical lessons from the things I ship.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/blog">
                Read the blog
                <BookOpen className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </section>

      <section id="contact" className="grid gap-4 rounded-3xl border bg-card px-6 py-10 text-center shadow-sm sm:px-8 sm:py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <div className="space-y-4">
            <Badge className="rounded-full px-3 py-1">Contact</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Want to build something sharp together?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              If you need someone who can design, ship, and iterate with care, send me a message on LinkedIn or email. I&apos;ll get back as soon as I can.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link href={`mailto:${DATA.contact.email}`}>
                  Email me
                  <Mail className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full">
                <Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
