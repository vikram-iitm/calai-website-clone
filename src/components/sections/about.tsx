const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 max-w-screen-xl mx-auto px-5 xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-cal-text-primary">
            About AltSelf
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-cal-text-primary">Our Mission</h3>
              <p className="text-lg text-cal-text-secondary leading-relaxed">
                To empower individuals with a personal AI assistant that simplifies everyday tasks, 
                making technology more accessible and intuitive for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-cal-text-primary">Our Vision</h3>
              <p className="text-lg text-cal-text-secondary leading-relaxed">
                We envision a world where managing daily activities is effortless, allowing people 
                to focus on what truly matters—connecting with others and pursuing their passions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#F0F8FF] to-[#FFFFF0] rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-md">
                🎯
              </div>
              <div>
                <h4 className="font-bold text-lg text-cal-text-primary mb-2">Purpose-Driven</h4>
                <p className="text-cal-text-muted">
                  Built to solve real problems and enhance daily productivity
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-md">
                🚀
              </div>
              <div>
                <h4 className="font-bold text-lg text-cal-text-primary mb-2">Innovation First</h4>
                <p className="text-cal-text-muted">
                  Leveraging cutting-edge AI to deliver the best user experience
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-md">
                💙
              </div>
              <div>
                <h4 className="font-bold text-lg text-cal-text-primary mb-2">User-Centric</h4>
                <p className="text-cal-text-muted">
                  Every feature designed with user needs and feedback in mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;