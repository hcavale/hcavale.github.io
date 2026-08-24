import React from 'react';
import Link from 'next/link';

// Path helper for root static export
const getImg = (path) => path;

export default function TransferHubCaseStudy() {
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
            Emerson Transfer Hub
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
              Life Sciences & Automation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.1] text-oxford">
            Transfer Hub
          </h1>
          
          <p className="text-xl md:text-2xl text-ink/80 font-light max-w-3xl leading-relaxed">
            Translating process intent into execution context across regulated life sciences manufacturing environments.
          </p>

          {/* METRICS & CONTEXT BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-oxford/10 font-mono text-xs">
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Platform Target</span>
              <span className="text-oxford font-semibold text-base">MES & DCS Systems</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Domain Compliance</span>
              <span className="text-ink font-semibold text-base">21 CFR Part 11 / GxP</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Core Innovations</span>
              <span className="text-ink font-semibold text-base">AI Mapping & Ingestion</span>
            </div>
            <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
              <span className="text-dusty block uppercase">Role</span>
              <span className="text-ink font-medium">Lead Product Designer</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="pt-6">
            <div className="max-w-3xl mx-auto rounded-sm border border-oxford/10 bg-white overflow-hidden shadow-sm p-2">
              <img 
                src={getImg('/images/transfer-hub-hero.png')} 
                alt="Emerson Transfer Hub Overview" 
                className="w-full h-auto max-h-80 object-contain rounded-xs bg-platinum/30"
              />
            </div>
          </div>
        </header>

        {/* SECTION 01: CONTEXT & OVERVIEW */}
        <section className="space-y-10 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">01 / Product Vision</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Bridging Process Intent and Execution Context</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4 text-sm text-ink/80 leading-relaxed">
              <p>
                In life sciences manufacturing, process engineers and scientists design recipes using functional requirements, design rationale, and process parameters. However, Manufacturing Execution Systems (MES) and Distributed Control Systems (DCS) operate strictly in structured control logic and validated procedures.
              </p>
              <p>
                <strong>Transfer Hub</strong> serves as the translation layer between these two worlds—ensuring that what was designed in R&D is precisely what gets executed on the plant floor, maintaining complete fidelity and auditability in regulated environments.
              </p>
              <a 
                href="https://www.emerson.com/en/corporate/news/2025/05-emersons-automation-platform-drives-data-mobility-across-life-sciences-value-chain"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs font-mono text-bluebell hover:underline pt-2"
              >
                Read Emerson Official Announcement ↗
              </a>
            </div>

            <div className="md:col-span-5 space-y-3 font-mono text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <strong className="text-oxford block">Scientific R&D Side:</strong>
                <span className="text-ink/70">Functional parameters, design rationale, batch requirements.</span>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <strong className="text-oxford block">Plant Execution Side:</strong>
                <span className="text-ink/70">Control logic, electronic batch records (eBR), validated plant procedures.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: WORKFLOW DEEP DIVE */}
        <section className="space-y-16 pt-12 border-t border-oxford/10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-dusty uppercase tracking-widest">02 / Key Workflows & Interaction Design</span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-oxford">Architected Core System Workflows</h2>
          </div>

          {/* WORKFLOW 01: FILE INGESTION */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">Workflow 01</span>
              <h3 className="text-xl font-medium text-oxford">
                Flexible File Ingestion & Data Parsing
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">User Pain Point</span>
                <p className="text-ink/80 leading-relaxed">Recipe specifications arrive in disparate file formats (spreadsheets, legacy XML, unstructured docs), requiring slow, error-prone manual re-entry.</p>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">UX Solution</span>
                <p className="text-ink/80 leading-relaxed">Designed an intelligent file drag-and-drop workspace with instant schema detection, real-time error validation, and multi-format preview screens.</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/transfer-hub-ingestion.png')} 
                alt="File Ingestion Interface" 
                className="w-full h-auto max-h-72 object-contain rounded-xs bg-platinum/30"
              />
            </div>
          </div>

          {/* WORKFLOW 02: AI MAPPING */}
          <div className="space-y-6 pt-10 border-t border-oxford/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">Workflow 02</span>
              <h3 className="text-xl font-medium text-oxford">
                AI-Assisted Parameter & Concept Mapping
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">User Pain Point</span>
                <p className="text-ink/80 leading-relaxed">Mapping hundreds of scientific parameters to specific MES control block inputs requires deep technical domain knowledge and days of manual pairing.</p>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">UX Solution</span>
                <p className="text-ink/80 leading-relaxed">Implemented AI-suggested mappings with visual confidence scores, allowing engineers to accept high-confidence pairs in bulk or resolve low-confidence matches via interactive side-by-side split views.</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/transfer-hub-ai-mapping.png')} 
                alt="AI Mapping Interface" 
                className="w-full h-auto max-h-72 object-contain rounded-xs bg-platinum/30"
              />
            </div>
          </div>

          {/* WORKFLOW 03: WORK ITEM HANDLING */}
          <div className="space-y-6 pt-10 border-t border-oxford/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-bluebell font-semibold uppercase tracking-wider">Workflow 03</span>
              <h3 className="text-xl font-medium text-oxford">
                Work Item Handling & Audit Traceability
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">User Pain Point</span>
                <p className="text-ink/80 leading-relaxed">Lack of clear task ownership and full regulatory audit trails during data transfer leads to compliance risks during GxP inspections.</p>
              </div>
              <div className="p-4 bg-white border border-oxford/10 rounded-sm space-y-1 shadow-xs">
                <span className="font-mono text-oxford uppercase font-semibold block">UX Solution</span>
                <p className="text-ink/80 leading-relaxed">Created a structured work item queue featuring approval statuses, automated change logs, electronic signature checkpoints, and explicit version lineage.</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto rounded-sm border border-oxford/10 bg-white p-2 shadow-xs">
              <img 
                src={getImg('/images/transfer-hub-work-items.png')} 
                alt="Work Item Handling Interface" 
                className="w-full h-auto max-h-72 object-contain rounded-xs bg-platinum/30"
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}