"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "How does AltSelf work?",
    answer: "AltSelf is an intelligent voice assistant that listens to your commands and executes tasks across multiple apps. Simply speak naturally—like 'Book me an Uber to the airport' or 'Schedule a meeting tomorrow at 2 PM'—and AltSelf handles everything from comparing prices to creating calendar events. You can also use text or images for certain queries."
  },
  {
    id: "item-2",
    question: "What apps and services does AltSelf integrate with?",
    answer: "AltSelf seamlessly integrates with 10+ popular services including Uber, Ola, Google Calendar, Google Maps, Spotify, YouTube, Google Contacts, OpenWeather, and OpenAI. More integrations are being added regularly to make your daily tasks even more effortless."
  },
  {
    id: "item-3",
    question: "Is AltSelf free to use?",
    answer: "AltSelf is currently in development and we're building a waitlist for early access. Join the waitlist today to be among the first to experience the future of AI assistance. Pricing details will be announced closer to launch."
  },
  {
    id: "item-4",
    question: "What tasks can AltSelf help me with?",
    answer: "AltSelf can book cab rides, navigate routes, manage your calendar, set reminders and alarms, make phone calls, control Spotify playback, search YouTube, check weather, answer general questions, and much more. It's designed to handle your routine tasks so you can focus on what matters most."
  },
  {
    id: "item-5",
    question: "How accurate is AltSelf's voice recognition?",
    answer: "AltSelf uses advanced AI to understand natural language with high accuracy. It recognizes context, remembers your preferences, and handles complex multi-step requests. The more you use it, the better it understands your unique speaking style and needs."
  },
  {
    id: "item-6",
    question: "Is my data safe and private with AltSelf?",
    answer: "Absolutely. Your privacy is our top priority. All voice commands and personal data are encrypted and securely stored. We never share your information with third parties without your explicit consent. You have full control over your data and can delete it at any time."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#FFFFF0] to-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-[48px] font-medium text-[var(--cal-text-primary)] mb-3 md:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-base md:text-lg text-[var(--cal-text-muted)] mb-12 md:mb-16 max-w-2xl mx-auto px-4">
          Got questions? We've got answers. Find everything you need to know about AltSelf.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-xl md:rounded-2xl px-4 md:px-6 border border-[var(--cal-border-light)] shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base lg:text-lg text-[var(--cal-text-primary)] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-[var(--cal-text-secondary)] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;