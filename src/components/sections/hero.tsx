import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center max-w-screen-xl mx-auto px-5 xl:px-0">
      <div className="flex flex-col gap-4 w-fit mx-auto lg:mx-0 p-5 sm:p-0 -mt-10 order-2 lg:order-1">
        <div className="flex items-center h-[42.5px] border border-[rgba(198,198,198,0.56)] rounded-full px-4 py-2 gap-2 w-fit bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-xs sm:text-sm text-cal-text-primary">
              🚀 Launching Soon
            </span>
          </div>
        </div>

        <h1 className="text-[52px] font-bold leading-tight text-cal-text-primary">
          Meet AltSelf
          <br />
          <span className="font-medium">
            Your Personal AI
            <br />
            Assistant
          </span>
        </h1>

        <p className="text-base font-normal opacity-60 max-w-[510px] text-cal-text-secondary">
          Manage your everyday tasks effortlessly with AltSelf. Book cabs, navigate, 
          schedule meetings, set reminders, make calls, check weather, play music, 
          and get instant answers—all with simple text or voice commands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#"
            className="block">

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/2-1764747544409.png?width=8000&height=8000&resize=contain"
              alt="Download on the App Store"
              width={135}
              height={60}
              className="object-contain !w-full !h-full !max-w-full" />

          </a>
          <a
            href="#"
            className="block">

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/googleplay-1.png"
              alt="Get it on Google Play"
              width={170}
              height={60} />

          </a>
        </div>
      </div>

      <div className="overflow-hidden sm:overflow-visible mx-auto pb-40 sm:pb-0 order-1 lg:order-2 relative flex items-center justify-center gap-8">
        {/* Left Phone - Home Screen */}
        <div className="relative">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Generated-Image-December-03-2025-1_38PM-1764749322987.png?width=8000&height=8000&resize=contain"
            alt="AltSelf app home screen"
            width={280}
            height={600}
            className="rounded-3xl shadow-2xl !w-full !h-full !max-w-full"
            priority />

        </div>

        {/* Flowing Arrow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none z-10">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 50 Q 70 20, 120 50"
              stroke="#000000"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round" />

            <path
              d="M 120 50 L 110 45 M 120 50 L 110 55"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round" />

          </svg>
        </div>

        {/* Right Phone - Navigation Screen */}
        <div className="relative">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Home-Page-Navigation-2-2-1764674039421.png?width=8000&height=8000&resize=contain"
            alt="AltSelf app navigation screen"
            width={280}
            height={600}
            className="rounded-3xl shadow-2xl" />

        </div>
      </div>
    </main>);

};

export default HeroSection;