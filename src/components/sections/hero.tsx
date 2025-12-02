import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center max-w-screen-xl mx-auto px-5 xl:px-0">
      <div className="flex flex-col gap-4 w-fit mx-auto lg:mx-0 p-5 sm:p-0 -mt-10 order-2 lg:order-1">
        <div className="flex items-center h-[42.5px] border border-[rgba(198,198,198,0.56)] rounded-full p-1.5 pr-3 gap-2 w-fit">
          <div className="flex -space-x-5 sm:-space-x-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/used-by-1-1.png"
              alt="User avatar 1"
              width={38}
              height={38}
              className="rounded-full object-cover border-2 border-white z-10"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/used-by-2-2.png"
              alt="User avatar 2"
              width={38}
              height={38}
              className="rounded-full object-cover border-2 border-white z-20"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/used-by-3-3.png"
              alt="User avatar 3"
              width={38}
              height={38}
              className="rounded-full object-cover border-2 border-white z-30"
            />
          </div>
          <div className="font-medium text-xs sm:text-sm text-cal-text-primary">
            Loved by 5M users with ⭐ 4.9 rating
          </div>
        </div>

        <h1 className="text-[52px] font-bold leading-tight text-cal-text-primary">
          Meet Cal AI
          <br />
          <span className="font-medium">
            Track your calories
            <br />
            with just a picture
          </span>
        </h1>

        <p className="text-base font-normal opacity-60 max-w-[510px] text-cal-text-secondary">
          Meet Cal AI, the AI-powered app for easy calorie tracking. Snap a photo,
          scan a barcode, or describe your meal and get instant calorie and
          nutrient info.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616"
            className="block"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/App_Store_-iOS-Badge-Logo.wine-1764498604359.png?width=8000&height=8000&resize=contain"
              alt="Download on the App Store"
              width={170}
              height={60}
              className="h-[50px] w-auto object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.viraldevelopment.calai"
            className="block"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/googleplay-1.png"
              alt="Get it on Google Play"
              width={170}
              height={60}
            />
          </a>
        </div>
      </div>

      <div className="overflow-hidden sm:overflow-visible mx-auto pb-40 sm:pb-0 order-1 lg:order-2 relative flex items-center justify-center gap-4">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-1764674881676.webp?width=8000&height=8000&resize=contain"
          alt="SAM app scanner and nutrition results"
          width={800}
          height={600}
          className="w-full max-w-[800px] h-auto object-contain"
          priority
        />
      </div>
    </main>
  );
};

export default HeroSection;