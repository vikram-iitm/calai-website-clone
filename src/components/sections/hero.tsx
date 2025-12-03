"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { useState } from "react";
import { WaitlistDialog } from "@/components/waitlist-dialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center max-w-screen-xl mx-auto px-5 xl:px-0 gap-12">
      <div className="flex flex-col gap-4 w-fit mx-auto lg:mx-0 p-5 sm:p-0 -mt-10 order-2 lg:order-1">
        <div className="flex items-center h-[42.5px] border border-blue-500/30 rounded-full px-4 py-2 gap-2 w-fit bg-black/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} />

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

        <p className="text-base font-normal opacity-60 max-w-[510px] text-cal-text-secondary !whitespace-pre-line">Experience a truly intelligent AI assistant that understands context, remembers your preferences, and executes complex tasks, all through natural conversation. Just speak, and AltSelf handles the rest.

        </p>

        {/* Voice command examples */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2 text-sm text-cal-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="italic">"Book me an Uber to the airport at 6 AM"</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-cal-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            <span className="italic">"Schedule a team meeting for tomorrow afternoon"</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-cal-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-700"></div>
            <span className="italic">"What's on my agenda today?"</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
          <button
            onClick={() => setDialogOpen(true)}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">

            Join Waitlist
          </button>
        </div>
      </div>

      {/* Enhanced Jarvis-like AI Voice Visualization */}
      <div className="order-1 lg:order-2 relative flex items-center justify-center h-[600px] w-full">
        {/* Backdrop glow effects - Blue only */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-black/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} />


        {/* Central AI Core - Jarvis style */}
        <motion.div
          className="relative z-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-black/40 flex items-center justify-center border-2 border-blue-500/30"
          animate={{
            boxShadow: [
            "0 0 60px rgba(59, 130, 246, 0.4)",
            "0 0 100px rgba(59, 130, 246, 0.6)",
            "0 0 60px rgba(59, 130, 246, 0.4)"]

          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}>

          {/* Inner core with voice visualization */}
          <motion.div
            className="w-56 h-56 rounded-full bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-xl flex items-center justify-center relative border border-blue-500/20 shadow-2xl"
            animate={{
              scale: [1, 1.03, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}>

            {/* Voice wave visualization - centered and non-overlapping */}
            <div className="flex items-center justify-center gap-1.5">
              {[20, 35, 50, 35, 20].map((height, i) =>
              <motion.div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 to-blue-400"
                style={{ height: `${height}px` }}
                animate={{
                  height: [`${height}px`, `${height + 15}px`, `${height}px`],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }} />

              )}
            </div>

            {/* Microphone icon - positioned at bottom */}
            <motion.div
              className="absolute bottom-8 flex items-center justify-center"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}>

              <Mic className="w-8 h-8 text-blue-600" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Orbiting data points */}
        {[...Array(6)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-500"
          style={{
            top: "50%",
            left: "50%"
          }}
          animate={{
            x: [
            0,
            Math.cos(i * Math.PI / 3) * 200,
            Math.cos(i * Math.PI / 3 + Math.PI) * 200,
            0],

            y: [
            0,
            Math.sin(i * Math.PI / 3) * 200,
            Math.sin(i * Math.PI / 3 + Math.PI) * 200,
            0],

            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3
          }} />

        )}

        {/* Floating rings - Blue theme */}
        <motion.div
          className="absolute inset-0 border border-blue-500/20 rounded-full"
          animate={{
            scale: [1, 1.4],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
          }} />

        <motion.div
          className="absolute inset-0 border border-blue-600/20 rounded-full"
          animate={{
            scale: [1, 1.4],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1
          }} />


        {/* Floating command bubbles - Repositioned to avoid overlap */}
        <motion.div
          className="absolute top-12 right-12 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-blue-500/20"
          animate={{
            y: [0, -8, 0],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}>

          <p className="text-xs font-semibold text-gray-800">📅 Meeting scheduled</p>
        </motion.div>
        
        <motion.div
          className="absolute bottom-16 left-8 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-blue-500/20"
          animate={{
            y: [0, 8, 0],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}>

          <p className="text-xs font-semibold text-gray-800">🚗 Uber booked</p>
        </motion.div>

        <motion.div
          className="absolute top-32 left-12 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-blue-500/20"
          animate={{
            x: [0, -8, 0],
            y: [0, -5, 0],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}>

          <p className="text-xs font-semibold text-gray-800">☀️ 72°F Sunny</p>
        </motion.div>

        {/* Floating geometric shapes - Blue/Black theme */}
        <motion.div
          className="absolute top-24 right-24 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-black/20 backdrop-blur-sm rounded-lg rotate-12 border border-blue-500/30"
          animate={{
            y: [0, -15, 0],
            rotate: [12, 24, 12]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }} />

        <motion.div
          className="absolute bottom-24 left-20 w-10 h-10 bg-gradient-to-br from-blue-600/30 to-black/20 backdrop-blur-sm rounded-full border border-blue-500/30"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} />

        <motion.div
          className="absolute top-48 left-16 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-white/20 backdrop-blur-sm rounded-md rotate-45 border border-blue-500/30"
          animate={{
            x: [0, 12, 0],
            y: [0, -12, 0],
            rotate: [45, 90, 45]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} />


        {/* Grid lines for tech feel */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} />

      </div>

      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>);

};

export default HeroSection;