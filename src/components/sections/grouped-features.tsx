"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Car, Calendar, Cloud, Music, MapPin, Bell, Phone, Clock, Sun, Calculator, Image as ImageIcon, Youtube } from "lucide-react";

const featureGroups = [
  {
    id: 1,
    title: "Mobility Services",
    description: "Get where you need to go, effortlessly",
    icon: Car,
    color: "from-blue-500 to-cyan-500",
    features: [
      { name: "Cab Booking", description: "Compare Uber/Ola fares and book instantly", icon: Car },
      { name: "Navigation", description: "Navigate anywhere with Google Maps integration", icon: MapPin },
    ],
  },
  {
    id: 2,
    title: "Personal Productivity",
    description: "Stay organized and on top of your day",
    icon: Calendar,
    color: "from-purple-500 to-pink-500",
    features: [
      { name: "Calendar Actions", description: "Manage meetings and events with ease", icon: Calendar },
      { name: "Reminders", description: "Never miss important tasks", icon: Bell },
      { name: "Alarms", description: "Set alarms with voice commands", icon: Clock },
      { name: "Timers", description: "Quick timers for any activity", icon: Clock },
      { name: "Voice Calls", description: "Make calls hands-free via contacts", icon: Phone },
    ],
  },
  {
    id: 3,
    title: "Information Services",
    description: "Get instant answers to everything",
    icon: Cloud,
    color: "from-green-500 to-teal-500",
    features: [
      { name: "General Knowledge", description: "Ask anything and get accurate answers", icon: Sun },
      { name: "Weather", description: "Real-time weather updates", icon: Cloud },
      { name: "Time Zones", description: "Check time across different zones", icon: Clock },
      { name: "Calculations", description: "Solve math problems instantly", icon: Calculator },
      { name: "Image Q&A", description: "Get answers from images", icon: ImageIcon },
    ],
  },
  {
    id: 4,
    title: "Media Controls",
    description: "Control your entertainment seamlessly",
    icon: Music,
    color: "from-orange-500 to-red-500",
    features: [
      { name: "Spotify Controls", description: "Play, pause, and skip tracks", icon: Music },
      { name: "YouTube Search", description: "Find and open videos instantly", icon: Youtube },
    ],
  },
];

const GroupedFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? featureGroups.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featureGroups.length - 1 ? 0 : prev + 1));
  };

  const currentGroup = featureGroups[currentIndex];
  const Icon = currentGroup.icon;

  return (
    <section className="py-20 lg:py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cal-text-primary mb-4">
            Powerful Features at Your Command
          </h2>
          <p className="text-lg text-cal-text-muted max-w-2xl mx-auto">
            AltSelf brings together everything you need in one intelligent assistant
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="relative">
          {/* Feature Group Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-cal-border-light transition-all duration-500">
            {/* Header Section with Gradient */}
            <div className={`bg-gradient-to-r ${currentGroup.color} p-8 lg:p-12 text-white relative transition-all duration-500`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                        {currentGroup.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {currentGroup.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Previous feature group"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Next feature group"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentGroup.features.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-6 bg-cal-card-bg-alt rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-cal-border-medium"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${currentGroup.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <FeatureIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-cal-text-primary mb-2 group-hover:text-cal-text-secondary transition-colors">
                            {feature.name}
                          </h4>
                          <p className="text-cal-text-muted text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {featureGroups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-12 bg-cal-text-primary"
                    : "w-3 bg-cal-border-medium hover:bg-cal-border-light"
                }`}
                aria-label={`Go to feature group ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GroupedFeatures;