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
                  className="snap-start group relative rounded-[28px] p-6 lg:p-8 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/60 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm"
                >
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/40 pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row gap-6 lg:gap-8 relative z-10">
                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-cal-text-primary leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm lg:text-base text-cal-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2.5">
                        {feature.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <div className="mt-0.5 shrink-0 rounded-full bg-blue-500 p-0.5">
                              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium text-cal-text-primary/90">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Simple Placeholder */}
                    <div className="w-full md:w-[180px] lg:w-[200px] shrink-0">
                      <div 
                        className="aspect-[9/16] rounded-[24px] bg-gradient-to-br from-gray-100/90 via-gray-50/90 to-white/90 border border-gray-200/60 shadow-lg flex flex-col items-center justify-center gap-3 group-hover:rotate-1 transition-transform duration-500"
                      >
                        <ImageIcon className="w-10 h-10 text-gray-300" strokeWidth={1.5} />
                        <span className="text-xs font-medium text-gray-400 tracking-wide">
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