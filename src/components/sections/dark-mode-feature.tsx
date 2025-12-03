"use client";

import { Car, Calendar, Info, Music, MapPin, Clock, Phone, CloudSun, Calculator, MessageSquare, Youtube, Camera } from "lucide-react";

const featureGroups = [
  {
    category: "Mobility Services",
    icon: Car,
    color: "bg-blue-100 text-blue-600",
    features: [
      {
        icon: Car,
        title: "Cab Booking",
        description: "Compare Uber and Ola prices, get instant ETAs, and complete bookings with deep links"
      },
      {
        icon: MapPin,
        title: "Navigation",
        description: "Smart routing with Google Maps integration for turn-by-turn directions"
      }
    ]
  },
  {
    category: "Personal Productivity",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
    features: [
      {
        icon: Calendar,
        title: "Calendar Actions",
        description: "Create, edit events and check availability with Google Calendar"
      },
      {
        icon: Clock,
        title: "Reminders & Alarms",
        description: "Set smart reminders, alarms, and countdown timers"
      },
      {
        icon: Phone,
        title: "Voice Calling",
        description: "Quick contact search and instant dialing by voice"
      }
    ]
  },
  {
    category: "Information Services",
    icon: Info,
    color: "bg-green-100 text-green-600",
    features: [
      {
        icon: MessageSquare,
        title: "General Knowledge",
        description: "Ask anything and get instant, accurate AI-powered answers"
      },
      {
        icon: CloudSun,
        title: "Weather & Time",
        description: "Real-time weather updates and timezone information"
      },
      {
        icon: Calculator,
        title: "Calculations",
        description: "Quick calculations and unit conversions (°F↔°C)"
      },
      {
        icon: Camera,
        title: "Image Q&A",
        description: "Upload images for OCR, recognition, and instant answers"
      }
    ]
  },
  {
    category: "Media Controls",
    icon: Music,
    color: "bg-red-100 text-red-600",
    features: [
      {
        icon: Music,
        title: "Spotify Control",
        description: "Play, pause, skip tracks with voice commands"
      },
      {
        icon: Youtube,
        title: "YouTube Search",
        description: "Find and open videos effortlessly"
      }
    ]
  }
];

export default function FeaturesShowcase() {
  return (
    <section 
      className="py-32 lg:py-64 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F0F8FF 0%, #FFFFF0 50%, #FFE4E1 100%)'
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs font-medium tracking-widest uppercase text-cal-text-muted mb-4">
            CAPABILITIES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-cal-text-primary mb-6">
            Everything You Need in One App
          </h2>
          <p className="text-lg text-cal-text-secondary max-w-2xl mx-auto">
            AltSelf brings together all your daily tasks with natural voice input, 
            seamless integrations, and instant actions.
          </p>
        </div>

        {/* Feature Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {featureGroups.map((group, groupIndex) => {
            const CategoryIcon = group.icon;
            return (
              <div 
                key={groupIndex}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${group.color} p-3 rounded-xl`}>
                    <CategoryIcon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-cal-text-primary">
                    {group.category}
                  </h3>
                </div>

                {/* Features List */}
                <div className="space-y-5">
                  {group.features.map((feature, featureIndex) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div 
                        key={featureIndex}
                        className="flex gap-4 group"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <FeatureIcon className="w-5 h-5 text-gray-600" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-cal-text-primary mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-cal-text-secondary leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}