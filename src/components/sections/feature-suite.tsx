"use client";

import { Check, Image as ImageIcon } from "lucide-react";

const features = [
  {
    title: "Cab Booking",
    description: "Book rides effortlessly with Uber or Ola. Just tell AltSelf your route in plain language.",
    bullets: [
      "Compare prices from Uber and Ola",
      "Get instant ETA estimates",
      "Quick deep links to complete booking",
    ],
  },
  {
    title: "Navigation & Directions",
    description: "Navigate anywhere with ease. AltSelf finds the best routes and opens Google Maps instantly.",
    bullets: [
      "Smart destination search",
      "Turn-by-turn directions",
      "Quick access to nearby places",
    ],
  },
  {
    title: "Calendar Management",
    description: "Schedule meetings and manage your calendar seamlessly with Google Calendar integration.",
    bullets: [
      "Create and edit events instantly",
      "Check availability before booking",
      "Add invitees with ease",
    ],
  },
  {
    title: "Reminders & Alarms",
    description: "Never miss important tasks with smart reminders, alarms, and countdown timers.",
    bullets: [
      "Calendar-synced reminders",
      "Customizable alarm notifications",
      "Flexible countdown timers",
    ],
  },
  {
    title: "Voice Calling",
    description: "Make calls instantly by voice. Search your contacts or dial numbers directly.",
    bullets: [
      "Quick contact search",
      "Dial by number or name",
      "Seamless dialer integration",
    ],
  },
  {
    title: "Weather & Quick Info",
    description: "Get current weather updates and quick utilities like calculations and conversions.",
    bullets: [
      "Real-time weather for any city",
      "Unit conversions (°F↔°C)",
      "Time zone information",
    ],
  },
  {
    title: "Music & Media Control",
    description: "Control your music playback on Spotify and find videos on YouTube effortlessly.",
    bullets: [
      "Play, pause, and skip tracks",
      "Voice-controlled Spotify",
      "Quick YouTube video search",
    ],
  },
  {
    title: "AI-Powered Queries",
    description: "Ask anything in text, voice, or image. Get instant, accurate answers from AI.",
    bullets: [
      "Natural language understanding",
      "Image recognition and OCR",
      "Quick, summarized responses",
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
                WHAT ALTSELF CAN DO
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-cal-text-primary leading-tight">
                Everything You Need in One App
              </h2>
              <p className="text-base lg:text-lg text-cal-text-secondary leading-relaxed max-w-md">
                AltSelf brings together all your daily tasks—from booking rides to managing your calendar. 
                Natural input, seamless integrations, and instant actions.
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