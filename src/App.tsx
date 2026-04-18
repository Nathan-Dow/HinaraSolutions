/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Layers, Cpu, ArrowRight, Bot, Globe, Database, Wrench, ChevronRight
} from "lucide-react";
import hinaraLogo from "../hinaralogo.png";

// --- Sub-Components ---

const Navbar = ({ scrollToSection, refs }: { scrollToSection: any, refs: any }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-base/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-2 max-w-7xl mx-auto w-full">
        
        {/* Logo Section */}
        <div 
          onClick={() => scrollToSection(refs.hero)}
          className="flex items-center gap-3 cursor-pointer group relative"
        >
          {/* Logo Background Glow */}
          <div className="absolute -left-2 w-10 h-10 bg-brand-green/20 rounded-lg blur-md group-hover:bg-brand-green/40 transition-all duration-500"></div>
          
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

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-bg-base min-h-screen">
      <Navbar scrollToSection={scrollToSection} refs={sectionRefs} />
      
      <main>
        {/* HERO SECTION */}
        <section ref={sectionRefs.hero} className="relative pt-48 pb-32 px-6 overflow-hidden bg-mesh min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-brand-green/20 mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_rgba(46,234,115,0.8)]"></span>
              <span className="text-xs font-semibold text-brand-green uppercase tracking-widest">Engineering Next-Gen Systems</span>
            </motion.div>

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
                viewport={{ once: true, delay: 0.1 }}
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
                viewport={{ once: true, delay: 0.2 }}
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
                viewport={{ once: true, delay: 0.3 }}
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

        {/* PACKAGES SECTION */}
        <section ref={sectionRefs.packages} className="py-32 px-6 bg-bg-surface border-t border-white/5 relative scroll-mt-10">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between items-start mb-20 gap-4"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Select your architecture.</h2>
              <p className="text-text-muted text-lg max-w-xl">Transparent pricing. No bloated agency fees. Just high-performance engineering tailored to your operational scale.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
              {[
                {
                  icon: <Bot size={24} />, name: "AI Customer System", target: "Service Businesses & Retail", desc: "Automated chat replies, FAQ handling, and lead capture directly to your database.", price: "₱15k–30k", highlight: false
                },
                {
                  icon: <Globe size={24} />, name: "Growth Website", target: "Emerging SMEs", desc: "Modern, fast 3-5 page architecture. Forms, SEO setup, and mobile perfection.", price: "₱10k–30k", highlight: true
                },
                {
                  icon: <Database size={24} />, name: "Ops & Booking OS", target: "Agencies & Logistics", desc: "Full-stack internal dashboard, admin panel, and reservation automation.", price: "₱40k–120k", highlight: false
                }
              ].map((pkg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-8 rounded-3xl transition-all duration-300 flex flex-col group ${
                    pkg.highlight 
                      ? 'bg-bg-elevated border border-brand-green/50 shadow-[0_0_40px_rgba(46,234,115,0.1)] lg:scale-105 z-10 relative' 
                      : 'bg-bg-base border border-white/5 hover:border-brand-green/30 hover:-translate-y-2'
                  }`}
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className={`p-3 rounded-xl ${pkg.highlight ? 'bg-brand-green text-bg-base' : 'bg-bg-elevated text-brand-green'}`}>
                      {pkg.icon}
                    </div>
                    {pkg.highlight && <span className="bg-brand-green/20 text-brand-green text-xs font-bold px-3 py-1 rounded-full border border-brand-green/30">Most Popular</span>}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-text-muted mb-8 h-10">{pkg.target}</p>
                  
                  <div className="text-3xl font-bold text-white mb-8 tracking-tight">{pkg.price}</div>
                  <p className="text-sm text-text-muted mb-10 leading-relaxed flex-grow">{pkg.desc}</p>
                  
                  <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight ? 'bg-brand-green text-bg-base hover:bg-white' : 'bg-bg-elevated text-white hover:bg-brand-green hover:text-bg-base'
                  }`}>
                    Initialize <ChevronRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Retainers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto border border-border-subtle rounded-3xl p-8 md:p-12 bg-bg-elevated/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Wrench className="text-brand-green" /> Maintenance & Support Retainers
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-white/10 items-center hover:px-2 transition-all">
                  <div className="md:col-span-3 font-semibold text-white">Basic Care</div>
                  <div className="md:col-span-6 text-sm text-text-muted">Hosting, bug fixes, uptime monitoring for static/small sites.</div>
                  <div className="md:col-span-3 text-right font-mono text-white">₱2k–3.5k/mo</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-white/10 items-center hover:px-2 transition-all">
                  <div className="md:col-span-3 font-semibold text-brand-green">Growth Support</div>
                  <div className="md:col-span-6 text-sm text-text-muted">Active updates, minor logic changes, routine database backups.</div>
                  <div className="md:col-span-3 text-right font-mono text-brand-green font-bold">₱5k–8k/mo</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:px-2 transition-all">
                  <div className="md:col-span-3 font-semibold text-white">Automation</div>
                  <div className="md:col-span-6 text-sm text-text-muted">AI/chatbot tweaking, workflow improvements, API maintenance.</div>
                  <div className="md:col-span-3 text-right font-mono text-white">₱2k–3.5k/mo</div>
                </div>
              </div>
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
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600" 
                    placeholder="Your Name" 
                    type="text" 
                  />
                  <input 
                    className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600" 
                    placeholder="Business Email" 
                    type="email" 
                  />
                </div>
                
                <textarea 
                  className="w-full bg-bg-surface border border-white/10 focus:border-brand-green focus:ring-1 focus:ring-brand-green text-white py-4 px-5 rounded-xl outline-none transition-all placeholder:text-gray-600 min-h-[150px] resize-none" 
                  placeholder="Tell us about the system you need built..." 
                ></textarea>

                <button className="bg-brand-green text-bg-base py-4 px-8 rounded-xl font-bold text-lg hover:bg-white transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2 glow-shadow">
                  Send Request <Terminal size={18} />
                </button>
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