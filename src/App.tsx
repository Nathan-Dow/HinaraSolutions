/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { 
  Terminal, Layers, ArrowRight, Bot, Globe, Database, Wrench, ChevronRight, Check
} from "lucide-react";
import hinaraLogo from "../hinaralogo.png";

// --- Sub-Components ---

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
        
        {/* Logo Section */}
        <div 
          onClick={() => scrollToSection(refs.hero)}
          className="flex items-center gap-3 cursor-pointer group relative"
        >
          {/* Logo Background Glow */}
          <div className="absolute left-16 w-10 h-10 bg-brand-green/20 rounded-lg blur-md group-hover:bg-brand-green/40 transition-all duration-500"></div>
          
          <img
            src={hinaraLogo}
            alt="Hinara Solutions logo"
            className="relative z-10 h-24 md:h-28 w-auto drop-shadow-[0_0_10px_rgba(46,234,115,0.35)] group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Clickable Tabs */}
        <div className="hidden md:flex items-center space-x-10">
          <button onClick={() => scrollToSection(refs.platform)} className="text-sm font-medium text-text-muted hover:text-brand-green transition-colors">Platform</button>
          <button onClick={() => scrollToSection(refs.packages)} className="text-sm font-medium text-text-muted hover:text-brand-green transition-colors">Packages</button>
          <button onClick={() => scrollToSection(refs.agency)} className="text-sm font-medium text-text-muted hover:text-brand-green transition-colors">Agency</button>
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

// --- Main App Component ---

export default function App() {
  // References for scrolling
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
        {/* HERO SECTION */}
        <section ref={sectionRefs.hero} className="relative pt-48 pb-32 px-6 overflow-hidden bg-mesh min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] mb-8"
            >
              <span className="text-gradient">Ship faster.</span><br />
              <span className="text-gradient">Scale</span> <span className="green-gradient">harder.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 font-medium leading-relaxed"
            >
              Premium software architecture and high-converting web experiences engineered for Philippine businesses ready to dominate their market.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button 
                onClick={() => scrollToSection(sectionRefs.agency)}
                className="bg-brand-green text-bg-base px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(46,234,115,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
              >
                Deploy Your Vision
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection(sectionRefs.packages)}
                className="bg-bg-surface border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-brand-green/50 transition-all"
              >
                View Packages
              </button>
            </motion.div>
          </div>
        </section>

        {/* PLATFORM SECTION (Clean Bento Grid) */}
        <section ref={sectionRefs.platform} className="py-32 px-6 border-t border-white/5 scroll-mt-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">Enterprise Grade. <br/><span className="text-text-muted">Startup Agility.</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-gradient-to-br from-bg-elevated to-bg-surface p-10 rounded-3xl border border-border-subtle overflow-hidden relative group transition-all duration-300"
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Terminal className="text-brand-green mb-4" size={40} />
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Custom Systems</h3>
                    <p className="text-text-muted text-lg max-w-md">Bespoke dashboards, operational tools, and logistics trackers built on modern stacks.</p>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[80px] group-hover:bg-brand-green/20 transition-colors duration-700"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-bg-surface p-8 rounded-3xl border border-white/5 hover:border-brand-green/30 flex flex-col justify-between transition-all duration-300"
              >
                <Globe className="text-brand-green" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">High-Conversion Web</h3>
                  <p className="text-text-muted text-sm">Blazing fast, SEO-optimized landing pages that turn clicks into revenue.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-bg-surface p-8 rounded-3xl border border-white/5 hover:border-brand-green/30 flex flex-col justify-between transition-all duration-300"
              >
                <Bot className="text-brand-green" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Integrations</h3>
                  <p className="text-text-muted text-sm">Automate customer service and lead capture with intelligent workflows.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-gradient-to-r from-bg-surface to-bg-elevated p-8 rounded-3xl border border-white/5 hover:border-border-subtle flex items-center justify-between overflow-hidden transition-all duration-300 group"
              >
                 <div className="z-10 relative">
                   <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">Zero-Friction Handoffs</h3>
                   <p className="text-text-muted">We build, we host, we manage. You run your business.</p>
                 </div>
                 <Layers className="text-white/5 scale-[4] translate-x-10 group-hover:text-brand-green/10 transition-colors duration-500" size={100} />
              </motion.div>

            </div>
          </div>
        </section>

        {/* PACKAGES SECTION — Spotify-inspired premium tiers */}
        <section ref={sectionRefs.packages} className="relative scroll-mt-10 overflow-hidden border-t border-white/[0.06] py-28 px-6">
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
                Engineered deliverables you can ship with — crisp scope, clean handoffs, and room to grow when you are ready.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4 lg:items-stretch">
              {[
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
                    "3–5 page architecture",
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
              ].map((pkg, idx) => {
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

            {/* Retainers — premium list, no pricing */}
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
                  Ongoing partnership — scoped to how you run day to day.
                </p>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {[
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
                ].map((row) => (
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

        {/* AGENCY / CONTACT SECTION */}
        <section ref={sectionRefs.agency} className="py-32 px-6 bg-bg-base border-t border-white/5 scroll-mt-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12">Ready to deploy?</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600"
                    placeholder="Your Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                  />
                  <input
                    className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600"
                    placeholder="Business Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  />
                </div>

                <textarea
                  className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600 min-h-[150px] resize-none"
                  placeholder="Tell us about the system you need built..."
                  required
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                ></textarea>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="bg-brand-green text-bg-base py-4 px-8 rounded-xl font-bold text-lg hover:bg-white transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2 glow-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? "Sending..." : <><span>Send Request</span><Terminal size={18} /></>}
                </button>

                {formStatus === "success" && (
                  <p className="text-brand-green font-medium">Request sent — we'll be in touch soon.</p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-bg-surface py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img
            src={hinaraLogo}
            alt="Hinara Solutions logo"
            className="h-20 md:h-24 w-auto"
          />
          <p className="text-text-muted text-sm font-medium">
            © 2026 Hinara Solutions. Engineered in the Philippines.
          </p>
        </div>
      </footer>
    </div>
  );
}