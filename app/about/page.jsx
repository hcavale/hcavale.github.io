'use client';

import React from 'react';
import Link from 'next/link';

const getImg = (path) => path;

export default function About() {
  return (
    <div className="min-h-screen bg-platinum text-ink font-sans antialiased selection:bg-oxford selection:text-platinum pb-32">
      
      {/* NAVIGATION HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={getImg('/favicon.png')} 
            alt="Harsheta Cavale Logo" 
            className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-semibold text-oxford tracking-tight text-base group-hover:text-bluebell transition-colors">
            HC
          </span>
        </Link>

        <nav className="flex items-center gap-6 md:gap-10 font-sans text-sm md:text-base text-ink/80 tracking-wide">
          <Link href="/" className="hover:text-oxford transition-colors duration-200">
            Home
          </Link>
          <Link href="/#work" className="hover:text-oxford transition-colors duration-200">
            Case Studies
          </Link>
          <Link href="/about" className="text-oxford font-medium border-b border-oxford pb-0.5">
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

      {/* MAIN ABOUT CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-sm text-ink/70 font-sans tracking-wide">
              Hello! Nice to meet you.
            </span>

            <h1 className="text-3xl md:text-5xl font-normal tracking-tight text-oxford leading-tight">
              I’m Harsheta, a lead product and interaction designer.
            </h1>

            <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed font-light">
              <p>
              Backed by a background in Computer Science, I design high-impact user experiences for complex, technical ecosystems—including life sciences, cloud architecture, and embedded hardware.
              </p>

              <p>
              Currently leading flagship UX initiatives at Emerson Process Management, I translate complex backend engineering constraints into intuitive, operator-first workflows. I specialize in bridging engineering and design, standardizing application interoperability, and embedding AI tools like Claude Design and Figma Make directly into the product lifecycle.
              </p>

              <p>
                Outside of design, I enjoy traveling to new places, hiking outdoors, and embroidering.
              </p>

              <p className="pt-2 font-normal text-oxford">
                I would love to connect with you!
              </p>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-oxford text-platinum rounded-sm hover:bg-bluebell transition-all duration-200 font-medium flex items-center gap-2 shadow-xs"
              >
                <span>View LinkedIn</span>
                <span className="text-sm">→</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white border border-oxford/20 text-oxford rounded-sm hover:bg-oxford/5 hover:border-oxford/40 transition-all duration-200 font-medium flex items-center gap-2"
              >
                <span>Download Resume</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: PORTRAIT PHOTO */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-oxford/5 border border-oxford/10 shadow-sm">
              <img 
                src={getImg('/images/about-portrait.jpg')} 
                alt="Harsheta Cavale" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}