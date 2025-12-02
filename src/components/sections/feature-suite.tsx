"use client";

import { Check, Image as ImageIcon } from "lucide-react";

const features = [
  {
    title: "AI Writing Assistant",
    description: "Draft emails, messages, and documents instantly with context-aware AI.",
    bullets: [
      "Instant, polished responses",
      "Consistent tone and grammar",
      "Save hours on everyday writing",
    ],
  },
  {
    title: "Image Generation Studio",
    description: "Turn simple prompts into ready-to-use visuals for slides, posts, and campaigns.",
    bullets: [
      "On-brand, high-quality images",
      "Multiple styles and layouts",
      "Fast image-to-canvas flow",
    ],
  },
  {
    title: "Custom Workflow Bots",
    description: "Automate repetitive workflows with bots that connect to your existing tools.",
    bullets: [
      "Trigger from chat or actions",
      "Connect to email, docs, and apps",
      "24/7 execution with logs",
    ],
  },
  {
    title: "Research & Insights Copilot",
    description: "Summarise long content and extract key decisions in seconds.",
    bullets: [
      "Summarise PDFs, docs, and links",
      "Highlight risks and opportunities",
      "Generate ready-to-share briefs",
    ],
  },
  {
    title: "Meetings & Calendar Assistant",
    description: "Handle scheduling, reminders, and follow-ups automatically.",
    bullets: [
      "Smart scheduling from chat",
      "Auto-generated notes and tasks",
      "Timely follow-up nudges",
    ],
  },
  {
    title: "Data & Analytics Helper",
    description: "Ask questions about metrics and get clear answers and visuals.",
    bullets: [
      "Natural-language data queries",
      "Auto-generated charts",
      "Shareable insight snapshots",
    ],
  },
];

export default function FeatureSuite() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-widest uppercase text-cal-text-muted">
                WHAT ORCHID AI CAN DO
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-cal-text-primary leading-tight">
                Unlock the Power of Orchid AI
              </h2>
              <p className="text-base lg:text-lg text-cal-text-secondary leading-relaxed max-w-md">
                Explore a suite of AI tools designed to help you write, create, and automate everyday tasks. Mix and match features to build your perfect productivity stack.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-sm font-medium text-cal-text-primary hover:gap-2 transition-all group"
            >
              See all features 
              <span className="transition-transform">→</span>
            </a>
          </div>

          {/* Right Column - Scrollable Card Stack */}
          <div className="relative">
            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFF0] via-[#FFFFF0]/80 to-transparent z-20 pointer-events-none hidden lg:block" />
            
            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFF0] via-[#FFFFF0]/80 to-transparent z-20 pointer-events-none hidden lg:block" />

            {/* Scrollable Container */}
            <div 
              className="h-auto lg:h-[700px] overflow-y-auto snap-y snap-mandatory space-y-6 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent hover:scrollbar-thumb-black/20"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(0,0,0,0.1) transparent'
              }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="snap-start group relative rounded-[28px] p-8 lg:p-10 bg-[#E8EAF6] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6 lg:gap-8 relative z-10">
                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-5">
                      <h3 className="text-2xl lg:text-[28px] font-medium text-[#1a1a1a] leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] lg:text-[16px] text-[#4a4a4a] leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-3 pt-1">
                        {feature.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="shrink-0 rounded-full bg-[#5C6BC0] p-1.5 flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-[15px] font-normal text-[#2a2a2a]">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Simple Placeholder */}
                    <div className="w-full md:w-[200px] lg:w-[220px] shrink-0 flex items-center justify-center">
                      <div 
                        className="w-full aspect-[9/16] rounded-[20px] bg-white/40 border border-gray-200/40 shadow-sm flex flex-col items-center justify-center gap-2.5 overflow-hidden relative"
                      >
                        <ImageIcon className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                        <span className="text-[11px] font-medium text-gray-400 tracking-wide">
                          App preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}