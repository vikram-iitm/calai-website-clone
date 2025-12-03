"use client";

import Image from 'next/image';
import { useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Smart Calling',
    description: 'Call anyone by just saying their name—SAM handles contact access seamlessly',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Calling-3-1-1764763869705.png',
  },
  {
    id: 2,
    title: 'Navigation',
    description: 'Find nearby places and get instant directions with integrated maps',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Navigation-2-5-1764763881187.png',
  },
  {
    id: 3,
    title: 'Calendar Integration',
    description: 'Add meetings to Google Calendar with voice commands and smart reminders',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Google-Calender-1-1-1764763934832.png',
  },
  {
    id: 4,
    title: 'Ride Booking',
    description: 'Compare Uber and Ola prices, book rides hands-free with location detection',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/UBER-1764764012630.png',
  },
];

const TestimonialsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <h2 className="text-center text-[48px] font-medium sm:mt-52 mt-24 text-cal-text-primary px-4">
        Loved by users worldwide 🌟
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mt-40 px-4">
        {/* iPhone Mockup with Image */}
        <div className="relative mx-auto lg:mx-0">
          <div className="relative w-full max-w-[300px] lg:max-w-[350px] mx-auto">
            {/* iPhone Frame */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-black">
              <Image
                key={activeIndex}
                src={features[activeIndex].imageSrc}
                alt={features[activeIndex].title}
                width={350}
                height={700}
                className="w-full h-auto object-cover transition-opacity duration-300"
              />
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-gray-800 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`View ${feature.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Feature Cards */}
        <div className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-105 border-black bg-gray-100 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-md'
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-cal-text-primary">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-cal-text-muted">
                {feature.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;