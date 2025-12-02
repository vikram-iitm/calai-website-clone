"use client";

import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI Writing Assistant",
    description: "Draft emails, messages, and documents instantly with context-aware AI.",
    bullets: [
      "Instant, polished responses",
      "Consistent tone and grammar",
      "Save hours on everyday writing",
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/iphone-15-pro-screen-mockup-showing-an-a-f030a65f-20251202105401.jpg",
  },
  {
    title: "Image Generation Studio",
    description: "Turn simple prompts into ready-to-use visuals for slides, posts, and campaigns.",
    bullets: [
      "On-brand, high-quality images",
      "Multiple styles and layouts",
      "Fast image-to-canvas flow",
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/iphone-15-pro-screen-mockup-showing-an-a-2a245dcd-20251202105359.jpg",
  },
  {
    title: "Custom Workflow Bots",
    description: "Automate repetitive workflows with bots that connect to your existing tools.",
    bullets: [
      "Trigger from chat or actions",
      "Connect to email, docs, and apps",
      "24/7 execution with full logs",
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/iphone-15-pro-screen-mockup-showing-a-wo-04ab543a-20251202105359.jpg",
  },
  {
    title: "Research & Insights Copilot",
    description: "Summarise long content and extract key decisions in seconds.",
    bullets: [
      "Summarise PDFs, docs, and links",
      "Highlight risks and opportunities",
      "Generate ready-to-share briefs",
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/iphone-15-pro-screen-mockup-showing-a-do-7a004696-20251202105359.jpg",
  },
  {
    title: "Meetings & Calendar Assistant",
    description: "Handle scheduling, reminders, and follow-ups automatically.",
    bullets: [
      "Smart scheduling from chat",
      "Auto-generated notes and tasks",
      "Timely follow-up nudges",
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/iphone-15-pro-screen-mockup-showing-a-sm-26ab71f7-20251202105359.jpg",
  },
  {
    title: "Data & Analytics Helper",
    description: "Ask questions about your metrics and get clear answers and visuals.",
    bullets: [
      "Natural-language data queries",
      "Auto-generated charts",
      "Shareable insight snapshots",
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/iphone-15-pro-screen-mockup-showing-a-da-2705f17d-20251202105359.jpg",
  },
];

export default function FeatureSuite() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          {/* Left Column - Intro */}
          <div className="w-full lg:w-[40%] flex flex-col justify-start lg:sticky lg:top-32 h-fit">
            <div className="mb-6">
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                What Orchid AI can do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-[1.1]">
              Unlock the Power of Orchid AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Explore a suite of AI tools designed to help you write, create, and automate everyday tasks. Mix and match features to build your perfect productivity stack.
            </p>
            
            <div>
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80 transition-opacity group"
              >
                See all features 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Scrollable Cards */}
          <div className="w-full lg:w-[60%] relative">
            {/* Scroll Hints */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[var(--cal-bg-secondary)] to-transparent z-10 pointer-events-none lg:block hidden" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--cal-bg-secondary)] to-transparent z-10 pointer-events-none lg:block hidden" />

            <div className="flex flex-col gap-6 h-[800px] overflow-y-auto pr-2 lg:pr-4 pb-12 pt-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/20">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-sm rounded-[32px] p-8 border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row gap-8 items-center overflow-hidden shrink-0"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Content Left */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-sm font-medium text-primary/80">
                          <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-0.5">
                            <Check className="w-3 h-3 text-blue-600" strokeWidth={3} />
                          </div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Right */}
                  <div className="w-full md:w-[200px] lg:w-[240px] shrink-0 relative z-10">
                    <div className="relative aspect-[9/16] rounded-[24px] overflow-hidden shadow-xl border-[4px] border-white/80 rotate-3 group-hover:rotate-0 transition-transform duration-500 origin-bottom-right">
                       <Image
                        src={feature.image}
                        alt={`${feature.title} interface`}
                        fill
                        className="object-cover"
                      />
                      {/* Dynamic Island Mock */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
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