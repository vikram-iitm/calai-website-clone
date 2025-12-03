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
    question: "How does Cal AI work?",
    answer: "Cal AI uses advanced artificial intelligence to analyze photos of your meals and automatically calculate nutritional information including calories, macros, and portion sizes. Simply snap a picture of your food, and our AI does the rest!"
  },
  {
    id: "item-2",
    question: "Is Cal AI accurate?",
    answer: "Yes! Our AI has been trained on millions of food images and nutritional databases to provide highly accurate calorie and macro estimates. While no tracking method is 100% perfect, Cal AI delivers results comparable to manual tracking but in a fraction of the time."
  },
  {
    id: "item-3",
    question: "What integrations does Cal AI support?",
    answer: "Cal AI integrates seamlessly with popular fitness apps and services including Apple Health, Google Fit, MyFitnessPal, Strava, and many more. Sync your data effortlessly across all your favorite health and fitness platforms."
  },
  {
    id: "item-4",
    question: "How much does Cal AI cost?",
    answer: "Cal AI offers a free plan with basic features to get you started. Premium plans unlock unlimited scans, advanced analytics, meal planning features, and priority support. Download the app to see all pricing options and choose what works best for you."
  },
  {
    id: "item-5",
    question: "Can I track my meals without taking photos?",
    answer: "Absolutely! While our photo scanning is our signature feature, you can also manually log meals, search our extensive food database, or scan barcodes. Cal AI is flexible to fit your tracking style."
  },
  {
    id: "item-6",
    question: "Is my data private and secure?",
    answer: "Your privacy is our top priority. All your personal data and photos are encrypted and stored securely. We never share your information with third parties without your explicit consent. You can delete your data at any time."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#FFFFF0] to-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl/[1.2] md:text-[48px] font-medium text-[var(--cal-text-primary)] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-lg text-[var(--cal-text-muted)] mb-16 max-w-2xl mx-auto">
          Got questions? We've got answers. Find everything you need to know about Cal AI.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-white rounded-2xl px-6 border border-[var(--cal-border-light)] shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg text-[var(--cal-text-primary)] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--cal-text-secondary)] leading-relaxed">
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
