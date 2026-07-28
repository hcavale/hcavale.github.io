import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased selection:bg-zinc-800 selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="text-xs font-mono text-zinc-400">Portfolio</span>
          <div className="flex gap-6 text-xs font-mono">
            <Link href="/" className="text-white">Work</Link>
            <Link href="/about/" className="text-zinc-400 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        
        {/* INTRO HERO */}
        <section className="space-y-4">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Lead Product Designer & Systems Architect
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Building scalable design systems & enterprise SaaS software.
          </h1>
        </section>

        {/* FEATURED CASE STUDY CARD */}
        <section className="space-y-4 pt-8 border-t border-zinc-800/80">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Selected Work
          </span>

          <Link href="/case-studies/project-one/" className="block group">
            <div className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 space-y-6">
              
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-emerald-400">01 / Enterprise SaaS</span>
                  <h2 className="text-2xl font-semibold tracking-tight group-hover:text-emerald-400 transition-colors">
                    DeltaV Enterprise Explorer
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Architecting a $16M enterprise platform to index, compare, and query industrial control data across global manufacturing facilities.
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400 pt-2">
                <span className="px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">UX Architecture</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">Industrial Automation</span>
                <span className="px-2.5 py-1 rounded bg-zinc-800/60 border border-zinc-700/50">Data Density</span>
              </div>

            </div>
          </Link>
        </section>

      </main>

    </div>
  );
}