"use client";

import Image from "next/image";
import { Sparkles, Image as ImageIcon, Bot } from "lucide-react";

const AiInteractionShowcase = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Writing Assistant",
      description: "Transform your ideas into polished content with AI-powered writing assistance.",
      benefits: [
        "Get instant responses",
        "Maintain grammar and tone",
        "Write faster with completions"
      ]
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Image Generation Tool",
      description: "Create stunning visuals instantly with AI-powered image generation technology.",
      benefits: [
        "Brand-ready outputs",
        "Multiple styles and layouts",
        "Quick image-to-canvas"
      ]
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Custom Bot Builder",
      description: "Build intelligent chatbots tailored to your needs without any coding required.",
      benefits: [
        "No coding required",
        "Build your bots",
        "Works with Slack & Chat"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.02] border border-gray-100"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6 text-gray-700">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-cal-text-primary mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-cal-text-secondary opacity-70 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2.5">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-cal-text-secondary"
                  >
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiInteractionShowcase;