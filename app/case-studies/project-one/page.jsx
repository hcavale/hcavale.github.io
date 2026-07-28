const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
const getImg = (path) => `${basePath}${path}`;

export default function DeltaVCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased selection:bg-zinc-800 selection:text-white pb-24">
      
      {/* HEADER NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
            DeltaV Enterprise Explorer Case Study
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
        {/* HERO HEADER */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 rounded-full text-xs font-mono text-emerald-400">
              Lead Product Designer
            </span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400">
              Industrial Automation SaaS
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            DeltaV Enterprise Explorer
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
            Architecting a $16M enterprise platform to index, compare, and query industrial control data across global manufacturing plants.
          </p>

          {/* QUICK-SCAN METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80 font-mono text-xs">
            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block uppercase mb-1">Impact Valuation</span>
              <span className="text-emerald-400 font-semibold text-base">$16M Enterprise Asset</span>
            </div>
            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block uppercase mb-1">Asset Volume</span>
              <span className="text-zinc-200 font-semibold text-base">50,000+ Nodes</span>
            </div>
            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block uppercase mb-1">Audit Time</span>
              <span className="text-zinc-200 font-semibold text-base">Days → Minutes</span>
            </div>
            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block uppercase mb-1">Key Responsibilities</span>
              <span className="text-zinc-200">UX Architecture, Systems Alignment</span>
            </div>
          </div>

          {/* SLIDE 1 IMAGE */}
          <div className="pt-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
            <img src={getImg('/images/slide-1-hero.png')} alt="Slide 1" />
            </div>
          </div>
        </header>

        {/* SECTION 01: PROBLEM & BEFORE/AFTER */}
        <section className="space-y-8 pt-8 border-t border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">01 / Context & Contrast</span>
            <h2 className="text-2xl font-semibold tracking-tight">The Problem: Disconnected Industrial Data</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* SLIDE 2 IMAGE & TEXT */}
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden p-2">
              <img src={getImg('/images/slide-2-legacy.png')} alt="Slide 2" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-mono text-red-400 uppercase">Legacy State (Slide 2)</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineers were tied to localized desktop tools with rigid tree navigation, forcing them to open separate instances for each plant site.
                </p>
              </div>
            </div>

            {/* SLIDE 3 IMAGE & TEXT */}
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden p-2">
              <img src={getImg('/images/slide-3-solution-overview.png')} alt="Slide 3" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-mono text-emerald-400 uppercase">Modern Solution State (Slide 3)</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A unified cloud explorer providing continuous visibility across thousands of global parameter blocks without sacrificing data density.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: ARCHITECTURE & SYSTEM CONSTRAINTS */}
        <section className="space-y-8 pt-8 border-t border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">02 / Technical Architecture</span>
            <h2 className="text-2xl font-semibold tracking-tight">System Constraints & Cloud Topography</h2>
          </div>

          {/* SLIDE 4 IMAGE */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 rounded-lg border border-zinc-800 bg-zinc-900 p-3 overflow-hidden">
            <img src={getImg('/images/slide-4-architecture.png')} alt="Slide 4" />
            </div>
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-medium text-zinc-200">Architecting for Technical Constraints</h3>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                <li className="p-3 bg-zinc-900/50 border border-zinc-800 rounded">
                  <strong className="text-zinc-200 block mb-1">Asynchronous Cloud Sync:</strong>
                  Designed UI states to handle edge-device latency across distributed global plants.
                </li>
                <li className="p-3 bg-zinc-900/50 border border-zinc-800 rounded">
                  <strong className="text-zinc-200 block mb-1">Data Schema Flexibility:</strong>
                  Accommodated missing parameters from older hardware without breaking table layouts.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 03: DISCOVERY & WORKSHOPPING */}
        <section className="space-y-8 pt-8 border-t border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">03 / Discovery & Alignment</span>
            <h2 className="text-2xl font-semibold tracking-tight">Research & Stakeholder Alignment</h2>
          </div>

          {/* SLIDE 5 IMAGE */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-medium text-zinc-200">Workshopping Synthesis</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Synthesized feedback from subject matter experts and systems engineers into three primary functional imperatives:
              </p>
              <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 font-mono">
                <li>Continuous split-pane browsing</li>
                <li>Automated parameter diffing</li>
                <li>Natural language boolean search</li>
              </ul>
            </div>
            <div className="md:col-span-7 rounded-lg border border-zinc-800 bg-zinc-900 p-3 overflow-hidden">
            <img src={getImg('/images/slide-5-workshop.png')} alt="Slide 5" />
            </div>
          </div>
        </section>

        {/* SECTION 04: CORE WORKFLOWS */}
        <section className="space-y-16 pt-8 border-t border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">04 / Core UX Workflows</span>
            <h2 className="text-2xl font-semibold tracking-tight">The Three Core Product Pillars</h2>
          </div>

          {/* SLIDE 6 */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs font-mono text-emerald-400">Pillar 01 (Slide 6)</span>
                <h3 className="text-xl font-medium">Split-Pane Hierarchy Navigation</h3>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden shadow-xl">
            <img src={getImg('/images/slide-6-browse.png')} alt="Slide 6" />
            </div>
          </div>

          {/* SLIDE 7 */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs font-mono text-emerald-400">Pillar 02 (Slide 7)</span>
                <h3 className="text-xl font-medium">Side-by-Side Parameter Diffing Workspace</h3>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden shadow-xl">
            <img src={getImg('/images/slide-7-compare.png')} alt="Slide 7" />
            </div>
          </div>

          {/* SLIDE 8 */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs font-mono text-emerald-400">Pillar 03 (Slide 8)</span>
                <h3 className="text-xl font-medium">Faceted Query Builder & Global Search</h3>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden shadow-xl">
            <img src={getImg('/images/slide-8-search.png')} alt="Slide 8" />
            </div>
          </div>
        </section>

        {/* SECTION 05: OUTCOMES & IMPACT (TYPOGRAPHIC CARDS) */}
        <section className="space-y-8 pt-8 border-t border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">05 / Impact & Outcomes</span>
            <h2 className="text-2xl font-semibold tracking-tight">Business Value & Key Results</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 font-mono">
            <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-lg space-y-3">
              <div className="text-emerald-400 font-bold text-3xl">$16M</div>
              <h3 className="text-sm font-semibold text-zinc-200 font-sans">Enterprise Asset Value</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Successfully architected and shipped a proprietary internal software asset that directly expanded operational capability across worldwide sites.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-lg space-y-3">
              <div className="text-emerald-400 font-bold text-3xl">Days → Mins</div>
              <h3 className="text-sm font-semibold text-zinc-200 font-sans">Audit Velocity</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Streamlined site parameter comparisons, reducing time spent writing manual queries and enabling instant compliance reporting.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-lg space-y-3">
              <div className="text-emerald-400 font-bold text-3xl">50,000+</div>
              <h3 className="text-sm font-semibold text-zinc-200 font-sans">Indexed Data Nodes</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Designed a performant interface pattern capable of handling deep data hierarchies without overwhelming complex enterprise user workflows.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}