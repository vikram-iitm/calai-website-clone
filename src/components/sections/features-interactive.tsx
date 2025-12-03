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
  alt: "Cab booking feature preview"
},
{
  id: 2,
  title: "Navigate Anywhere with Ease",
  description: "Tell AltSelf where you want to go, and it finds the perfect match. Opens Google Maps instantly with your route ready for turn-by-turn navigation.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Navigation-2-5-1764765725984.png?width=8000&height=8000&resize=contain",
  alt: "Navigation feature preview"
},
{
  id: 3,
  title: "Manage Your Calendar Seamlessly",
  description: "Create, edit, and cancel meetings on Google Calendar with simple voice or text commands. AltSelf checks your availability and handles invites automatically.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Google-Calender-1-1-1764765720407.png?width=8000&height=8000&resize=contain",
  alt: "Calendar management preview"
},
{
  id: 4,
  title: "Stay Connected with Voice Calls",
  description: "Just say the name or number, and AltSelf searches your Google Contacts to open the dialer with everything ready. Making calls has never been easier.",
  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Calling-3-1-1764765707145.png?width=8000&height=8000&resize=contain",
  alt: "Voice calling feature preview"
}];


const FeaturesInteractive = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-4 !w-full !h-[1278px]">
      <h2 className="text-center text-4xl mt-36 lg:text-[48px] font-medium mb-12 lg:mb-16">
        What does AltSelf include?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="relative mx-auto lg:mx-0 mb-12 lg:mb-0 w-full max-w-[350px]">
          <div className="relative rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden bg-white p-4 max-h-[600px] lg:max-h-[700px]">
            <Image
              key={activeIndex}
              src={features[activeIndex].imageSrc}
              alt={features[activeIndex].alt}
              width={350}
              height={758}
              priority
              className="w-full h-auto max-h-[550px] lg:max-h-[650px] object-contain transition-all duration-500 ease-out mx-auto" />

          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white px-4 py-2 rounded-full shadow-lg">
            {features.map((feature, index) =>
            <button
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
              activeIndex === index ?
              "w-8 h-3 bg-black" :
              "w-3 h-3 bg-gray-300 hover:bg-gray-400"}`
              }
              aria-label={`Go to feature: ${feature.title}`} />

            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-0">
          {features.map((feature, index) =>
          <div
            key={feature.id}
            onClick={() => setActiveIndex(index)}
            className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
            activeIndex === index ?
            "border-black bg-gray-50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] scale-[1.02]" :
            "border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.1)] hover:border-gray-300"}`
            }>

              <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default FeaturesInteractive;