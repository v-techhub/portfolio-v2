"use client";

import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import { Award, Clock, Github, ExternalLink, Activity } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

  // Styled GitHub contribution grid data (shades of green)
  // 0 = empty, 1 = low, 2 = medium, 3 = high activity
  const gitGrid = [
    [0, 1, 0, 2, 0, 1, 3, 2, 0, 1, 2, 0, 1, 2],
    [1, 2, 0, 1, 2, 0, 1, 0, 2, 3, 1, 2, 0, 3],
    [0, 0, 3, 0, 1, 2, 0, 2, 1, 0, 2, 3, 1, 1],
    [2, 1, 2, 3, 0, 1, 2, 3, 0, 1, 0, 2, 0, 2],
    [0, 2, 0, 1, 3, 2, 0, 1, 2, 3, 1, 0, 2, 1],
    [1, 0, 2, 0, 1, 0, 3, 2, 1, 0, 2, 1, 3, 0],
    [2, 3, 1, 2, 0, 1, 2, 0, 3, 2, 1, 0, 1, 2]
  ];

  return (
    <section id="highlights" className="w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold tracking-tight mb-2">Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Lagos Clock & Status (col-span-1) */}
          <div className="relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <Clock className="size-5" />
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Lagos, Nigeria</p>
              <h3 className="text-2xl font-bold tracking-tight tabular-nums mt-1 font-mono">
                {time || "00:00:00 AM"}
              </h3>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2">
              Available for full-time remote roles & collaborations.
            </p>
          </div>

          {/* Card 2: Staff of the Year Award Spotlight (col-span-2) */}
          <div className="relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2 group">
            {/* Soft decorative background glow */}
            <div className="absolute right-0 top-0 -mr-6 -mt-6 size-32 rounded-full bg-amber-500/5 blur-3xl group-hover:bg-amber-500/10 transition-all duration-300 pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <div className="rounded-lg bg-amber-500/10 p-2.5 text-amber-500">
                <Award className="size-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                Lotus Beta Analytics
              </span>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                🏆 Staff of the Year
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                December 2025 — March 2026
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xl">
                Recognized for exceptional technical contributions, engineering excellence, and the consistent delivery of high-quality software solutions that drive business impact.
              </p>
            </div>
          </div>

          {/* Card 3: Developer Metrics & Impact (col-span-2) */}
          <div className="relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2 group">
            {/* Soft decorative background glow */}
            <div className="absolute right-0 top-0 -mr-6 -mt-6 size-32 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <Activity className="size-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
                Metrics
              </span>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Engineering Impact & Scope
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3 pt-2">
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-primary">3+</span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-1">Years Building Production Code</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-primary">5+</span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-1">Apps Shipped to Stores & Corporates</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-primary">99.9%</span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-1">Uptime Maintained on Services</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-primary">2+</span>
                  <span className="text-[10px] text-muted-foreground leading-tight mt-1">Awards & Recognitions Received</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: GitHub Developer Activity (col-span-1) */}
          <div className="relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <Github className="size-5" />
              </div>
              <Link 
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <ExternalLink className="size-4" />
              </Link>
            </div>
            
            {/* Stylized heat grid */}
            <div className="mt-4 flex flex-col gap-1">
              <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}>
                {gitGrid.map((row, rIdx) => 
                  row.map((val, cIdx) => (
                    <div 
                      key={`${rIdx}-${cIdx}`}
                      className={cn(
                        "size-2 rounded-[1.5px] transition-colors duration-200",
                        val === 0 && "bg-neutral-100 dark:bg-neutral-800/60",
                        val === 1 && "bg-emerald-500/30 dark:bg-emerald-500/20",
                        val === 2 && "bg-emerald-500/60 dark:bg-emerald-500/40",
                        val === 3 && "bg-emerald-500 dark:bg-emerald-500"
                      )}
                    />
                  ))
                )}
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">v-techhub</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                2,400+ Contributions this year
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
