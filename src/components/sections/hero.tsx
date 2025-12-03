"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Full-screen Futuristic AI Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              x: [0, 50],
              y: [0, 50],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Multi-layer backdrop glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Central AI Core with enhanced effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 80px rgba(6, 182, 212, 0.8), 0 0 120px rgba(139, 92, 246, 0.6), inset 0 0 60px rgba(236, 72, 153, 0.4)",
              "0 0 100px rgba(139, 92, 246, 0.8), 0 0 140px rgba(236, 72, 153, 0.6), inset 0 0 80px rgba(6, 182, 212, 0.4)",
              "0 0 80px rgba(236, 72, 153, 0.8), 0 0 120px rgba(6, 182, 212, 0.6), inset 0 0 60px rgba(139, 92, 246, 0.4)",
              "0 0 100px rgba(6, 182, 212, 0.8), 0 0 140px rgba(139, 92, 246, 0.6), inset 0 0 80px rgba(236, 72, 153, 0.4)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4) border-box",
              WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Core sphere */}
          <motion.div
            className="relative w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-2xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Inner holographic layer */}
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl border border-white/30"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner core with voice waves */}
            <motion.div
              className="relative w-52 h-52 rounded-full bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl flex items-center justify-center shadow-inner"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Enhanced voice wave bars */}
              <svg
                width="100"
                height="100"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <motion.rect
                  x="8"
                  y="30"
                  width="8"
                  height="20"
                  rx="4"
                  className="fill-cyan-500"
                  animate={{ 
                    height: [20, 50, 20],
                    y: [30, 15, 30],
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                  x="20"
                  y="25"
                  width="8"
                  height="30"
                  rx="4"
                  className="fill-violet-500"
                  animate={{ 
                    height: [30, 55, 30],
                    y: [25, 12.5, 25],
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
                <motion.rect
                  x="32"
                  y="15"
                  width="8"
                  height="50"
                  rx="4"
                  className="fill-fuchsia-500"
                  animate={{ 
                    height: [50, 65, 50],
                    y: [15, 7.5, 15],
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.rect
                  x="44"
                  y="20"
                  width="8"
                  height="40"
                  rx="4"
                  className="fill-purple-500"
                  animate={{ 
                    height: [40, 58, 40],
                    y: [20, 11, 20],
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.rect
                  x="56"
                  y="28"
                  width="8"
                  height="24"
                  rx="4"
                  className="fill-cyan-500"
                  animate={{ 
                    height: [24, 48, 24],
                    y: [28, 16, 28],
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced orbiting particles with trails */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-4 h-4 rounded-full top-1/2 left-1/2"
            style={{
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#8b5cf6" : "#ec4899"
              }, ${i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#d946ef" : "#f97316"})`,
              boxShadow: `0 0 20px ${
                i % 3 === 0
                  ? "rgba(6, 182, 212, 0.8)"
                  : i % 3 === 1
                  ? "rgba(139, 92, 246, 0.8)"
                  : "rgba(236, 72, 153, 0.8)"
              }`,
            }}
            animate={{
              x: [
                0,
                Math.cos((i * Math.PI * 2) / 12) * 300,
                Math.cos((i * Math.PI * 2) / 12 + Math.PI) * 300,
                0,
              ],
              y: [
                0,
                Math.sin((i * Math.PI * 2) / 12) * 300,
                Math.sin((i * Math.PI * 2) / 12 + Math.PI) * 300,
                0,
              ],
              scale: [0.8, 1.4, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Pulsing rings with enhanced colors */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2"
            style={{
              borderColor:
                i === 0
                  ? "rgba(6, 182, 212, 0.4)"
                  : i === 1
                  ? "rgba(139, 92, 246, 0.4)"
                  : i === 2
                  ? "rgba(236, 72, 153, 0.4)"
                  : "rgba(14, 165, 233, 0.4)",
            }}
            animate={{
              scale: [1, 2.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1,
            }}
          />
        ))}

        {/* Enhanced floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[15%] w-20 h-20 bg-gradient-to-br from-cyan-400/50 to-violet-600/50 backdrop-blur-md rounded-2xl shadow-lg"
          style={{
            boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-gradient-to-br from-fuchsia-400/50 to-purple-600/50 backdrop-blur-md rounded-full shadow-lg"
          style={{
            boxShadow: "0 0 40px rgba(236, 72, 153, 0.5)",
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[25%] left-[12%] w-12 h-12 bg-gradient-to-br from-violet-400/50 to-cyan-600/50 backdrop-blur-md rounded-lg shadow-lg"
          style={{
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[12%] w-10 h-10 bg-gradient-to-br from-blue-400/50 to-pink-600/50 backdrop-blur-md rounded-xl shadow-lg"
          style={{
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            rotate: [45, 135, 225, 315, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Data stream lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-0.5 rounded-full"
            style={{
              width: "120px",
              background: `linear-gradient(90deg, transparent, ${
                i % 2 === 0 ? "#06b6d4" : "#8b5cf6"
              }, transparent)`,
              top: `${20 + i * 12}%`,
              left: i % 2 === 0 ? "5%" : "auto",
              right: i % 2 === 0 ? "auto" : "5%",
            }}
            animate={{
              x: i % 2 === 0 ? [0, 400] : [0, -400],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Glassmorphic Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/10 backdrop-blur-2xl rounded-[32px] border border-white/20 shadow-2xl p-8 sm:p-12 md:p-16">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Status Badge */}
            <div className="flex items-center h-[42.5px] border border-white/30 rounded-full px-6 py-2 gap-2 bg-white/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm text-white">
                🚀 Launching Soon
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Meet AltSelf
              <br />
              <span className="font-medium bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Your Personal AI
                <br />
                Assistant
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg font-normal text-white/90 max-w-2xl">
              Manage your everyday tasks effortlessly with AltSelf. Book cabs, navigate, 
              schedule meetings, set reminders, make calls, check weather, play music, 
              and get instant answers—all with simple text or voice commands.
            </p>

            {/* CTA Button */}
            <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl mt-2">
              Join the waitlist
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default HeroSection;