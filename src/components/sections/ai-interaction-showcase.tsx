"use client";

import Image from "next/image";
import { Sparkles, Mic } from "lucide-react";

const AiInteractionShowcase = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
        {/* Background circles/ripples */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full border border-blue-200/30" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-200/20" />
          <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-200/10" />
        </div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central iPhone Mockup */}
          <div className="relative z-10">
            <div className="w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-white rounded-[40px] shadow-2xl border-8 border-gray-900 overflow-hidden relative">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
              
              {/* Phone content */}
              <div className="h-full bg-white p-6 pt-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <button className="text-gray-600">←</button>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold">Gen Ai</span>
                  </div>
                  <button className="text-gray-600">⋮</button>
                </div>

                {/* Main content area */}
                <div className="flex items-center justify-center h-[300px]">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-center px-8">
                      <p className="text-sm font-medium mb-2">Hi John</p>
                      <p className="text-xs leading-relaxed">
                        It is easy and quick to setup custom chat.
                      </p>
                      <div className="flex justify-center mt-3">
                        <Mic className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 justify-center mt-8">
                  <button className="px-4 py-2 bg-gray-100 rounded-full text-xs">
                    Track my progress
                  </button>
                  <button className="px-4 py-2 bg-gray-100 rounded-full text-xs">
                    Brainstorm
                  </button>
                  <button className="px-4 py-2 bg-gray-100 rounded-full text-xs">
                    Gra...
                  </button>
                </div>

                {/* Bottom option */}
                <div className="absolute bottom-8 left-6 right-6 flex items-center gap-2 text-xs">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Grammar correction</span>
                  <button className="ml-auto text-purple-600">🎙️</button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements around phone */}
          {/* Top left - Create portrait */}
          <div className="absolute top-16 left-[10%] lg:left-[20%] z-20 animate-[float_3s_ease-in-out_infinite]">
            <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 max-w-[180px]">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400" />
              </div>
              <p className="text-sm font-medium">
                Please create portrait 🖼️
              </p>
            </div>
            {/* Connecting line */}
            <svg className="absolute -bottom-20 left-8 w-32 h-24 stroke-cyan-300 fill-none" strokeWidth="2">
              <path d="M 0 0 Q 40 50 80 80" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Top right - Avatar with red background */}
          <div className="absolute top-20 right-[10%] lg:right-[20%] z-20 animate-[float_3s_ease-in-out_infinite_0.5s]">
            <div className="w-20 h-20 rounded-full bg-red-500 overflow-hidden shadow-lg border-4 border-white">
              <div className="w-full h-full bg-gradient-to-br from-red-400 to-pink-400" />
            </div>
            {/* Connecting line */}
            <svg className="absolute -bottom-16 right-4 w-24 h-20 stroke-cyan-300 fill-none" strokeWidth="2">
              <path d="M 20 0 Q 10 30 0 50" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Bottom left - Avatar with image */}
          <div className="absolute bottom-32 left-[8%] lg:left-[18%] z-20 animate-[float_3s_ease-in-out_infinite_1s]">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500" />
            </div>
            {/* Connecting line */}
            <svg className="absolute -top-12 left-12 w-24 h-16 stroke-cyan-300 fill-none" strokeWidth="2">
              <path d="M 0 20 Q 20 0 50 0" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Bottom right - Thanks message */}
          <div className="absolute bottom-24 right-[8%] lg:right-[18%] z-20 animate-[float_3s_ease-in-out_infinite_1.5s]">
            <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 max-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex-shrink-0" />
              <p className="text-sm font-medium">
                Geni Thanks for helping ❤️
              </p>
            </div>
            {/* Connecting line */}
            <svg className="absolute -top-16 right-8 w-28 h-20 stroke-cyan-300 fill-none" strokeWidth="2">
              <path d="M 50 20 Q 30 0 0 0" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInteractionShowcase;