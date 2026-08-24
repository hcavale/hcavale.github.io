import React from 'react';
import Link from 'next/link';

// Path helper for root static export
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
            ← Home
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
              Industrial Automation & Enterprise SaaS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] text-oxford">
            DeltaV Enterprise Explorer
          </h1>
          
          <p className="text-xl md:text-2xl text-ink/80 font-light max-w-3xl leading-relaxed">
            Unifying global industrial automation data into a single discovery engine.
          </p>

          {/* METRICS & CONTEXT BAR */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-oxford/10 font-mono text-xs">
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Role & Scope</span>
              <span className="text-oxford font-semibold text-sm block">IA, Interaction Design, Strategy</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Indexed Nodes</span>
              <span className="text-ink font-semibold text-base block">50,000+ Parameters</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs col-span-2 md:col-span-1">
              <span className="text-dusty block uppercase">Audit Velocity</span>
              <span className="text-ink font-semibold text-base block">Days → Minutes</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="pt-6">
            <div className="max-w-3xl mx-auto rounded-sm border border-oxford/10 bg-white overflow-hidden shadow-sm p-2">
              <img 
                src={getImg('/images/slide-1-hero.png')} 
                alt="DeltaV Enterprise Explorer Overview" 
                className="w-full h-auto max-h-80 object-contain rounded-xs"
              />
            </div>
          </div>
        </header>

        {/* OVERVIEW */}
        <section className="space-y-6 pt-12 border-t border-oxford/10">
          <span className="text-xs font-mono text-dusty uppercase tracking-widest">Overview</span>
          <p className="text-lg text-ink/80 font-light leading-relaxed max-w-4xl">
            Modern manufacturing enterprises run on vast networks of distributed control systems. But across global facilities, plant data operates in silos. Engineers tasked with maintaining site standards, auditing safety logic, and validating system configurations lacked a centralized way to discover or cross-reference parameters across locations.
          </p>
          <p className="text-lg text-ink/80 font-light leading-relaxed max-w-4xl">
            DeltaV Enterprise Explorer was conceived as a high-speed discovery engine—transforming a fragmented database of over 50,000 technical assets into a clear, searchable, and comparative cloud ecosystem.
          </p>
        </section>

        {/* THE CHALLENGE */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">The Challenge</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Navigating Industrial Complexity</h2>
          </div>

          <p className="text-sm md:text-base text-ink/80 font-light leading-relaxed max-w-3xl">
            Designing for industrial automation requires translating immense technical density into low-friction interactions without oversimplifying power-user needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-2 shadow-xs">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase">01 / Architecture</span>
              <h3 className="text-sm font-semibold text-oxford">Fractured Data Architecture</h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                Every plant ran localized software with distinct naming conventions and isolated databases, requiring manual log-ins to audit configurations.
              </p>
            </div>

            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-2 shadow-xs">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase">02 / Usability</span>
              <h3 className="text-sm font-semibold text-oxford">Density vs. Cognitive Load</h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                Single parameter values dictate plant safety and throughput. The interface needed to display deep logic without overwhelming the workspace.
              </p>
            </div>

            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-2 shadow-xs">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase">03 / Adoption</span>
              <h3 className="text-sm font-semibold text-oxford">Entrenched Mental Models</h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                Decades of desktop software reliance created deep spatial habits. Modernizing required respecting those instincts while removing clutter.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS & STRATEGY */}
        <section className="space-y-6 pt-12 border-t border-oxford/10">
          <span className="text-xs font-mono text-dusty uppercase tracking-widest">Process & Strategy</span>
          <p className="text-lg text-ink/80 font-light leading-relaxed max-w-4xl">
            To bridge complex technical capabilities with clear human workflows, I led cross-functional discovery workshops with systems engineers, domain experts, and product leadership. We mapped how engineers think when searching for data, auditing variances, and verifying system health.
          </p>
          <p className="text-lg text-ink/80 font-light leading-relaxed max-w-4xl">
            Rather than forcing users to learn a completely new paradigm, I structured the core interactions around three fundamental operational tasks: Browsing, Comparing, and Searching.
          </p>
        </section>

        {/* WORKFLOW DEEP DIVE */}
        <section className="space-y-16 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">Core Interaction Workflows</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Translating Complex Models into Web Solutions</h2>
          </div>

          {/* WORKFLOW 01: BROWSE */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">01 / Workflow</span>
              <h3 className="text-xl font-medium text-oxford">
                Spatial Browsing & Asset Exploration
              </h3>
              <p className="text-xs font-mono text-dusty">Translating Deep Folder Hierarchies into Fluid Web Navigation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">The Problem</span>
                <p className="text-ink/80 leading-relaxed">
                  Engineers frequently lost their spatial orientation when navigating deep database trees, resulting in dozens of open windows and tedious back-and-forth toggling.
                </p>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">The Design Approach</span>
                <p className="text-ink/80 leading-relaxed">
                  I designed a split-pane navigation system paired with progressive breadcrumb trails. By anchoring high-level plant topology on the left while rendering detailed parameter views on the right, engineers traverse nested assets without losing context.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/slide-6-browse.png')} 
                alt="Split-pane navigation workflow" 
                className="w-full h-auto max-h-72 object-contain rounded-xs"
              />
            </div>
          </div>

          {/* WORKFLOW 02: COMPARE */}
          <div className="space-y-6 pt-10 border-t border-oxford/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">02 / Workflow</span>
              <h3 className="text-xl font-medium text-oxford">
                Cross-Site Parameter Comparison
              </h3>
              <p className="text-xs font-mono text-dusty">Transforming Manual Cross-Referencing into Automated Visual Diffs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">The Problem</span>
                <p className="text-ink/80 leading-relaxed">
                  Identifying discrepancies between local plant configurations and global corporate standards required engineers to export data into spreadsheets and manually cross-check line items line by line.
                </p>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">The Design Approach</span>
                <p className="text-ink/80 leading-relaxed">
                  I built an integrated side-by-side comparison workspace utilizing the legacy software's established color language—yellow for configuration variances and blue for missing matches. Honoring these familiar visual cues preserved instant recognition. Paired with a "Show Differences Only" toggle, engineers isolate critical variances across thousands of parameters in seconds.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/slide-7-compare.png')} 
                alt="Parameter diffing workspace workflow" 
                className="w-full h-auto max-h-72 object-contain rounded-xs"
              />
            </div>
          </div>

          {/* WORKFLOW 03: ADVANCED SEARCH */}
          <div className="space-y-6 pt-10 border-t border-oxford/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">03 / Workflow</span>
              <h3 className="text-xl font-medium text-oxford">
                Advanced Discovery & Query Building
              </h3>
              <p className="text-xs font-mono text-dusty">Simplifying Complex Database Logic into Guided Search</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">The Problem</span>
                <p className="text-ink/80 leading-relaxed">
                  Finding specific technical parameters across global facilities required writing specialized database scripts or relying on IT teams, bottlenecking daily audit tasks.
                </p>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">The Design Approach</span>
                <p className="text-ink/80 leading-relaxed">
                  I designed an interactive, tokenized query builder that translates complex nested boolean logic into visual filter chips. Combined with predictive auto-complete and contextual scope toggles, power users execute precise cross-site searches effortlessly without writing code.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/slide-8-search.png')} 
                alt="Faceted query builder workflow" 
                className="w-full h-auto max-h-72 object-contain rounded-xs"
              />
            </div>
          </div>
        </section>

        {/* OUTCOMES & IMPACT */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">Impact & Business Value</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Outcomes & Value Delivered</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 font-mono">
            <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3 shadow-xs">
              <div className="text-oxford font-semibold text-2xl">Days → Min</div>
              <h3 className="text-sm font-semibold text-ink font-sans">Audit Velocity</h3>
              <p className="text-xs text-ink/70 leading-relaxed font-sans font-light">
                Reduced cross-site system audit and parameter comparison times dramatically, replacing manual line-by-line checks.
              </p>
            </div>

            <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3 shadow-xs">
              <div className="text-oxford font-semibold text-2xl">50,000+</div>
              <h3 className="text-sm font-semibold text-ink font-sans">Indexed Data Nodes</h3>
              <p className="text-xs text-ink/70 leading-relaxed font-sans font-light">
                Created a continuous data visualizer capable of managing deep industrial hierarchies without visual clutter.
              </p>
            </div>

            <div className="p-6 bg-white border border-oxford/10 rounded-sm space-y-3 shadow-xs">
              <div className="text-oxford font-semibold text-2xl">Validated</div>
              <h3 className="text-sm font-semibold text-ink font-sans">Market Traction</h3>
              <p className="text-xs text-ink/70 leading-relaxed font-sans font-light">
                Established strong customer validation and partner alignment for the enterprise cloud platform strategy.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}