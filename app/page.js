import React from 'react';
import Link from 'next/link';

// Path helper for direct root static export
const getImg = (path) => path;

export default function Home() {
  return (
    <div className="min-h-screen bg-platinum text-ink font-sans antialiased selection:bg-oxford selection:text-platinum pb-32">
      
      {/* NAVIGATION HEADER */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-platinum/80 border-b border-oxford/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs font-mono text-oxford font-semibold tracking-wider uppercase hover:text-bluebell transition-colors"
          >
            Portfolio
          </Link>
          <div className="flex items-center gap-8 text-xs font-mono text-dusty uppercase tracking-widest">
            <a href="#work" className="hover:text-oxford transition-colors">Work</a>
            <a href="#about" className="hover:text-oxford transition-colors">About</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20 space-y-32">
        
        {/* HERO SECTION */}
        <section className="space-y-8 max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-oxford text-platinum rounded-full font-medium">
              UX Designer
            </span>
            <span className="text-dusty uppercase tracking-widest">
              Industrial Automation Systems
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.15] text-oxford">
            Designing high-density software, complex workflows, and enterprise data platforms.
          </h1>

          <p className="text-xl md:text-2xl text-ink/80 font-light leading-relaxed max-w-3xl">
            Specializing in translating intricate, mission-critical industrial architectures into clear, operational user experiences.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
            <a 
              href="#work"
              className="px-5 py-3 bg-oxford text-platinum rounded-sm hover:bg-bluebell transition-colors font-medium flex items-center gap-2"
            >
              View Selected Work ↓
            </a>
            <a 
              href="#about"
              className="px-5 py-3 bg-white border border-oxford/20 text-oxford rounded-sm hover:border-oxford transition-colors"
            >
              Background & Leadership
            </a>
          </div>
        </section>

        {/* SELECTED WORK GRID */}
        <section id="work" className="space-y-12 pt-12 border-t border-oxford/10">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-dusty uppercase tracking-widest block mb-2">01 / Selected Projects</span>
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Enterprise Case Studies</h2>
            </div>
            <span className="text-xs font-mono text-dusty hidden sm:inline">2024 — Present</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* FEATURED CASE STUDY CARD */}
            <Link 
              href="/case-studies/project-one"
              className="group block space-y-4 p-4 bg-white border border-oxford/10 rounded-sm shadow-xs hover:border-oxford/30 transition-all"
            >
              <div className="aspect-video bg-platinum/50 rounded-xs overflow-hidden border border-oxford/10 relative">
                <img 
                  src={getImg('/images/slide-1-hero.png')} 
                  alt="DeltaV Enterprise Explorer Preview" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-bluebell font-semibold">Lead UX Architect</span>
                  <span className="text-dusty">Industrial Control</span>
                </div>
                <h3 className="text-xl font-medium text-oxford group-hover:text-bluebell transition-colors flex items-center justify-between">
                  <span>DeltaV Enterprise Explorer</span>
                  <span className="text-xs font-mono text-dusty group-hover:text-bluebell font-normal">Read →</span>
                </h3>
                <p className="text-xs text-ink/70 leading-relaxed font-sans">
                  Architecting a multi-site platform to query, compare, and audit over 50,000 parameter blocks across global manufacturing facilities.
                </p>
              </div>
            </Link>

            {/* SECONDARY PROJECT PLACEHOLDER */}
            <div className="space-y-4 p-4 bg-white/60 border border-oxford/10 rounded-sm opacity-80">
              <div className="aspect-video bg-platinum/80 rounded-xs border border-oxford/10 flex items-center justify-center font-mono text-xs text-dusty">
                [ Design System Artifact ]
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-oxford font-semibold">Design Systems</span>
                  <span className="text-dusty">Component Architecture</span>
                </div>
                <h3 className="text-xl font-medium text-oxford">
                  Industrial UI Pattern Library
                </h3>
                <p className="text-xs text-ink/70 leading-relaxed font-sans">
                  Standardizing dense data tables, parameter inputs, and real-time alarm visualizers for mission-critical operator displays.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT & LEADERSHIP SECTION */}
        <section id="about" className="space-y-12 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">02 / Background</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">UX Strategy & Leadership</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-sm text-ink/80 leading-relaxed font-sans">
              <p>
                I specialize in turning highly complex domain requirements into intuitive software interfaces for enterprise systems. My practice bridges technical constraints with human-centered research, ensuring complex software remains efficient, accessible, and scalable.
              </p>
              <p>
                Beyond product design, I facilitate collaborative alignment workshops and lead employee resource group initiatives aimed at fostering inclusive, high-performing team cultures.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4 font-mono text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-2 shadow-xs">
                <span className="text-dusty uppercase block">Core Focus</span>
                <p className="text-oxford font-medium">Enterprise Software, Industrial Automation, High-Density UX, Design Workshop Facilitation</p>
              </div>

              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-2 shadow-xs">
                <span className="text-dusty uppercase block">Location</span>
                <p className="text-oxford font-medium">Austin, Texas</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}