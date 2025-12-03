import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DarkModeFeature = () => {
  const integrations = [
    {
      name: "Notion integration",
      description: "Work faster and smarter by integrating directly with Notion, right in the app.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png",
      link: "#"
    },
    {
      name: "Slack integration",
      description: "Work faster and smarter by integrating directly with Slack, right in the app.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png",
      link: "#"
    },
    {
      name: "Google Drive integration",
      description: "Work faster and smarter by integrating directly with Google, right in the app.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png",
      link: "#"
    },
    {
      name: "Intercom integration",
      description: "Work faster and smarter by integrating directly with Intercom, right in the app.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png",
      link: "#"
    },
    {
      name: "Jira integration",
      description: "Work faster and smarter by integrating directly with Jira, right in the app.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png",
      link: "#"
    },
    {
      name: "Dropbox integration",
      description: "Work faster and smarter by integrating directly with Dropbox, right in the app.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png",
      link: "#"
    }
  ];

  return (
    <section 
      className="py-32 lg:py-64 px-4 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgb(240, 248, 255) 0%, var(--cal-bg-dark) 90%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full border border-indigo-200">
            Integrations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Get more value from your tools
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favorite tools are just a click away.
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 bg-gray-100 rounded-xl flex items-center justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {integration.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {integration.description}
              </p>

              {/* Link */}
              <Link
                href={integration.link}
                className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors"
              >
                View integration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkModeFeature;