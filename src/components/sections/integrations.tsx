import Image from "next/image";

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Ola",
      description: "Book rides with India's leading cab service",
      logo: "🟡",
      color: "bg-yellow-50"
    },
    {
      name: "Uber",
      description: "Access global ride-hailing services",
      logo: "⚫",
      color: "bg-gray-50"
    },
    {
      name: "Google Calendar",
      description: "Manage your schedule seamlessly",
      logo: "📅",
      color: "bg-blue-50"
    },
    {
      name: "Google Maps",
      description: "Navigate anywhere with ease",
      logo: "🗺️",
      color: "bg-green-50"
    },
    {
      name: "Google Contacts",
      description: "Access your contacts instantly",
      logo: "👥",
      color: "bg-red-50"
    },
    {
      name: "Spotify",
      description: "Control your music playback",
      logo: "🎵",
      color: "bg-green-50"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0F8FF] to-white">
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-4 text-cal-text-primary">
          Seamless Integrations
        </h2>
        <p className="text-center text-lg text-cal-text-muted mb-12 max-w-2xl mx-auto">
          AltSelf connects with your favorite apps and services to make your life easier
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`${integration.color} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{integration.logo}</div>
                <div>
                  <h3 className="text-xl font-bold text-cal-text-primary mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-cal-text-muted">
                    {integration.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;