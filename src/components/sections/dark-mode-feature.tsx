"use client";

import Image from "next/image";

const features = [
{
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1801444-1764773784520.png?width=8000&height=8000&resize=contain",
  title: "Cab Booking",
  description: "Compare Uber and Ola prices instantly, get ETAs, and book rides with deep links",
  gradient: "from-gray-600 to-gray-800",
  apps: [
  { name: "Uber", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/download-18-1764767763515.png?width=8000&height=8000&resize=contain" },
  { name: "Ola", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ani-technologies-pvt-ltd-1764767766872.webp?width=8000&height=8000&resize=contain" }]

},
{
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/calendar-3d-icon-png-download-8817292-1764773824013.webp?width=8000&height=8000&resize=contain",
  title: "Calendar Actions",
  description: "Create, edit events and check availability with seamless Google Calendar integration",
  gradient: "from-slate-600 to-slate-800",
  apps: [
  { name: "Google Calendar", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1725636648368_d0b4f2eca0834b833cb6_512-1764767900388.png?width=8000&height=8000&resize=contain" }]

},
{
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/music-3d-icon-png-download-12454587-1764773218972.webp?width=8000&height=8000&resize=contain",
  title: "Spotify Control",
  description: "Play, pause, skip tracks, and control your music with simple voice commands",
  gradient: "from-zinc-600 to-zinc-800",
  apps: [
  { name: "Spotify", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/31B2Nyzd8XL._h1_-1764767905202.png?width=8000&height=8000&resize=contain" }]

},
{
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/5323926-1764773198164.png?width=8000&height=8000&resize=contain",
  title: "Navigation",
  description: "Smart routing with Google Maps for accurate turn-by-turn directions",
  gradient: "from-gray-700 to-gray-900",
  apps: [
  { name: "Google Maps", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/google-maps-app-icon-colorful-pin-marker-18be714f-20251203131449.jpg" }]

},
{
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/9098495-1764773198240.png?width=8000&height=8000&resize=contain",
  title: "Weather & Time",
  description: "Get real-time weather updates and timezone information for any location",
  gradient: "from-slate-700 to-slate-900",
  apps: [
  { name: "OpenWeather", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a974e5ea-fdb8-47ff-8492-3699a34ab4d8/generated_images/openweather-app-icon-logo-orange-and-blu-d7999fbc-20251203131449.jpg" }]

},
{
  icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/134914-1764773198075.png?width=8000&height=8000&resize=contain",
  title: "General Knowledge",
  description: "Ask anything and receive instant, accurate AI-powered answers",
  gradient: "from-zinc-700 to-zinc-900",
  apps: [
  { name: "OpenAI", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/images-3-1764767909601.png?width=8000&height=8000&resize=contain" }]

}];


export default function DarkModeFeature() {
  return (
    <section
      id="capabilities"
      className="py-32 lg:py-64 px-4 overflow-hidden !w-full !h-[1210px]">

      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-700">
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
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden hover:bg-gradient-to-br hover:from-gray-900 hover:to-black hover:border-gray-700/50 hover:shadow-2xl hover:shadow-black/40">

                {/* Animated gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-700`}>
                    <div className="w-full h-full rounded-2xl bg-gray-900 group-hover:bg-white flex items-center justify-center transition-colors duration-700 p-2">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain" />

                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-cal-text-primary group-hover:text-white mb-3 relative transition-colors duration-700">
                  {feature.title}
                </h3>
                <p className="text-sm text-cal-text-secondary group-hover:text-gray-300 leading-relaxed mb-8 relative transition-colors duration-700">
                  {feature.description}
                </p>

                {/* App Icons */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50 group-hover:border-gray-700/50 relative transition-colors duration-700">
                  {feature.apps.map((app, appIndex) =>
                  <div key={appIndex} className="flex items-center gap-2.5 group/app">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-md ring-1 ring-gray-200/80 group-hover:ring-white/20 group-hover/app:ring-2 group-hover/app:ring-white/40 group-hover/app:shadow-lg transition-all duration-700">
                        <Image
                        src={app.logo}
                        alt={app.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover" />

                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-white group-hover/app:text-white transition-colors duration-700">
                        {app.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}