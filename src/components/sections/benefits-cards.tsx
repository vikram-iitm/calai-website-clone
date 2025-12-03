import React from 'react';

const TimeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IntegrationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const VoiceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const benefitsData = [
  {
    icon: <TimeIcon />,
    title: "Save Time Every Day",
    description: "AltSelf handles your routine tasks instantly—from booking cabs to scheduling meetings. Spend less time managing, more time doing what matters.",
  },
  {
    icon: <IntegrationIcon />,
    title: "Seamless App Integration",
    description: "Connect with Uber, Ola, Google Maps, Calendar, Spotify, and more. AltSelf brings all your favorite apps together in one intelligent assistant.",
  },
  {
    icon: <VoiceIcon />,
    title: "Natural Voice & Text Control",
    description: "Just speak or type naturally. No complex commands or menus. AltSelf understands you and gets things done instantly with voice, text, or images.",
  },
];

const BenefitsCards = () => {
  return (
    <section>
      <h2 className="text-center text-[48px] font-medium mt-40">Why choose AltSelf?</h2>
      <div>
        <p className="text-center text-lg text-[#262626] font-normal mb-20">
          Your personal AI assistant that makes everyday tasks effortless.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col p-8 rounded-3xl bg-white">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-gray-700">
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