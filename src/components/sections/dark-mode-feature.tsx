import Image from "next/image";

const DarkModeFeature = () => {
  return (
    <section 
      className="py-32 lg:py-64 px-4 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgb(240, 248, 255) 0%, var(--cal-bg-dark) 90%)',
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
          <span className="text-red-500 font-medium text-sm uppercase tracking-wider">
            New feature
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Dark Mode <br />
            for a sleek tracking <br />
            experience! 🌙✨
          </h2>
          <p className="text-lg text-gray-300">New features weekly :)</p>
        </div>
        <div className="relative mx-auto lg:mx-0 lg:justify-self-end">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/dark-iphone-preview-10.png"
            alt="Cal AI Dark Mode Preview"
            width={300}
            height={600}
            className="rounded-[30px] shadow-2xl transform lg:scale-110 lg:-rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default DarkModeFeature;