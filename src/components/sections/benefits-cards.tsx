import React from 'react';

// Using path data from the scraped HTML to create consistent, custom icons.
// The design seems to be a person silhouette with a relevant symbol inside.

const PersonHeadPath = "M50 49.9999C44.6667 49.9999 33 45.6666 33 34.4999C33 23.3332 41 15.8332 50 15.8332C59 15.8332 67 23.3332 67 34.4999C67 45.6666 55.3333 49.9999 50 49.9999Z";
const PersonBodyPath = "M50 84.1668C68.3333 84.1668 83.3333 69.1668 83.3333 50.8335C83.3333 32.5002 68.3333 17.5002 50 17.5002C31.6667 17.5002 16.6667 32.5002 16.6667 50.8335C16.6667 69.1668 31.6667 84.1668 50 84.1668Z";

const TimeIcon = () => (
  <svg viewBox="10 10 80 80" className="w-10 h-10" fill="none">
    <path d={PersonHeadPath} stroke="black" strokeWidth="2.5" />
    <path d={PersonBodyPath} stroke="black" strokeWidth="2.5" />
    <path d="M50 34.1665V50.8332" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M50 50.8335H37.5" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IntegrationIcon = () => (
  <svg viewBox="10 10 80 80" className="w-10 h-10" fill="none">
    <defs>
      <linearGradient id="benefit-heart-gradient" x1="50" y1="35.8333" x2="50" y2="68.3093" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF6384" />
        <stop offset="1" stopColor="#FF93A8" />
      </linearGradient>
    </defs>
    <path d={PersonHeadPath} stroke="black" strokeWidth="2.5" />
    <path d={PersonBodyPath} stroke="black" strokeWidth="2.5" />
    <path d="M50.0001 68.3093L35.4167 54.9999C29.1667 49.25 35.4167 35.8333 50.0001 46.1281C64.5834 35.8333 70.8334 49.25 64.5834 54.9999L50.0001 68.3093Z" fill="url(#benefit-heart-gradient)" />
  </svg>
);

const EffortlessIcon = () => (
  <svg viewBox="10 10 80 80" className="w-10 h-10" fill="none">
    <path d={PersonHeadPath} stroke="black" strokeWidth="2.5" />
    <path d={PersonBodyPath} stroke="black" strokeWidth="2.5" />
    <path d="M50 67.5V34.1667" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M37.5 46.6667L50 34.1667L62.5 46.6667" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const benefitsData = [
  {
    icon: <TimeIcon />,
    title: "Free up your time",
    description: "Cal AI automatically calculates your calories, protein, carbs, and fat. You can also add your own foods and recipes. So no need to calculate calories manually.",
  },
  {
    icon: <IntegrationIcon />,
    title: "Integrate with your favorite fitness products",
    description: "Cal AI integrates with your favorite fitness products. So you can track your calories, protein, carbs, fat AND exercises.",
  },
  {
    icon: <EffortlessIcon />,
    title: "Lose weight effortlessly",
    description: "Snap a photo with Cal AI, and your phone's depth sensor calculates food volume. Our AI then analyzes and breaks down your meal to determine calories, protein, carbs, and fat.",
  },
];

const BenefitsCards = () => {
  return (
    <section>
      <h2 className="text-center text-[48px] font-medium mt-40">Why choose Cal AI?</h2>
      <div>
        <p className="text-center text-lg text-[#262626] font-normal mb-20">
          Cal AI is the most advanced calorie tracker.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col p-8 rounded-3xl bg-white">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-sm text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;