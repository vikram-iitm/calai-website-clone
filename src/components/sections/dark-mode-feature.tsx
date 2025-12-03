"use client";

import { Car, Calendar, Music, MapPin, CloudSun, MessageSquare } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Car,
    title: "Cab Booking",
    description: "Compare Uber and Ola prices instantly, get ETAs, and book rides with deep links",
    apps: [
      { name: "Uber", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/uber-app-icon-logo-black-square-with-whi-181e821f-20251203131448.jpg" },
      { name: "Ola", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/ola-cabs-app-icon-logo-green-and-white-c-d3340711-20251203131449.jpg" }
    ]
  },
  {
    icon: Calendar,
    title: "Calendar Actions",
    description: "Create, edit events and check availability with seamless Google Calendar integration",
    apps: [
      { name: "Google Calendar", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/google-calendar-app-icon-blue-square-wit-05a742ca-20251203131450.jpg" }
    ]
  },
  {
    icon: Music,
    title: "Spotify Control",
    description: "Play, pause, skip tracks, and control your music with simple voice commands",
    apps: [
      { name: "Spotify", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/spotify-app-icon-logo-bright-green-circu-b1496455-20251203131449.jpg" }
    ]
  },
  {
    icon: MapPin,
    title: "Navigation",
    description: "Smart routing with Google Maps for accurate turn-by-turn directions",
    apps: [
      { name: "Google Maps", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/google-maps-app-icon-colorful-pin-marker-18be714f-20251203131449.jpg" }
    ]
  },
  {
    icon: CloudSun,
    title: "Weather & Time",
    description: "Get real-time weather updates and timezone information for any location",
    apps: [
      { name: "OpenWeather", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/openweather-app-icon-logo-orange-and-blu-d7999fbc-20251203131449.jpg" }
    ]
  },
  {
    icon: MessageSquare,
    title: "General Knowledge",
    description: "Ask anything and receive instant, accurate AI-powered answers",
    apps: [
      { name: "OpenAI", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/openai-app-icon-logo-black-square-with-t-abf6733a-20251203131449.jpg" }
    ]
  }
];

export default function DarkModeFeature() {
  return (
    <section 
      className="py-32 lg:py-64 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F0F8FF 0%, #FFFFF0 50%, #FFE4E1 100%)'
      }}
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
                className="group bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <Icon className="w-7 h-7 text-gray-700" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-cal-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-cal-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* App Icons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {feature.apps.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center gap-2 group/app">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-sm ring-1 ring-gray-200 group-hover/app:ring-gray-300 transition-all">
                        <Image 
                          src={app.logo} 
                          alt={app.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600 group-hover/app:text-gray-900 transition-colors">
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