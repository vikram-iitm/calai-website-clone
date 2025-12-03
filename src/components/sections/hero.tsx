"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center max-w-screen-xl mx-auto px-5 xl:px-0 gap-12">
      <div className="flex flex-col gap-4 w-fit mx-auto lg:mx-0 p-5 sm:p-0 -mt-10 order-2 lg:order-1">
        <div className="flex items-center h-[42.5px] border border-[rgba(198,198,198,0.56)] rounded-full px-4 py-2 gap-2 w-fit bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-xs sm:text-sm text-cal-text-primary">
              🚀 Launching Soon
            </span>
          </div>
        </div>

        <h1 className="text-[52px] font-bold leading-tight text-cal-text-primary">
          Meet AltSelf
          <br />
          <span className="font-medium">
            Your Personal AI
            <br />
            Assistant
          </span>
        </h1>

        <p className="text-base font-normal opacity-60 max-w-[510px] text-cal-text-secondary">
          Manage your everyday tasks effortlessly with AltSelf. Book cabs, navigate, 
          schedule meetings, set reminders, make calls, check weather, play music, 
          and get instant answers—all with simple text or voice commands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
            Join the waitlist
          </button>
        </div>
      </div>

      {/* Modern AI Voice Visualization */}
      <div className="order-1 lg:order-2 relative flex items-center justify-center h-[600px] w-full">
        {/* Backdrop glow effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Central AI Core */}
        <motion.div
          className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
          animate={{
            boxShadow: [
              "0 0 60px rgba(59, 130, 246, 0.5)",
              "0 0 100px rgba(168, 85, 247, 0.6)",
              "0 0 60px rgba(236, 72, 153, 0.5)",
              "0 0 100px rgba(59, 130, 246, 0.6)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner core pulse */}
          <motion.div
            className="w-48 h-48 rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Voice wave icon */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.rect
                x="12"
                y="30"
                width="6"
                height="20"
                rx="3"
                className="fill-blue-600"
                animate={{ height: [20, 40, 20] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.rect
                x="24"
                y="20"
                width="6"
                height="40"
                rx="3"
                className="fill-purple-600"
                animate={{ height: [40, 50, 40] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.rect
                x="36"
                y="10"
                width="6"
                height="60"
                rx="3"
                className="fill-pink-600"
                animate={{ height: [60, 70, 60] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.rect
                x="48"
                y="20"
                width="6"
                height="40"
                rx="3"
                className="fill-purple-600"
                animate={{ height: [40, 50, 40] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.rect
                x="60"
                y="30"
                width="6"
                height="20"
                rx="3"
                className="fill-blue-600"
                animate={{ height: [20, 40, 20] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-600"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [
                0,
                Math.cos((i * Math.PI) / 4) * 180,
                Math.cos((i * Math.PI) / 4 + Math.PI) * 180,
                0,
              ],
              y: [
                0,
                Math.sin((i * Math.PI) / 4) * 180,
                Math.sin((i * Math.PI) / 4 + Math.PI) * 180,
                0,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Floating rings */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-pink-400/30 rounded-full"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/40 to-purple-600/40 backdrop-blur-sm rounded-2xl rotate-12"
          animate={{
            y: [0, -20, 0],
            rotate: [12, 24, 12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-pink-400/40 to-purple-600/40 backdrop-blur-sm rounded-full"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 left-24 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-blue-600/40 backdrop-blur-sm rounded-lg rotate-45"
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </main>
  );
};

export default HeroSection;