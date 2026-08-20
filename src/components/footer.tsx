import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "Résumé", href: "/victoradeshina_resume.pdf", external: true },
  { label: "GitHub", href: DATA.contact.social.GitHub.url, external: true },
  { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url, external: true },
] as const;

const desktopSectionLinks = footerLinks.slice(0, 5);
const desktopUtilityLinks = footerLinks.slice(5);

function FooterLink({
  link,
  className = "",
}: {
  link: (typeof footerLinks)[number];
  className?: string;
}) {
  return (
    <Link
      href={link.href}
      target={"external" in link && link.external ? "_blank" : undefined}
      rel={"external" in link && link.external ? "noreferrer" : undefined}
      className={`group ${className}`}
    >
      <span>{link.label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5 motion-reduce:transition-none"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="py-16 sm:hidden">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-muted-foreground">
                Next stop
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-.05em]">
                Where to next?
              </h2>
            </div>
            <span className="pb-1 text-xs text-muted-foreground">01 — 08</span>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 border-t border-border/70"
          >
            {footerLinks.map((link, index) => (
              <FooterLink
                key={link.label}
                link={link}
                className={`flex min-h-16 items-center justify-between border-b border-border/70 py-3 text-lg font-medium tracking-[-.02em] ${
                  index % 2 === 0 ? "border-r pr-4" : "pl-4"
                }`}
              />
            ))}
          </nav>

          <div className="mt-10 flex items-end justify-between gap-6 text-xs text-muted-foreground">
            <p>
              {DATA.name}
              <br />
              {DATA.location}
            </p>
            <p className="text-right">© {new Date().getFullYear()}</p>
          </div>
        </div>

        <div className="hidden min-h-20 items-center justify-between gap-8 text-sm sm:flex">
          <Link href="#top" className="shrink-0 font-semibold tracking-tight">
            Victor<span className="text-muted-foreground">.</span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex items-center gap-5 text-muted-foreground"
          >
            {desktopSectionLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-4 text-muted-foreground">
            {desktopUtilityLinks.map((link) => (
              <FooterLink
                key={link.label}
                link={link}
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground [&_svg]:size-3"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
