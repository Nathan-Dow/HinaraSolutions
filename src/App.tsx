/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Code2, 
  MonitorSmartphone, 
  Rocket, 
  ArrowRight, 
  ShieldCheck, 
  Headphones, 
  Mail, 
  User, 
  ChevronDown 
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto w-full">
        <span className="text-2xl font-bold tracking-tighter text-brand-dark font-headline">HINARA</span>
        <div className="hidden md:flex items-center space-x-10">
          <a className="text-brand-dark border-b-2 border-brand-accent pb-1 font-headline font-medium tracking-tight" href="#">Services</a>
          <a className="text-slate-600 hover:text-brand-dark transition-colors font-headline font-medium tracking-tight" href="#">Mission</a>
          <a className="text-slate-600 hover:text-brand-dark transition-colors font-headline font-medium tracking-tight" href="#">Portfolio</a>
          <a className="text-slate-600 hover:text-brand-dark transition-colors font-headline font-medium tracking-tight" href="#">Packages</a>
        </div>
        <button className="bg-brand-primary text-brand-dark px-6 py-2.5 rounded-full font-headline font-bold hover:bg-brand-accent hover:text-white transition-all shadow-sm">
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          <span className="text-brand-accent font-label text-xs tracking-widest uppercase font-bold">Digital Excellence in the Philippines</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-headline font-bold text-slate-900 leading-[0.95] tracking-tighter mb-8 max-w-5xl"
        >
          Empowering Philippine MSMEs Through <span className="text-brand-accent italic">Digital Architecture</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 font-body max-w-2xl mb-12 leading-relaxed"
        >
          Scale your local business with world-class, affordable, and professional software development designed for the modern Filipino market.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="bg-brand-primary text-brand-dark px-8 py-4 rounded-full font-headline font-bold text-lg hover:shadow-xl hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-2">
            Book Your Free Consultation
            <ArrowRight size={20} />
          </button>
          <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-slate-50 transition-all">
            View Portfolio
          </button>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -z-0 top-1/4 -right-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute -z-0 bottom-0 -left-20 w-[500px] h-[500px] bg-sky-100/30 blur-[150px] rounded-full"></div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-brand-accent" size={32} />,
      title: "Custom Website Development",
      description: "Bespoke web solutions that capture your brand essence and convert visitors into loyal customers."
    },
    {
      icon: <MonitorSmartphone className="text-brand-accent" size={32} />,
      title: "Mobile-Responsive Design",
      description: "Optimized experiences for every screen size, ensuring your business is accessible anywhere in the Philippines."
    },
    {
      icon: <Rocket className="text-brand-accent" size={32} />,
      title: "Affordable Growth Packages",
      description: "Tiered solutions designed to scale with your business journey, from startup to market leader."
    }
  ];

  return (
    <section className="py-32 px-6 bg-brand-surface-low decoration-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-label tracking-[0.3em] text-brand-accent uppercase font-bold mb-4 block">Architectural Services</span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-slate-900 tracking-tighter">Engineered for your success.</h2>
          </div>
          <p className="text-slate-500 font-body max-w-sm mb-2 text-lg">
            We bridge the gap between traditional enterprise and digital scale through precision coding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-surface-low flex items-center justify-center mb-8 group-hover:bg-brand-primary/20 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-headline font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-500 font-body leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="h-full bg-brand-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] relative shadow-2xl">
            <img 
              alt="Modern software development office environment" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" 
              referrerPolicy="no-referrer"
              src="https://picsum.photos/seed/workspace-tech/800/1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-5 md:-right-10 p-10 bg-white border border-slate-100 rounded-3xl shadow-xl z-20"
          >
            <div className="text-5xl font-headline font-bold text-brand-accent mb-1">100%</div>
            <div className="text-xs font-label uppercase tracking-widest text-slate-400 font-bold">Local Expertise</div>
          </motion.div>
        </div>
        
        <div className="lg:pl-10">
          <span className="text-sm font-label tracking-[0.3em] text-brand-accent uppercase font-bold mb-4 block">Our Commitment</span>
          <h3 className="text-4xl md:text-7xl font-headline font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
            Innovating Today,<br />
            Empowering <span className="text-slate-300">Tomorrow.</span>
          </h3>
          <p className="text-xl text-slate-500 font-body leading-relaxed mb-10">
            Hinara Solutions was founded on a singular premise: that the backbone of the Philippine economy—our MSMEs—deserve the same digital caliber as global giants. 
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="mt-1 bg-brand-primary/20 p-2 rounded-lg">
                <ShieldCheck className="text-brand-accent" size={24} />
              </div>
              <div>
                <h5 className="font-headline font-bold text-slate-900 text-lg">Precision Engineering</h5>
                <p className="text-slate-500">Every line of code is written with performance and security in mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="mt-1 bg-brand-primary/20 p-2 rounded-lg">
                <Headphones className="text-brand-accent" size={24} />
              </div>
              <div>
                <h5 className="font-headline font-bold text-slate-900 text-lg">Ongoing Local Support</h5>
                <p className="text-slate-500">We're based here. We understand the market. We're here when you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section className="py-32 px-6 bg-brand-surface-low">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-sm font-label tracking-[0.3em] text-brand-accent uppercase font-bold mb-4 block">Get Started</span>
        <h3 className="text-4xl md:text-6xl font-headline font-bold text-slate-900 tracking-tighter">Start Your Project</h3>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[40px] border border-slate-100 shadow-2xl relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-[80px]"></div>
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-xs font-label uppercase tracking-widest text-slate-400 font-bold ml-1 flex items-center gap-2">
                <User size={14} /> Full Name
              </label>
              <input 
                className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 focus:border-brand-accent focus:ring-0 text-slate-900 py-4 px-4 rounded-xl transition-all placeholder:text-slate-300" 
                placeholder="Juan Dela Cruz" 
                type="text" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-label uppercase tracking-widest text-slate-400 font-bold ml-1 flex items-center gap-2">
                <Mail size={14} /> Business Email
              </label>
              <input 
                className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 focus:border-brand-accent focus:ring-0 text-slate-900 py-4 px-4 rounded-xl transition-all placeholder:text-slate-300" 
                placeholder="juan@company.ph" 
                type="email" 
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-xs font-label uppercase tracking-widest text-slate-400 font-bold ml-1">Service Required</label>
            <div className="relative">
              <select className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 focus:border-brand-accent focus:ring-0 text-slate-900 py-4 px-4 rounded-xl transition-all appearance-none cursor-pointer">
                <option>Website Development</option>
                <option>Mobile App Design</option>
                <option>Growth Package</option>
                <option>Other Consultation</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-label uppercase tracking-widest text-slate-400 font-bold ml-1">Tell us about your vision</label>
            <textarea 
              className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 focus:border-brand-accent focus:ring-0 text-slate-900 py-4 px-4 rounded-xl transition-all placeholder:text-slate-300 resize-none min-h-[150px]" 
              placeholder="Briefly describe your goals..." 
            ></textarea>
          </div>

          <button className="w-full bg-brand-primary text-brand-dark py-6 rounded-full font-headline font-black text-xl hover:shadow-2xl hover:shadow-brand-primary/40 transition-all transform hover:-translate-y-1 active:translate-y-0" type="submit">
            Initiate Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white w-full py-16 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-brand-dark font-bold font-headline text-3xl tracking-tighter">HINARA</span>
            <p className="text-slate-400 font-body text-sm max-w-xs leading-relaxed">
              © 2024 Hinara Solutions. Engineering digital architecture to empower the next generation of Philippine MSMEs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <a className="text-slate-600 hover:text-brand-accent transition-colors font-body text-sm font-medium" href="#">Privacy Policy</a>
            <a className="text-slate-600 hover:text-brand-accent transition-colors font-body text-sm font-medium" href="#">Terms Service</a>
            <a className="text-slate-600 hover:text-brand-accent transition-colors font-body text-sm font-medium" href="#">Facebook</a>
            <a className="text-slate-600 hover:text-brand-accent transition-colors font-body text-sm font-medium" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Mission />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
