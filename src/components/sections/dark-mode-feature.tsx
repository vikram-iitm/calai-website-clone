"use client";

import { Car, Calendar, Music, MapPin, CloudSun, MessageSquare } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Car,
    title: "Cab Booking",
    description: "Compare Uber and Ola prices instantly, get ETAs, and book rides with deep links",
    gradient: "from-purple-500 to-pink-500",
    apps: [
      { name: "Uber", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/download-18-1764767763515.png?width=8000&height=8000&resize=contain" },
      { name: "Ola", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ani-technologies-pvt-ltd-1764767766872.webp?width=8000&height=8000&resize=contain" }
    ]
  },
  {
    icon: Calendar,
    title: "Calendar Actions",
    description: "Create, edit events and check availability with seamless Google Calendar integration",
    gradient: "from-blue-500 to-cyan-500",
    apps: [
      { name: "Google Calendar", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1725636648368_d0b4f2eca0834b833cb6_512-1764767900388.png?width=8000&height=8000&resize=contain" }
    ]
  },
  {
    icon: Music,
    title: "Spotify Control",
    description: "Play, pause, skip tracks, and control your music with simple voice commands",
    gradient: "from-green-500 to-emerald-500",
    apps: [
      { name: "Spotify", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/31B2Nyzd8XL._h1_-1764767905202.png?width=8000&height=8000&resize=contain" }
    ]
  },
  {
    icon: MapPin,
    title: "Navigation",
    description: "Smart routing with Google Maps for accurate turn-by-turn directions",
    gradient: "from-orange-500 to-red-500",
    apps: [
      { name: "Google Maps", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/google-maps-app-icon-colorful-pin-marker-18be714f-20251203131449.jpg" }
    ]
  },
  {
    icon: CloudSun,
    title: "Weather & Time",
    description: "Get real-time weather updates and timezone information for any location",
    gradient: "from-yellow-500 to-orange-500",
    apps: [
      { name: "OpenWeather", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/openweather-app-icon-logo-orange-and-blu-d7999fbc-20251203131449.jpg" }
    ]
  },
  {
    icon: MessageSquare,
    title: "General Knowledge",
    description: "Ask anything and receive instant, accurate AI-powered answers",
    gradient: "from-indigo-500 to-purple-500",
    apps: [
      { name: "OpenAI", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/images-3-1764767909601.png?width=8000&height=8000&resize=contain" }
    ]
  }
];

export default function DarkModeFeature() {
  return (
    <section 
      className="py-32 lg:py-64 px-4 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-cal-text-primary mb-6">
            Get more value from your assistant
          </h2>
          <p className="text-lg text-cal-text-secondary max-w-2xl mx-auto">
            Connect your favorite tools and streamline your day. AltSelf integrates with 10+ services 
            to bring everything you need into one intelligent assistant.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-gray-300/50 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />
                
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-lg shadow-gray-300/50`}>
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-cal-text-primary mb-3 relative">
                  {feature.title}
                </h3>
                <p className="text-sm text-cal-text-secondary leading-relaxed mb-8 relative">
                  {feature.description}
                </p>

                {/* App Icons */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50 relative">
                  {feature.apps.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center gap-2.5 group/app">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-md ring-1 ring-gray-200/80 group-hover/app:ring-2 group-hover/app:ring-gray-300 group-hover/app:shadow-lg transition-all duration-300">
                        <Image 
                          src={app.logo} 
                          alt={app.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover/app:text-gray-900 transition-colors">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}