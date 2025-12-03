import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    quote: 'AltSelf has completely transformed how I manage my daily routine. From booking cabs to managing my calendar, it just works.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jeremiah-3.jpg',
    instagramUrl: '#',
    ariaLabel: 'View Sarah Chen testimonial',
  },
  {
    name: 'Michael Rodriguez',
    quote: 'The voice commands are incredibly intuitive. I can book rides, check weather, and set reminders without even unlocking my phone.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked2-4.png',
    instagramUrl: '#',
    ariaLabel: 'View Michael Rodriguez testimonial',
  },
  {
    name: 'Priya Sharma',
    quote: "AltSelf's calendar integration is a game-changer. It handles all my meeting scheduling and sends perfect reminders. I'm never late anymore!",
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/dawson-5.png',
    instagramUrl: '#',
    ariaLabel: 'View Priya Sharma testimonial',
  },
  {
    name: 'James Wilson',
    quote: 'Best personal assistant app I\'ve used. The cab price comparison alone saves me so much money every month.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked3-6.png',
    instagramUrl: '#',
    ariaLabel: 'View James Wilson testimonial',
  },
  {
    name: 'Emily Thompson',
    quote: "I love how AltSelf connects everything—my calendar, contacts, music, and navigation. It's like having a smart assistant that actually understands me.",
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked1-7.png',
    instagramUrl: '#',
    ariaLabel: 'View Emily Thompson testimonial',
  },
  {
    name: 'David Kumar',
    quote: "The navigation feature is brilliant. Just tell it where to go and boom—Google Maps opens with the perfect route. So convenient!",
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/jacked4-8.png',
    instagramUrl: '#',
    ariaLabel: 'View David Kumar testimonial',
  },
];

type TestimonialCardProps = (typeof testimonials)[0];

const TestimonialCard = ({ name, quote, imageSrc, instagramUrl, ariaLabel }: TestimonialCardProps) => (
  <a href={instagramUrl} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
    <div className="relative rounded-3xl overflow-hidden shadow-lg group">
      <Image
        src={imageSrc}
        alt={`${name} testimonial`}
        width={400}
        height={550}
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
        Loved by users worldwide 🌟
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