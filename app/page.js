'use client';

import React from 'react';
import Link from 'next/link';

// Path helper for direct root static export
const getImg = (path) => path;

export default function Home() {
  return (
    <div className="min-h-screen bg-platinum text-ink font-sans antialiased selection:bg-oxford selection:text-platinum pb-32">
      
      {/* NAVIGATION HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* LOGO / FAVICON LEFT */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={getImg('/favicon.png')} 
            alt="Harsheta Cavale Logo" 
            className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              // Fallback to stylized initials if image isn't available
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-semibold text-oxford tracking-tight text-base group-hover:text-bluebell transition-colors">
            HC
          </span>
        </Link>

        {/* NAV LINKS RIGHT */}
        <nav className="flex items-center gap-6 md:gap-10 font-sans text-sm md:text-base text-ink/80 tracking-wide">
          <Link 
            href="/" 
            className="hover:text-oxford transition-colors duration-200"
          >
            Home
          </Link>
          <a 
            href="#work" 
            className="hover:text-oxford transition-colors duration-200"
          >
            Case Studies
          </a>
          <Link 
            href="/about" 
            className="hover:text-oxford transition-colors duration-200"
          >
            About
          </Link>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-oxford transition-colors duration-200"
          >
            Resume
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-10 space-y-32">
        
        {/* HERO SECTION - FULL LANDING SCREEN */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8 max-w-3xl mx-auto px-4 py-12">
          
          {/* HEADING WITH INLINE AVATAR */}
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-oxford leading-tight flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span>Hi,</span>
            <img 
              src={getImg('/images/avatar.jpg')} 
              alt="Harsheta Cavale" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover shadow-sm border border-oxford/10 inline-block align-middle transform -rotate-2"
              onError={(e) => { 
                // Fallback placeholder if image path isn't set yet
                e.currentTarget.style.display = 'none'; 
              }}
            />
            <span>I'm Harsheta!</span>
          </h1>

          {/* CUSTOMER-FOCUSED CENTERED DESCRIPTION */}
          <p className="text-base md:text-xl text-ink/80 font-sans leading-relaxed max-w-2xl font-light">
          Creating clear, user-focused digital experiences that make complex systems effortless to navigate.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            {/* PRIMARY CTA */}
            <a
              href="#work"
              className="px-6 py-3.5 bg-oxford text-platinum rounded-sm hover:bg-bluebell transition-all duration-200 font-medium shadow-xs"
            >
              Explore Case Studies
            </a>

            {/* SECONDARY CTA */}
            <Link
              href="/about"
              className="px-6 py-3.5 bg-white border border-oxford/20 text-oxford rounded-sm hover:bg-oxford/5 hover:border-oxford/40 transition-all duration-200 font-medium"
            >
              Learn More About Me
            </Link>
          </div>

        </section>

        {/* SELECTED WORK GRID */}
        <section id="work" className="space-y-12 pt-12 border-t border-oxford/10">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-dusty uppercase tracking-widest block mb-2">01 / Selected Projects</span>
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Case Studies</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* FEATURED CASE STUDY CARD 01 */}
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
                  <span className="text-bluebell font-semibold">Lead Product Designer</span>
                  <span className="text-dusty">Enterprise Control Systems</span>
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

            {/* SECOND CASE STUDY CARD - TRANSFER HUB */}
            <Link 
              href="/case-studies/project-two"
              className="group block space-y-4 p-4 bg-white border border-oxford/10 rounded-sm shadow-xs hover:border-oxford/30 transition-all"
            >
              <div className="aspect-video bg-platinum/50 rounded-xs border border-oxford/10 overflow-hidden relative flex items-center justify-center font-mono text-xs text-dusty">
                <img 
                  src="/images/transfer-hub-hero.png" 
                  alt="Emerson Transfer Hub Preview" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 z-10 relative"
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                  }}
                />
                <span className="absolute z-0 font-mono text-xs text-dusty">
                  [ Transfer Hub Artifact ]
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-bluebell font-semibold">Lead Product Designer</span>
                  <span className="text-dusty">Life Sciences</span>
                </div>

                <h3 className="text-xl font-medium text-oxford group-hover:text-bluebell transition-colors flex items-center justify-between">
                  <span>Emerson Transfer Hub</span>
                  <span className="text-xs font-mono text-dusty group-hover:text-bluebell font-normal">Read →</span>
                </h3>

                <p className="text-xs text-ink/70 leading-relaxed font-sans">
                  Translating process intent into execution context across regulated life sciences value chains via file ingestion, AI mapping, and work item handling.
                </p>
              </div>
            </Link>

          </div>
        </section>

        {/* AI & WORKFLOW INNOVATION SECTION */}
        <section className="space-y-12 pt-12 border-t border-oxford/10">
          
          {/* MAIN SECTION HEADER */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest block">
              02 / Design Operations
            </span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">
              UX Strategy & Leadership
            </h2>
            <p className="text-sm text-ink/80 max-w-3xl font-sans leading-relaxed">
              Driving enterprise UX design operations through technical innovation, structured workflow acceleration, and cross-functional mentorship.
            </p>
          </div>

          {/* SUBSECTION 1: AI & PIPELINE INNOVATION */}
          <div className="space-y-6 pt-4 border-t border-oxford/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell uppercase tracking-wider font-semibold block">
                Technical Operations
              </span>
              <h3 className="text-lg md:text-xl font-medium tracking-tight text-oxford">
                The Refined AI Pipeline
              </h3>
              <p className="text-xs text-ink/70 font-sans max-w-2xl pt-1">
                Modernizing delivery by embedding AI-assisted tooling directly into our design-to-development pipeline. By combining Claude Design, Figma Make, and GitHub Copilot via Figma MCP, I established a structured workflow that accelerates early prototyping while keeping production UI strictly aligned with design system governance.
              </p>
            </div>

            {/* 3-STAGE PIPELINE GRID */}
            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs relative">
              
              {/* STAGE 01 */}
              <div className="p-6 bg-white border border-oxford/10 rounded-sm shadow-xs flex flex-col justify-between space-y-6 hover:border-oxford/30 transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-oxford/10 pb-3">
                    <span className="text-2xl font-semibold text-oxford">01</span>
                    <span className="px-2 py-0.5 bg-oxford/5 text-oxford text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      Human Owned
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-oxford font-sans">Define</h4>
                    <span className="text-[11px] text-dusty block font-mono">Concept & System Intent</span>
                  </div>
                  <p className="text-ink/70 font-sans text-xs leading-relaxed">
                    Leverages Claude Design and Figma Make prototypes built from cross-functional alignment. Establishes AI specifications, use cases, and validation scenarios.
                  </p>
                </div>

                <div className="pt-3 border-t border-oxford/10 text-[11px] text-oxford font-semibold">
                  Output: <span className="font-normal text-ink/80">AI-understandable artifacts (.md specs & prototypes)</span>
                </div>
              </div>

              {/* STAGE 02 */}
              <div className="p-6 bg-white border border-oxford/10 rounded-sm shadow-xs flex flex-col justify-between space-y-6 hover:border-oxford/30 transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-oxford/10 pb-3">
                    <span className="text-2xl font-semibold text-oxford">02</span>
                    <span className="px-2 py-0.5 bg-bluebell/15 text-bluebell text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      Machine Executed
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-oxford font-sans">Generate</h4>
                    <span className="text-[11px] text-dusty block font-mono">Automated Implementation</span>
                  </div>
                  <p className="text-ink/70 font-sans text-xs leading-relaxed">
                    Utilizes GitHub Copilot with Figma MCP using design system guidelines and AI specs to build production-grade UI scaffolding directly.
                  </p>
                </div>

                <div className="pt-3 border-t border-oxford/10 text-[11px] text-oxford font-semibold">
                  Output: <span className="font-normal text-ink/80">Functional code — not just static mockups</span>
                </div>
              </div>

              {/* STAGE 03 */}
              <div className="p-6 bg-white border border-oxford/10 rounded-sm shadow-xs flex flex-col justify-between space-y-6 hover:border-oxford/30 transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-oxford/10 pb-3">
                    <span className="text-2xl font-semibold text-oxford">03</span>
                    <span className="px-2 py-0.5 bg-oxford/5 text-oxford text-[10px] uppercase font-bold tracking-wider rounded-xs">
                      Human Audited
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-oxford font-sans">Align</h4>
                    <span className="text-[11px] text-dusty block font-mono">Validation & System Integrity</span>
                  </div>
                  <p className="text-ink/70 font-sans text-xs leading-relaxed">
                    Evaluates implemented code against UX intent, hierarchy, and interaction behaviors. Resolves system mismatches and prevents design drift.
                  </p>
                </div>

                <div className="pt-3 border-t border-oxford/10 text-[11px] text-oxford font-semibold">
                  Output: <span className="font-normal text-ink/80">Production-ready, system-aligned UI</span>
                </div>
              </div>

            </div>
          </div>

          {/* SUBSECTION 2: COMMUNITY & LEADERSHIP */}
          <div className="space-y-6 pt-6 border-t border-oxford/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell uppercase tracking-wider font-semibold block">
                Team & Capability Building
              </span>
              <h3 className="text-lg md:text-xl font-medium tracking-tight text-oxford">
                Community & Mentorship
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3">
                <div className="text-xs font-mono text-dusty uppercase tracking-wider">Practice Leadership</div>
                <h4 className="text-base font-semibold text-oxford">UX Community of Practice</h4>
                <p className="text-xs text-ink/70 font-sans leading-relaxed">
                  Founded and facilitate monthly knowledge-sharing sessions across engineering and design teams to standardize best practices, design system updates, and emerging workflow methodologies.
                </p>
              </div>

              <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3">
                <div className="text-xs font-mono text-dusty uppercase tracking-wider">Talent Enablement</div>
                <h4 className="text-base font-semibold text-oxford">Intern Mentorship</h4>
                <p className="text-xs text-ink/70 font-sans leading-relaxed">
                  Mentored design interns on integrating modern AI-assisted tooling into human-centered design workflows, balancing rapid technical execution with enterprise accessibility standards.
                </p>
              </div>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}