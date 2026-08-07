import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 -mx-6 border-b border-border/60 bg-background/80 px-6 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between text-sm">
        <Link href="#top" className="font-semibold tracking-tight">Victor<span className="text-muted-foreground">.</span></Link>
        <div className="hidden items-center gap-6 text-muted-foreground sm:flex">
          <Link href="#projects" className="transition-colors hover:text-foreground">Work</Link>
          <Link href="#about" className="transition-colors hover:text-foreground">About</Link>
          <Link href="#experience" className="transition-colors hover:text-foreground">Experience</Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block">LinkedIn</Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
