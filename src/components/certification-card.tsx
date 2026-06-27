"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface LinkItem {
  readonly title: string;
  readonly href: string;
  readonly icon?: React.ReactNode;
}

interface CertificationCardProps {
  readonly title: string;
  readonly issuer: string;
  readonly dates: string;
  readonly description: string;
  readonly image: string;
  readonly links?: readonly LinkItem[];
}

export function CertificationCard({
  title,
  issuer,
  dates,
  description,
  image,
  links,
}: CertificationCardProps) {
  const renderLogo = (logoKey: string) => {
    if (logoKey === "udemy") {
      return <Icons.udemy className="size-7 text-[#A435F0]" />;
    }
    if (logoKey === "microsoft") {
      return <Icons.microsoft className="size-7" />;
    }
    return <Icons.globe className="size-7 text-muted-foreground" />;
  };

  return (
    <Card className="group flex flex-col justify-between overflow-hidden border bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border bg-muted/30 p-2 shadow-inner transition-colors duration-300 group-hover:bg-muted/60">
            {renderLogo(image)}
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold leading-snug tracking-tight text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">{issuer}</span>
              <span className="text-muted-foreground/40">•</span>
              <span>{dates}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-5 py-0">
        <p className="text-pretty font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-4">
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.title + link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  {link.icon || <ExternalLink className="size-3" />}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
