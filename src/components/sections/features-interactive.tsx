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
    title: "Track Your Food With Just a Picture",
    description: "Snap a photo with Cal AI, and your phone's depth sensor calculates food volume. Our AI then analyzes and breaks down your meal to determine calories, protein, carbs, and fat.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/analyzed-9.png",
    alt: "Track Your Food With Just a Picture preview",
  },
  {
    id: 2,
    title: "Search Our Database of over 1 million foods",
    description: "Quickly find and log foods from our extensive database. Search by name, brand, or scan barcodes for instant nutritional information.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/analyzed-9.png",
    alt: "Search Our Database preview",
  },
  {
    id: 3,
    title: "Complete Progress Tracking and AI suggestions",
    description: "Monitor your weight, measurements, and nutrition goals. Get personalized AI suggestions to stay on track and optimize your diet.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/analyzed-9.png",
    alt: "Complete Progress Tracking preview",
  },
  {
    id: 4,
    title: "Keep track of your water and daily exercise",
    description: "Log your water intake and daily exercise effortlessly. Cal AI helps you stay hydrated and active, integrating seamlessly with your fitness routine.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/analyzed-9.png",
    alt: "Track Water and Exercise preview",
  },
];

const FeaturesInteractive = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-4">
      <h2 className="text-center text-4xl mt-36 lg:text-[48px] font-medium mb-12 lg:mb-16">
        What does Cal AI include?
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