import React from 'react';
import Link from 'next/link';

// Path helper for GitHub Pages static export
const getImg = (path) => path;

export default function DeltaVCaseStudy() {
  return (
    <div className="min-h-screen bg-platinum text-ink font-sans antialiased selection:bg-oxford selection:text-platinum pb-32">
      
      {/* NAVIGATION HEADER */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-platinum/80 border-b border-oxford/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs font-mono text-oxford/70 hover:text-bluebell transition-colors flex items-center gap-2 tracking-wider uppercase font-medium"
          >
            ← Index
          </Link>
          <span className="text-xs font-mono text-dusty uppercase tracking-widest hidden sm:inline">
            DeltaV Enterprise Explorer
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 space-y-24">
        
        {/* HERO HEADER */}
        <header className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-oxford text-platinum rounded-full font-medium">
              Lead Product Designer
            </span>
            <span className="px-3 py-1 bg-platinum border border-dusty/40 rounded-full text-dusty">
              Industrial Automation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] text-oxford">
            DeltaV Enterprise Explorer
          </h1>
          
          <p className="text-xl md:text-2xl text-ink/80 font-light max-w-3xl leading-relaxed">
            Architecting a $16M enterprise platform to index, compare, and query complex industrial control data across global manufacturing facilities.
          </p>

          {/* METRICS & CONTEXT BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-oxford/10 font-mono text-xs">
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Impact Valuation</span>
              <span className="text-oxford font-semibold text-base">$16M Enterprise Asset</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Indexed Nodes</span>
              <span className="text-ink font-semibold text-base">50,000+ Parameters</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Audit Velocity</span>
              <span className="text-ink font-semibold text-base">Days → Minutes</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Core Scope</span>
              <span className="text-ink font-medium">UX Architecture & Alignment</span>
            </div>
          </div>

          {/* SLIDE 1 - HERO IMAGE */}
          <div className="pt-6">
            <div className="rounded-sm border border-oxford/10 bg-white overflow-hidden shadow-lg p-2">
              <img 
                src={getImg('/images/slide-1-hero.png')} 
                alt="DeltaV Enterprise Explorer Overview" 
                className="w-full h-auto object-cover rounded-xs"
              />
            </div>
          </div>
        </header>

        {/* SECTION 01: CONTRAST & CONTEXT */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">01 / Structural Challenge</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">The Problem: Fractured Industrial Data</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
                <img 
                  src={getImg('/images/slide-2-legacy.png')} 
                  alt="Legacy System Interface" 
                  className="w-full h-auto rounded-xs"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono text-oxford font-semibold uppercase tracking-wider">Legacy State</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Engineers were tied to localized desktop software with rigid tree navigation, requiring separate instances to audit individual plant sites.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
                <img 
                  src={getImg('/images/slide-3-solution-overview.png')} 
                  alt="Modern Solution State Interface" 
                  className="w-full h-auto rounded-xs"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">Modern Solution State</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  A unified cloud explorer offering continuous visibility across thousands of global parameter blocks without sacrificing data density.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: ARCHITECTURE */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">02 / Technical Architecture</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">System Constraints & Topography</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/slide-4-architecture.png')} 
                alt="System Architecture Diagram" 
                className="w-full h-auto rounded-xs"
              />
            </div>
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-medium text-oxford">Architecting for Industrial Latency</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                Designing enterprise software for industrial plants requires balancing high data throughput with varying cloud sync capabilities.
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                  <strong className="text-oxford block">Asynchronous Cloud Sync:</strong>
                  <span className="text-ink/70">UI handles edge-device latency without locking interactions.</span>
                </div>
                <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                  <strong className="text-oxford block">Flexible Schema Handling:</strong>
                  <span className="text-ink/70">Gracefully renders missing parameters from legacy plant hardware.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: DISCOVERY */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">03 / Discovery & Synthesis</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Research & Workshop Alignment</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-medium text-oxford">Alignment Workshops</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                Synthesized insights from systems engineers and subject matter experts into three core design pillars:
              </p>
              <ul className="space-y-2 font-mono text-xs text-ink/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bluebell"></span>
                  Split-pane visual browsing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bluebell"></span>
                  Automated parameter diffing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bluebell"></span>
                  Faceted boolean search queries
                </li>
              </ul>
            </div>
            <div className="md:col-span-7 rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/slide-5-workshop.png')} 
                alt="Miro Alignment Workshop Artifacts" 
                className="w-full h-auto rounded-xs"
              />
            </div>
          </div>
        </section>

        {/* SECTION 04: CORE PILLARS */}
        <section className="space-y-16 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">04 / Interaction Design</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Core Interface Pillars</h2>
          </div>

          {/* PILLAR 01 */}
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-oxford/10 pb-2">
              <h3 className="text-xl font-medium text-oxford">01. Split-Pane Hierarchy Navigation</h3>
              <span className="text-xs font-mono text-dusty">Slide 06</span>
            </div>
            <div className="rounded-sm border border-oxford/10 bg-white p-2 shadow-md">
              <img src={getImg('/images/slide-6-browse.png')} alt="Split-pane navigation" className="w-full h-auto rounded-xs" />
            </div>
          </div>

          {/* PILLAR 02 */}
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-oxford/10 pb-2">
              <h3 className="text-xl font-medium text-oxford">02. Side-by-Side Parameter Diffing Workspace</h3>
              <span className="text-xs font-mono text-dusty">Slide 07</span>
            </div>
            <div className="rounded-sm border border-oxford/10 bg-white p-2 shadow-md">
              <img src={getImg('/images/slide-7-compare.png')} alt="Parameter diffing workspace" className="w-full h-auto rounded-xs" />
            </div>
          </div>

          {/* PILLAR 03 */}
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-oxford/10 pb-2">
              <h3 className="text-xl font-medium text-oxford">03. Faceted Query Builder & Search</h3>
              <span className="text-xs font-mono text-dusty">Slide 08</span>
            </div>
            <div className="rounded-sm border border-oxford/10 bg-white p-2 shadow-md">
              <img src={getImg('/images/slide-8-search.png')} alt="Faceted query builder" className="w-full h-auto rounded-xs" />
            </div>
          </div>
        </section>

        {/* SECTION 05: OUTCOMES */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">05 / Measured Impact</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Outcomes & Value Delivered</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 font-mono">
            <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3 shadow-xs">
              <div className="text-oxford font-semibold text-4xl">$16M</div>
              <h3 className="text-sm font-semibold text-ink font-sans">Enterprise Valuation</h3>
              <p className="text-xs text-ink/70 leading-relaxed font-sans">
                Architected and delivered a high-value proprietary internal asset expanding cross-site operational capabilities.
              </p>
            </div>

            <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3 shadow-xs">
              <div className="text-oxford font-semibold text-4xl">Days → Min</div>
              <h3 className="text-sm font-semibold text-ink font-sans">Audit Velocity</h3>
              <p className="text-xs text-ink/70 leading-relaxed font-sans">
                Reduced site parameter comparison times dramatically, eliminating manual queries and enabling automated compliance reports.
              </p>
            </div>

            <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3 shadow-xs">
              <div className="text-oxford font-semibold text-4xl">50k+</div>
              <h3 className="text-sm font-semibold text-ink font-sans">Indexed Data Nodes</h3>
              <p className="text-xs text-ink/70 leading-relaxed font-sans">
                Created a continuous data visualizer capable of managing deep industrial hierarchies without visual clutter.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}