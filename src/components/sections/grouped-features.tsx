const GroupedFeatures = () => {
  const featureGroups = [
    {
      title: "Mobility Services",
      icon: "🚗",
      features: [
        { name: "Cab Booking", description: "Compare Uber and Ola prices, book with deep links" },
        { name: "Navigation", description: "Navigate anywhere using Google Maps" }
      ]
    },
    {
      title: "Personal Productivity",
      icon: "📅",
      features: [
        { name: "Calendar Actions", description: "Manage your schedule and events" },
        { name: "Reminders", description: "Never forget important tasks" },
        { name: "Alarms", description: "Wake up on time, every time" },
        { name: "Timers", description: "Track time for any activity" },
        { name: "Calling", description: "Make calls via voice or contacts" }
      ]
    },
    {
      title: "Information Services",
      icon: "💡",
      features: [
        { name: "General Knowledge", description: "Get answers to any question" },
        { name: "Weather", description: "Check current weather and forecasts" },
        { name: "Time Zones", description: "Check time across different zones" },
        { name: "Calculations", description: "Perform calculations and conversions" },
        { name: "Image Q&A", description: "Ask questions about images" }
      ]
    },
    {
      title: "Media Controls",
      icon: "🎵",
      features: [
        { name: "Spotify Controls", description: "Control your music playback" },
        { name: "YouTube Lookup", description: "Find and open YouTube videos" }
      ]
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 max-w-screen-xl mx-auto px-5 xl:px-0">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 text-cal-text-primary">
        What does AltSelf include?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featureGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{group.icon}</span>
              <h3 className="text-2xl font-bold text-cal-text-primary">{group.title}</h3>
            </div>
            
            <div className="space-y-4">
              {group.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cal-text-primary">{feature.name}</h4>
                    <p className="text-sm text-cal-text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupedFeatures;