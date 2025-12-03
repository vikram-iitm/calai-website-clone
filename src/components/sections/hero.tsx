"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center max-w-screen-xl mx-auto px-5 xl:px-0 gap-12">
      <div className="flex flex-col gap-4 w-fit mx-auto lg:mx-0 p-5 sm:p-0 -mt-10 order-2 lg:order-1">
        <div className="flex items-center h-[42.5px] border border-[rgba(198,198,198,0.56)] rounded-full px-4 py-2 gap-2 w-fit bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="font-medium text-xs sm:text-sm text-cal-text-primary">
              🎙️ Always Listening
            </span>
          </div>
        </div>

        <h1 className="text-[52px] font-bold leading-tight text-cal-text-primary">
          Meet AltSelf
          <br />
          <span className="font-medium">
            Your Intelligent
            <br />
            Voice Companion
          </span>
        </h1>

        <p className="text-base font-normal opacity-60 max-w-[510px] text-cal-text-secondary">
          Experience a truly intelligent AI assistant that understands context, remembers your preferences, and executes complex tasks—all through natural conversation. Just speak, and AltSelf handles the rest.
        </p>

        {/* Voice command examples */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2 text-sm text-cal-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="italic">"Book me an Uber to the airport at 6 AM"</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-cal-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
            <span className="italic">"Schedule a team meeting for tomorrow afternoon"</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-cal-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
            <span className="italic">"What's on my agenda today?"</span>
          </div>
        </div>

        <div className="flex justify-center sm:justify-start mt-2">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Clean Phone Mockup with Floating Elements */}
      <div className="order-1 lg:order-2 relative flex items-center justify-center h-[600px] w-full">
        {/* Subtle background gradient circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 rounded-full blur-3xl" />
          <motion.div
            className="absolute w-[400px] h-[400px] bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Central Phone Mockup */}
        <div className="relative z-10 w-[280px] h-[560px] bg-gradient-to-br from-gray-900 to-black rounded-[48px] shadow-2xl p-3 border-4 border-gray-800">
          {/* Phone screen */}
          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-[38px] overflow-hidden relative flex flex-col items-center justify-center p-6">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6">
              <span className="text-xs font-semibold text-gray-800">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-3 border border-gray-800 rounded-sm" />
              </div>
            </div>

            {/* App header */}
            <div className="absolute top-12 left-0 right-0 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                <span className="text-sm font-semibold text-gray-900">Gen Ai</span>
              </div>
              <div className="w-6 h-6 flex flex-col justify-center gap-0.5">
                <div className="w-1 h-1 bg-gray-800 rounded-full" />
                <div className="w-1 h-1 bg-gray-800 rounded-full" />
                <div className="w-1 h-1 bg-gray-800 rounded-full" />
              </div>
            </div>

            {/* Central voice indicator */}
            <motion.div
              className="w-48 h-48 rounded-full bg-gradient-to-br from-white via-purple-100 to-blue-100 flex items-center justify-center shadow-xl relative"
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(139, 92, 246, 0.3)",
                  "0 20px 80px rgba(59, 130, 246, 0.4)",
                  "0 20px 60px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-center px-6">
                <p className="text-xs font-medium text-gray-700 mb-2">Hi John</p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  It is easy and quick to setup custom chat.
                </p>
              </div>
              {/* Animated audio wave icon */}
              <motion.div
                className="absolute bottom-6 flex gap-1 items-end"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-1 bg-purple-500 rounded-full"
                  animate={{ height: [8, 16, 8] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-1 bg-blue-500 rounded-full"
                  animate={{ height: [12, 20, 12] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
                <motion.div
                  className="w-1 bg-purple-500 rounded-full"
                  animate={{ height: [8, 16, 8] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
              </motion.div>
            </motion.div>

            {/* Bottom action buttons */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-2 text-xs text-gray-600">
              <div className="flex-1 text-center py-2 bg-white/50 rounded-lg backdrop-blur-sm">Track my progress</div>
              <div className="flex-1 text-center py-2 bg-white/50 rounded-lg backdrop-blur-sm">Brainstorm</div>
              <div className="flex-1 text-center py-2 bg-white/50 rounded-lg backdrop-blur-sm">Gro...</div>
            </div>
          </div>

          {/* Phone notch */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />
        </div>

        {/* Floating chat bubbles with avatars */}
        <motion.div
          className="absolute top-16 left-8 lg:left-16 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-gray-100"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white text-xs font-semibold">👤</div>
          </div>
          <div className="text-xs max-w-[100px]">
            <p className="font-medium text-gray-900">Please create</p>
            <p className="text-gray-600">portrait 🎨</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-20 right-8 lg:right-16 w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-pink-600 shadow-lg border-4 border-white overflow-hidden"
          animate={{
            y: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white text-xl">🐶</div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-12 lg:left-20 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg border-4 border-white overflow-hidden"
          animate={{
            y: [0, 15, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white text-xl">🏙️</div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-12 lg:right-20 bg-white rounded-2xl shadow-lg p-3 border border-gray-100"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 overflow-hidden flex items-center justify-center text-white text-xs font-semibold">
              👥
            </div>
            <div className="text-xs max-w-[100px]">
              <p className="font-medium text-gray-900">Geni Thanks</p>
              <p className="text-gray-600">for helping ❤️</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative curved lines connecting elements */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 100 150 Q 200 100 300 300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 500 150 Q 400 200 300 300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </main>
  );
};

export default HeroSection;