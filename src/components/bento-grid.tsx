"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import rocketAsset from "@/assets/images/3dicons-rocket-dynamic-color.png";
import chartAsset from "@/assets/images/3dicons-chart-dynamic-color.png";
import mobileAsset from "@/assets/images/3dicons-mobile-dynamic-color.png";
import pinAsset from "@/assets/images/3dicons-map-pin-dynamic-color.png";
import shieldAsset from "@/assets/images/3dicons-shield-dynamic-color.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BentoGrid() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: "3+",
      label: "Years shipping production code",
    },
    {
      value: `${DATA.projects.length}`,
      label: "Featured projects",
    },
    {
      value: `${DATA.work.length}`,
      label: "Work experiences",
    },
    {
      value: `${DATA.awards.length}`,
      label: "Awards",
    },
  ];

  const selectedSkills = DATA.skills.slice(0, 8);

  return (
    <section id="highlights" className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Highlights
            </p>
            <h2 className="text-xl font-bold tracking-tight">A quick read on how I work</h2>
          </div>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Remote-ready
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-start justify-between">
              <Image src={pinAsset} alt="Map pin" className="size-12 object-contain" />
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                Available
              </div>
            </div>

            <div className="mt-5 space-y-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Lagos, Nigeria
              </p>
              <h3 className="font-mono text-3xl font-bold tracking-tight tabular-nums">
                {time || "00:00:00 AM"}
              </h3>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Available for remote-first work, product builds, and high-trust collaborations.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:col-span-2">
            <div className="absolute right-0 top-0 -mr-8 -mt-8 size-36 rounded-full bg-primary/5 blur-3xl" />
            <div className="flex items-start justify-between gap-3">
              <Image src={rocketAsset} alt="Rocket" className="size-14 object-contain" />
              <Badge variant="secondary" className="border-0 bg-amber-500/10 text-amber-600 dark:text-amber-400">
                Current focus
              </Badge>
            </div>

            <div className="mt-5 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Building now
                </p>
                <div className="space-y-2">
                  <div className="rounded-xl border bg-background/60 p-3">
                    <p className="text-sm font-semibold">Fluxio Admin Dashboard</p>
                    <p className="text-sm text-muted-foreground">
                      Production-focused ecommerce admin experience with analytics, reusable components, and polished interactions.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-background/60 p-3">
                    <p className="text-sm font-semibold">SmartFlow</p>
                    <p className="text-sm text-muted-foreground">
                      AI-assisted project management with GitHub integration and real-time collaboration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-muted/50 p-3">
                    <div className="text-xl font-black tracking-tight text-primary">{stat.value}</div>
                    <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:col-span-2">
            <div className="flex items-start justify-between gap-3">
              <Image src={shieldAsset} alt="Shield" className="size-12 object-contain" />
              <Badge variant="secondary">Stack</Badge>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold">Tools I reach for most</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1 text-[11px]">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <Image src={chartAsset} alt="Chart" className="size-12 object-contain" />
              <Badge variant="secondary">Proof</Badge>
            </div>

            <div className="mt-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10 border">
                    <AvatarImage src="/lba.png" alt="Lotus Beta Analytics" className="object-contain" />
                    <AvatarFallback>LB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Lotus Beta Analytics</p>
                    <p className="text-xs text-muted-foreground">Assistant Tech Lead</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10 border">
                    <AvatarImage src="/noun.png" alt="Open University of Nigeria" className="object-contain" />
                    <AvatarFallback>OU</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Open University of Nigeria</p>
                    <p className="text-xs text-muted-foreground">Computer Science</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-muted/50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Recognition
                </p>
                <p className="mt-1 text-sm font-semibold">Staff of The Year</p>
                <p className="text-sm text-muted-foreground">
                  Recognition for technical excellence and consistent delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <Image src={mobileAsset} alt="Mobile" className="size-12 object-contain" />
              <Badge variant="secondary">Approach</Badge>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-sm font-semibold">What keeps my work memorable</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                  <span>Clear product thinking before UI polish.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                  <span>Clean, reusable components that scale with the app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-1.5 rounded-full bg-primary" />
                  <span>Premium motion and spacing without visual noise.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
