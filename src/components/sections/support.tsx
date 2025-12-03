"use client";

import { useState } from "react";

const SupportSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is AltSelf?",
      answer: "AltSelf is your personal AI assistant that helps you manage everyday tasks effortlessly. From booking cabs and navigating to scheduling meetings and playing music, AltSelf handles it all with simple text or voice commands."
    },
    {
      question: "How do I get started with AltSelf?",
      answer: "Simply download the AltSelf app from the App Store or Google Play Store, create an account, and start using voice or text commands to manage your tasks. The app will guide you through the setup process."
    },
    {
      question: "Which services does AltSelf integrate with?",
      answer: "AltSelf integrates with Ola, Uber, Google Calendar, Google Maps, Google Contacts, Spotify, and YouTube, allowing you to seamlessly manage your rides, schedule, navigation, music, and more."
    },
    {
      question: "Is AltSelf available in my region?",
      answer: "AltSelf is currently available for download on iOS and Android devices. Some features like cab booking through Ola may be limited to specific regions where these services operate."
    },
    {
      question: "How does cab booking work?",
      answer: "AltSelf compares prices between Uber and Ola, then provides deep links to book your ride directly through the app of your choice. This ensures you get the best price available."
    },
    {
      question: "Is my data secure with AltSelf?",
      answer: "Yes, we take data security seriously. All your data is encrypted and processed securely. We only access the information necessary to provide our services and never share your personal data with third parties without your consent."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0F8FF]">
      <div className="max-w-4xl mx-auto px-5 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4 text-cal-text-primary">
          Support & FAQs
        </h2>
        <p className="text-center text-lg text-cal-text-muted mb-12">
          Find answers to common questions about AltSelf
        </p>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-cal-text-primary pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-cal-text-primary transition-transform flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5">
                  <p className="text-cal-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#F0F8FF] to-[#FFFFF0] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-cal-text-primary mb-3">
            Still have questions?
          </h3>
          <p className="text-cal-text-muted mb-6">
            We're here to help. Get in touch with our support team.
          </p>
          <a
            href="mailto:support@altself.com"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;