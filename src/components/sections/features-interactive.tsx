"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Book Rides Instantly",
    description: "Simply say your route and AltSelf compares Uber and Ola prices with ETAs. Tap to open your preferred app with everything pre-filled—pickup, drop-off, and route ready.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/UBER-1764765713933.png?width=8000&height=8000&resize=contain",
    alt: "Cab booking feature preview",
  },
  {
    id: 2,
    title: "Navigate Anywhere with Ease",
    description: "Tell AltSelf where you want to go, and it finds the perfect match. Opens Google Maps instantly with your route ready for turn-by-turn navigation.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Navigation-2-5-1764765725984.png?width=8000&height=8000&resize=contain",
    alt: "Navigation feature preview",
  },
  {
    id: 3,
    title: "Manage Your Calendar Seamlessly",
    description: "Create, edit, and cancel meetings on Google Calendar with simple voice or text commands. AltSelf checks your availability and handles invites automatically.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Google-Calender-1-1-1764765720407.png?width=8000&height=8000&resize=contain",
    alt: "Calendar management preview",
  },
  {
    id: 4,
    title: "Stay Connected with Voice Calls",
    description: "Just say the name or number, and AltSelf searches your Google Contacts to open the dialer with everything ready. Making calls has never been easier.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Calling-3-1-1764765707145.png?width=8000&height=8000&resize=contain",
    alt: "Voice calling feature preview",
  },
];

const FeaturesInteractive = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-4">
      <h2 className="text-center text-4xl mt-36 lg:text-[48px] font-medium mb-12 lg:mb-16">
        What does AltSelf include?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="relative mx-auto lg:mx-0">
          <Image
            key={activeIndex}
            src={features[activeIndex].imageSrc}
            alt={features[activeIndex].alt}
            width={350}
            height={758}
            priority
            className="w-[300px] lg:w-[350px] h-auto transition-opacity duration-300 ease-in-out mx-auto"
          />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to feature: ${feature.title}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "scale-105 border-black bg-gray-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base opacity-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesInteractive;