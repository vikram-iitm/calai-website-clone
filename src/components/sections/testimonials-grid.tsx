import Image from 'next/image';

const testimonials = [
  {
    name: 'Jeremiah Jones',
    quote: 'Make a healthier choice for your latenight snack and use the Cal AI app to track your calories',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jeremiah-3.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DI4l3TiPJUQ/',
    ariaLabel: 'View Jeremiah Jones testimonial video',
  },
  {
    name: 'Kadin Kerns',
    quote: 'Looking good as usual and my calories are too with Cal AI 🔥',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked2-4.png',
    instagramUrl: 'https://www.instagram.com/reel/DGrQlrhOXjy/',
    ariaLabel: 'View Kadin Kerns testimonial video',
  },
  {
    name: 'Dawson Gibbs',
    quote: "Track with Cal AI app, if you're not tracking your calories while going for your goals then you're doing it all wrong.",
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/dawson-5.png',
    instagramUrl: 'https://www.instagram.com/reel/DDNnKQGSLe4/',
    ariaLabel: 'View Dawson Gibbs testimonial video',
  },
  {
    name: 'Brian Wallack',
    quote: 'Cal AI can literally track anything 🤯',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked3-6.png',
    instagramUrl: '#',
    ariaLabel: 'View Brian Wallack testimonial video',
  },
  {
    name: 'Hussein Farhat',
    quote: "If you're tracking your calories and macros correctly with Cal AI, you can get away with eating almost anything and still get in shape as long as it matches your daily goals.",
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked1-7.png',
    instagramUrl: 'https://www.instagram.com/reel/DIojs7AszIX/',
    ariaLabel: 'View Hussein Farhat testimonial video',
  },
  {
    name: 'Alex Eubank',
    quote: "Cal AI is literally the best calorie tracker. Fastest and most accurate I've ever used.",
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked4-8.png',
    instagramUrl: 'https://www.instagram.com/reel/DHPBOhAJZ5C/',
    ariaLabel: 'View Alex Eubank testimonial video',
  },
];

type TestimonialCardProps = (typeof testimonials)[0];

const TestimonialCard = ({ name, quote, imageSrc, instagramUrl, ariaLabel }: TestimonialCardProps) => (
  <a href={instagramUrl} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
    <div className="relative rounded-3xl overflow-hidden shadow-lg group">
      <Image
        src={imageSrc}
        alt={`${name} testimonial`}
        width={400} // Intrinsic width for aspect ratio
        height={550} // Intrinsic height for aspect ratio
        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 m-4 p-6 bg-black/20 backdrop-blur-md text-white border border-[rgba(207,207,207,0.47)] rounded-xl">
        <p className="text-4xl font-bold text-blue-400 -mt-2 -mb-5">
          "
        </p>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm font-light opacity-90">{quote}</p>
      </div>
    </div>
  </a>
);

const TestimonialsGrid = () => {
  const firstColTestimonials = testimonials.slice(0, 2);
  const secondColTestimonials = testimonials.slice(2, 4);
  const thirdColTestimonials = testimonials.slice(4, 6);

  return (
    <section>
      <h2 className="text-center text-[48px] font-medium sm:mt-52 mt-24 text-cal-text-primary px-4">
        Used by your favorite fitness influencers 👀
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[21px] mt-40 px-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-[21px]">
          {firstColTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <div className="flex flex-col gap-[21px] md:-translate-y-20">
          {secondColTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <div className="flex flex-col gap-[21px]">
          {thirdColTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;