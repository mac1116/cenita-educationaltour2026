"use client"

import { useEffect, useMemo, useState } from "react";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FLIGHT_DATE = new Date("2026-03-04T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isDone: boolean;
}

const clamp0 = (n: number) => Math.max(0, n);

const pad2 = (n: number) => n.toString().padStart(2, "0");

function FlipNumber({ value, ariaLabel }: { value: string; ariaLabel: string }) {
  return (
    <div className="flex items-center justify-center gap-2" aria-label={ariaLabel}>
      {value.split("").map((ch, i) => (
        <div
          key={`${i}-${ch}`}
          className="relative w-[48px] md:w-[56px] lg:w-[64px] h-[68px] md:h-[80px] lg:h-[92px] rounded-2xl bg-card border border-border shadow-lg overflow-hidden"
        >
          {/* glossy top */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent" />

          {/* flip layer */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${i}-${ch}`}
              initial={{ rotateX: 85, y: -6, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              exit={{ rotateX: -85, y: 6, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient leading-none">
                {ch}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* mid seam */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-border/70" />
        </div>
      ))}
    </div>
  );
}

export default function CountdownTimerAltAnimation() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isDone: false,
  });

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const diff = FLIGHT_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isDone: true });
        return;
      }

      setTimeLeft({
        days: clamp0(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: clamp0(Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: clamp0(Math.floor((diff / 1000 / 60) % 60)),
        seconds: clamp0(Math.floor((diff / 1000) % 60)),
        isDone: false,
      });
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = useMemo(
    () => [
      { key: "days", label: "Days", value: String(timeLeft.days) },
      { key: "hours", label: "Hours", value: pad2(timeLeft.hours) },
      { key: "minutes", label: "Minutes", value: pad2(timeLeft.minutes) },
      { key: "seconds", label: "Seconds", value: pad2(timeLeft.seconds) },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  );

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-blue-500 bg-blue-500/10 px-4 py-2 rounded-full mb-4">
            Countdown
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Time Until the <span className="text-gradient">Educational Tour</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The countdown to an unforgettable experience in Manila. Every moment brings us closer to the adventure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0 p-12 rounded-3xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {units.map((u, idx) => (
                <motion.div
                  key={u.key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-full">
                    <FlipNumber value={u.value} ariaLabel={`${u.label} ${u.value}`} />
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    {u.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
