/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Terminal,
  Layers,
  ArrowRight,
  Bot,
  Globe,
  Database,
  Wrench,
  ChevronRight,
  Check,
  Sparkles,
} from "lucide-react";
import hinaraLogo from "../hinaralogo.png";

const heroPhrases = ["Scale harder.", "Convert better.", "Operate smarter."];

const platformCards = [
  {
    icon: Globe,
    label: "Growth Websites",
    title: "High-Conversion Web",
    copy:
      "Landing pages and sales sites with fast load times, sharper messaging, and SEO foundations that do actual work.",
  },
  {
    icon: Bot,
    label: "AI Workflows",
    title: "AI Integrations",
    copy:
      "Lead capture, inbox triage, support flows, and follow-ups automated around your real process instead of a demo script.",
  },
];

const heroNotes = [
  "Premium, dark, product-led visual direction",
  "Web, ops systems, and AI in one line of ownership",
  "Built for teams that need polish without agency drag",
];

const systemCapabilities = [
  "Internal ops",
  "Approvals",
  "Logistics visibility",
  "Admin tools",
];

const systemQualities = [
  "Role-based admin access",
  "Clean database structure",
  "Interfaces that survive handoff",
];

const ownershipPoints = [
  "We build the product",
  "We host and maintain it",
  "You keep the operating leverage",
];

const packageTiers = [
  {
    icon: Bot,
    name: "AI Customer System",
    audience: "Service & retail",
    tagline: "Replies and leads on autopilot.",
    features: [
      "Smart chat and FAQ routing",
      "Lead capture to your database",
      "Workflow hooks you actually own",
    ],
    highlight: false,
  },
  {
    icon: Globe,
    name: "Growth Website",
    audience: "Emerging SMEs",
    tagline: "Fast pages that convert.",
    features: [
      "3-5 page architecture",
      "SEO and forms baked in",
      "Mobile-first polish",
    ],
    highlight: true,
  },
  {
    icon: Database,
    name: "Ops & Booking OS",
    audience: "Agencies & logistics",
    tagline: "One pane for operations.",
    features: [
      "Internal dashboard & admin",
      "Booking and reservations",
      "Notifications that stick",
    ],
    highlight: false,
  },
];

const retainerRows = [
  {
    title: "Basic Care",
    desc: "Hosting, bug fixes, and uptime monitoring for static or light sites.",
  },
  {
    title: "Growth Support",
    desc: "Active updates, minor logic changes, and routine database care.",
    spotlight: true,
  },
  {
    title: "Automation",
    desc: "AI and chatbot tuning, workflow tweaks, and API maintenance.",
  },
];

const Navbar = ({
  scrollToSection,
  refs,
}: {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: Record<string, React.RefObject<HTMLElement | null>>;
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-base/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-2 max-w-7xl mx-auto w-full">
        <div
          onClick={() => scrollToSection(refs.hero)}
          className="flex items-center gap-3 cursor-pointer group relative"
        >
          <div className="absolute left-16 w-10 h-10 bg-brand-green/20 rounded-lg blur-md group-hover:bg-brand-green/40 transition-all duration-500"></div>

          <img
            src={hinaraLogo}
            alt="Hinara Solutions logo"
            className="relative z-10 h-24 md:h-28 w-auto drop-shadow-[0_0_10px_rgba(46,234,115,0.35)] group-hover:scale-105 transition-transform"
          />
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <button
            onClick={() => scrollToSection(refs.platform)}
            className="text-sm font-medium text-text-muted hover:text-brand-green transition-colors"
          >
            Platform
          </button>
          <button
            onClick={() => scrollToSection(refs.packages)}
            className="text-sm font-medium text-text-muted hover:text-brand-green transition-colors"
          >
            Packages
          </button>
          <button
            onClick={() => scrollToSection(refs.agency)}
            className="text-sm font-medium text-text-muted hover:text-brand-green transition-colors"
          >
            Agency
          </button>
        </div>

        <button
          onClick={() => scrollToSection(refs.agency)}
          className="bg-brand-green text-bg-base px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(46,234,115,0.2)] hover:shadow-[0_0_30px_rgba(46,234,115,0.4)]"
        >
          Start Building
        </button>
      </div>
    </nav>
  );
};

export default function App() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    platform: useRef<HTMLElement>(null),
    packages: useRef<HTMLElement>(null),
    agency: useRef<HTMLElement>(null),
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [typedHeadline, setTypedHeadline] = useState(heroPhrases[0]);
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);

  useEffect(() => {
    const currentPhrase = heroPhrases[activePhraseIndex];
    const isComplete = typedHeadline === currentPhrase;

    const timeout = window.setTimeout(
      () => {
        if (!isDeletingHeadline && isComplete) {
          setIsDeletingHeadline(true);
          return;
        }

        if (isDeletingHeadline && typedHeadline.length === 0) {
          setIsDeletingHeadline(false);
          setActivePhraseIndex((index) => (index + 1) % heroPhrases.length);
          return;
        }

        const nextText = isDeletingHeadline
          ? currentPhrase.slice(0, typedHeadline.length - 1)
          : currentPhrase.slice(0, typedHeadline.length + 1);

        setTypedHeadline(nextText);
      },
      !isDeletingHeadline && isComplete ? 1400 : isDeletingHeadline ? 40 : 85
    );

    return () => window.clearTimeout(timeout);
  }, [activePhraseIndex, isDeletingHeadline, typedHeadline]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="bg-bg-base min-h-screen">
      <Navbar scrollToSection={scrollToSection} refs={sectionRefs} />

      <main>
        <section
          ref={sectionRefs.hero}
          className="relative pt-48 pb-32 px-6 overflow-hidden bg-mesh min-h-[90vh] flex flex-col justify-center"
        >
          <div className="hero-noise absolute inset-0 opacity-40"></div>
          <div className="hero-orbit absolute left-[-8%] top-24 h-72 w-72 rounded-full"></div>
          <div className="hero-orbit hero-orbit-secondary absolute right-[-10%] top-40 h-[28rem] w-[28rem] rounded-full"></div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/55 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-brand-glow shadow-[0_0_18px_rgba(29,185,84,0.8)]"></span>
              Product-grade builds for serious operators
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.06em] leading-[0.92] mb-8"
            >
              <span className="text-gradient">Ship faster.</span>
              <br />
              <span className="inline-flex min-h-[1.1em] items-center gap-3">
                <span className="green-gradient">{typedHeadline}</span>
                <span aria-hidden className="typing-caret"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted max-w-3xl mb-12 font-medium leading-relaxed"
            >
              Premium software systems and conversion-focused web experiences for Philippine
              businesses that need to look sharper, move faster, and stop leaking operational
              momentum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={() => scrollToSection(sectionRefs.agency)}
                  className="bg-brand-green text-bg-base px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(46,234,115,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
                >
                  Deploy Your Vision
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection(sectionRefs.packages)}
                  className="bg-white/[0.03] border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-brand-green/50 hover:bg-white/[0.06] transition-all"
                >
                  View Packages
                </button>
              </div>

              <div className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
                {heroNotes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-black/25 px-5 py-4 text-sm text-white/65 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          ref={sectionRefs.platform}
          className="relative py-32 px-6 border-t border-white/5 scroll-mt-10 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_58%)]"></div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 max-w-4xl"
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">
                Capabilities
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-[-0.05em] text-white mb-5">
                Premium systems.
                <br />
                <span className="text-white/50">No agency wallpaper.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-text-muted max-w-3xl">
                The work is positioned like a product: tighter surfaces, stronger hierarchy,
                clearer ownership, and features shaped around how your team actually runs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 auto-rows-[minmax(260px,auto)]">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                className="premium-panel lg:col-span-7 p-8 md:p-10 rounded-[2rem] overflow-hidden relative group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,185,84,0.16),transparent_34%)] opacity-80"></div>

                <div className="relative z-10 h-full flex flex-col justify-between gap-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45">
                        Signature build
                      </p>
                      <h3 className="font-display text-4xl md:text-5xl font-black tracking-[-0.05em] text-white mb-4">
                        Custom Systems
                      </h3>
                      <p className="text-white/68 text-base md:text-lg max-w-2xl leading-relaxed">
                        Dashboards, quoting flows, internal portals, and logistics views shaped
                        around your exact operating model, not a bloated template.
                      </p>
                    </div>
                    <span className="hidden md:flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-green">
                      <Terminal size={28} />
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {systemCapabilities.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3 rounded-[1.6rem] border border-white/10 bg-black/35 p-4 md:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
                        <div className="mb-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.24em] text-white/35">
                          <span>Operations view</span>
                          <span>Live system</span>
                        </div>
                        <div className="space-y-3">
                          {[72, 54, 81, 63].map((width, index) => (
                            <div key={width} className="space-y-2">
                              <div className="flex items-center justify-between text-xs text-white/40">
                                <span>Module 0{index + 1}</span>
                                <span>{width}%</span>
                              </div>
                              <div className="h-2 rounded-full bg-white/6">
                                <div
                                  className="h-full rounded-full bg-[linear-gradient(90deg,#f4f4f4_0%,#1db954_100%)]"
                                  style={{ width: `${width}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {systemQualities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/68"
                          >
                            <Sparkles className="mt-0.5 shrink-0 text-brand-green" size={16} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[80px] group-hover:bg-brand-green/20 transition-colors duration-700"></div>
              </motion.div>

              <div className="lg:col-span-5 grid gap-6">
                {platformCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -6 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.08 }}
                      className="premium-panel relative flex h-full flex-col justify-between gap-10 rounded-[2rem] p-8 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-white/40">
                            {card.label}
                          </p>
                          <h3 className="font-display text-2xl md:text-[2rem] font-black tracking-[-0.04em] text-white mb-3">
                            {card.title}
                          </h3>
                        </div>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-green">
                          <Icon size={24} />
                        </span>
                      </div>

                      <p className="max-w-md text-sm md:text-[0.96rem] leading-relaxed text-white/62">
                        {card.copy}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-semibold text-white/72">
                        <span>Built for real deployment</span>
                        <ArrowRight size={16} className="text-brand-green" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="premium-panel lg:col-span-12 p-8 md:p-10 rounded-[2rem] flex flex-col gap-8 md:flex-row md:items-center md:justify-between overflow-hidden transition-all duration-300 group relative"
              >
                <div className="z-10 relative">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/40">
                    Ownership
                  </p>
                  <h3 className="font-display text-3xl md:text-5xl font-black tracking-[-0.05em] text-white mb-3 group-hover:text-brand-green transition-colors">
                    Zero-Friction Handoffs
                  </h3>
                  <p className="max-w-2xl text-base md:text-lg text-white/62 leading-relaxed">
                    Strategy, build, hosting, and ongoing care under one line of ownership so your
                    team is not stuck coordinating five vendors to ship one result.
                  </p>
                </div>

                <div className="relative z-10 grid gap-3 text-sm text-white/72 md:min-w-[24rem]">
                  {ownershipPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3"
                    >
                      <span>{item}</span>
                      <Check size={16} className="text-brand-green" />
                    </div>
                  ))}
                </div>

                <Layers
                  className="pointer-events-none absolute right-4 top-8 text-white/[0.03] scale-[4.2] group-hover:text-brand-green/8 transition-colors duration-500"
                  size={100}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          ref={sectionRefs.packages}
          className="relative scroll-mt-10 overflow-hidden border-t border-white/[0.06] py-28 px-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,185,84,0.18),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base via-[#050805] to-bg-surface" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="mb-14 text-center md:mb-16"
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                Packages
              </p>
              <h2 className="mb-5 text-4xl font-black tracking-tight text-white md:text-6xl">
                Every tier. <span className="text-white/50">One serious standard.</span>
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
                Engineered deliverables you can ship with - crisp scope, clean handoffs, and room
                to grow when you are ready.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4 lg:items-stretch">
              {packageTiers.map((pkg, idx) => {
                const Icon = pkg.icon;
                return (
                  <motion.article
                    key={pkg.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`relative flex flex-col rounded-2xl border p-7 md:p-8 ${
                      pkg.highlight
                        ? "border-brand-glow/35 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_0_0_1px_rgba(29,185,84,0.12),0_24px_60px_-20px_rgba(0,0,0,0.65)] lg:scale-[1.02] lg:z-[1]"
                        : "border-white/[0.08] bg-black/40 backdrop-blur-md hover:border-white/[0.14]"
                    }`}
                  >
                    {pkg.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-glow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-[0_8px_24px_rgba(29,185,84,0.35)]">
                        Top pick
                      </span>
                    )}

                    <div className="mb-6 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          pkg.highlight
                            ? "bg-brand-glow text-black shadow-[0_0_24px_rgba(29,185,84,0.35)]"
                            : "bg-white/[0.06] text-brand-green"
                        }`}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white md:text-[1.35rem]">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                      {pkg.audience}
                    </p>
                    <p className="mt-4 flex-grow text-sm leading-relaxed text-white/65">
                      {pkg.tagline}
                    </p>

                    <ul className="mb-8 mt-6 space-y-3">
                      {pkg.features.map((line) => (
                        <li key={line} className="flex gap-3 text-sm text-white/80">
                          <Check
                            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-glow"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span className="leading-snug">{line}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => scrollToSection(sectionRefs.agency)}
                      className={`mt-auto inline-flex w-full items-center justify-center gap-1 rounded-full py-3.5 text-sm font-bold transition-all ${
                        pkg.highlight
                          ? "bg-brand-glow text-black hover:brightness-110 hover:shadow-[0_12px_40px_rgba(29,185,84,0.35)]"
                          : "bg-transparent text-white ring-1 ring-white/15 hover:bg-white/[0.06] hover:ring-white/25"
                      }`}
                    >
                      Get started
                      <ChevronRight size={18} className="opacity-90" />
                    </button>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/[0.08] bg-black/35 p-8 backdrop-blur-md md:p-10"
            >
              <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h3 className="flex items-center gap-3 text-xl font-bold text-white md:text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-brand-green">
                    <Wrench size={20} />
                  </span>
                  Care & retainers
                </h3>
                <p className="text-sm text-white/45">
                  Ongoing partnership - scoped to how you run day to day.
                </p>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {retainerRows.map((row) => (
                  <div
                    key={row.title}
                    className={`flex flex-col gap-2 py-5 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between md:gap-8 ${
                      row.spotlight ? "text-white" : ""
                    }`}
                  >
                    <div
                      className={`text-sm font-semibold ${
                        row.spotlight ? "text-brand-glow" : "text-white/90"
                      }`}
                    >
                      {row.title}
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-white/55 md:text-right">
                      {row.desc}
                    </p>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollToSection(sectionRefs.agency)}
                className="mt-8 w-full rounded-full border border-white/10 bg-white/[0.04] py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Talk through a retainer
              </button>
            </motion.div>
          </div>
        </section>

        <section
          ref={sectionRefs.agency}
          className="py-32 px-6 bg-bg-base border-t border-white/5 scroll-mt-10"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12">
                Ready to deploy?
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600"
                    placeholder="Your Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  />
                  <input
                    className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600"
                    placeholder="Business Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  />
                </div>

                <textarea
                  className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600 min-h-[150px] resize-none"
                  placeholder="Tell us about the system you need built..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                ></textarea>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="bg-brand-green text-bg-base py-4 px-8 rounded-xl font-bold text-lg hover:bg-white transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2 glow-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Request</span>
                      <Terminal size={18} />
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <p className="text-brand-green font-medium">Request sent - we'll be in touch soon.</p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-bg-surface py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img src={hinaraLogo} alt="Hinara Solutions logo" className="h-20 md:h-24 w-auto" />
          <p className="text-text-muted text-sm font-medium">
            (c) 2026 Hinara Solutions. Engineered in the Philippines.
          </p>
        </div>
      </footer>
    </div>
  );
}
