import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased selection:bg-zinc-800 selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Home
          </Link>
          <div className="flex gap-6 text-xs font-mono">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Work</Link>
            <Link href="/about/" className="text-white">About</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        
        {/* HERO INTRO */}
        <section className="space-y-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            About / UX & Systems Design
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-snug">
            Bridging technical complexity with intuitive product design.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            I’m a Lead Product Designer with a background in software coding, specializing in complex enterprise SaaS, industrial automation, and large-scale digital systems.
          </p>
        </section>

        {/* BACKGROUND & PHILOSOPHY */}
        <section className="grid md:grid-cols-12 gap-8 pt-12 border-t border-zinc-800/80">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-wider">Design Philosophy</h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-zinc-400 text-sm leading-relaxed">
            <p>
              Having a technical engineering foundation shapes how I approach product design. I don’t just design pretty interfaces—I design systems that respect data architecture, scalability constraints, and front-end reality.
            </p>
            <p>
              My focus is on transforming dense, data-heavy workflows into fast, clear discovery tools for enterprise power users without dumbing down the functional density they rely on daily.
            </p>
          </div>
        </section>

        {/* SKILLS & TECHNICAL STACK */}
        <section className="grid md:grid-cols-12 gap-8 pt-12 border-t border-zinc-800/80">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-wider">Capabilities</h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6 text-xs font-mono">
            <div className="space-y-3 p-5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
              <span className="text-zinc-200 block font-sans text-sm font-medium">Product & UX Design</span>
              <ul className="space-y-1.5 text-zinc-400">
                <li>• Information Architecture</li>
                <li>• Design Systems Strategy</li>
                <li>• Enterprise SaaS Workflows</li>
                <li>• Interactive Prototyping</li>
                <li>• User Research & Synthesis</li>
              </ul>
            </div>
            
            <div className="space-y-3 p-5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
              <span className="text-zinc-200 block font-sans text-sm font-medium">Technical & Engineering</span>
              <ul className="space-y-1.5 text-zinc-400">
                <li>• Front-End Architecture</li>
                <li>• React / Next.js Development</li>
                <li>• Tailwind CSS & Component Styling</li>
                <li>• Git Version Control</li>
                <li>• Developer Handoff & Specifications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT / CONNECT */}
        <section className="pt-12 border-t border-zinc-800/80 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Connect</span>
            <h2 className="text-2xl font-semibold tracking-tight">Let's talk.</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <a 
              href="mailto:your.email@example.com" 
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 rounded transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 rounded transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 rounded transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-800/80 py-12 px-6 mt-20 text-center text-xs text-zinc-500 font-mono">
        <p>Designed & Coded with intention.</p>
      </footer>

    </div>
  );
}