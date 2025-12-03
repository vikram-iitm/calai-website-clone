"use client";

import { useState } from "react";

interface ChatMessage {
  type: "user" | "assistant";
  content: string;
  buttons?: { text: string; action?: string }[];
}

interface Feature {
  id: number;
  title: string;
  description: string;
  messages: ChatMessage[];
}

const features: Feature[] = [
  {
    id: 1,
    title: "Calendar Integration",
    description: "Connect your Google Calendar and manage meetings with simple voice or text commands.",
    messages: [
      { type: "user", content: "Add a meeting to my calendar tomorrow at 10 AM." },
      { type: "assistant", content: "Sure!\nTo add it, I'll need permission to access your Google Calendar.\n\nWould you like to give access?" },
      { type: "assistant", content: "→ [Allow Access]  [Cancel]", buttons: [{ text: "Allow Access" }] },
      { type: "assistant", content: "Great — connected to your Google Calendar\n\nAdded \"Meeting\" for tomorrow at 10 AM.\n\nWould you like me to send you a reminder before it starts?" },
    ],
  },
  {
    id: 2,
    title: "Ride Booking",
    description: "Compare Uber and Ola prices instantly and book rides with pre-filled details.",
    messages: [
      { type: "user", content: "Book a ride to MG Road" },
      { type: "assistant", content: "Sure! Let me compare prices for you.\n\nUber: ₹180 (5 min away)\nOla: ₹165 (7 min away)\n\nWhich would you prefer?" },
      { type: "assistant", content: "→ [Uber]  [Ola]", buttons: [{ text: "Uber" }, { text: "Ola" }] },
    ],
  },
  {
    id: 3,
    title: "Navigation",
    description: "Get directions instantly with Google Maps integration for seamless navigation.",
    messages: [
      { type: "user", content: "Take me to the nearest coffee shop" },
      { type: "assistant", content: "Found 3 coffee shops nearby:\n\n1. Starbucks (0.5 km)\n2. Cafe Coffee Day (0.8 km)\n3. Blue Tokai (1.2 km)\n\nWhich one would you like directions to?" },
      { type: "assistant", content: "→ [Starbucks]  [Cafe Coffee Day]  [Blue Tokai]", buttons: [{ text: "Starbucks" }] },
    ],
  },
  {
    id: 4,
    title: "Smart Calling",
    description: "Make calls easily by searching your contacts with voice commands.",
    messages: [
      { type: "user", content: "Call Mom" },
      { type: "assistant", content: "Found contact: Mom\n📞 +91 98765 43210\n\nWould you like to call now?" },
      { type: "assistant", content: "→ [Call Now]  [Cancel]", buttons: [{ text: "Call Now" }] },
    ],
  },
];

const FeaturesInteractive = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 px-4">
      <h2 className="text-center text-4xl mt-36 lg:text-[48px] font-medium mb-12 lg:mb-16">
        Loved by users worldwide 🌟
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* iPhone Mockup with Chat Interface */}
        <div className="relative mx-auto lg:mx-0">
          <div className="w-[300px] lg:w-[350px] mx-auto">
            {/* iPhone Frame */}
            <div className="relative bg-black rounded-[40px] p-3 shadow-2xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-10"></div>
              
              {/* Screen */}
              <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 rounded-[32px] overflow-hidden h-[600px] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 pt-8">
                  <h1 className="text-xl font-semibold text-gray-800">AltSelf</h1>
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 px-4 py-2 overflow-y-auto space-y-3">
                  {features[activeIndex].messages.map((message, idx) => (
                    <div key={idx} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      {message.type === "assistant" && (
                        <div className="flex items-start gap-2 max-w-[85%]">
                          <div className="w-6 h-6 rounded-full bg-gray-700 flex-shrink-0 mt-1"></div>
                          <div>
                            <div className="text-xs font-semibold text-gray-800 mb-1">AltSelf</div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3">
                              <p className="text-sm text-gray-800 whitespace-pre-line">{message.content}</p>
                            </div>
                            {message.buttons && message.buttons.length > 0 && (
                              <div className="mt-2 flex justify-end">
                                <button className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm">
                                  {message.buttons[0].text}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {message.type === "user" && (
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl rounded-tr-none px-4 py-3 max-w-[75%]">
                          <p className="text-sm text-gray-800">{message.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white/40 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-300/60 flex items-center justify-center">
                      <span className="text-gray-700 text-lg">+</span>
                    </button>
                    <div className="flex-1 bg-gray-200/60 rounded-full px-4 py-2">
                      <p className="text-sm text-gray-500">Ask AltSelf anything</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex space-x-2">
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

        {/* Feature Cards */}
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