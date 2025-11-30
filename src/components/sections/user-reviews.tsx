import Image from "next/image";

type Review = {
  id: number;
  avatarSrc?: string;
  avatarInitial?: string;
  username: string;
  reviewText: string;
};

const reviewsData: Review[] = [
  {
    id: 1,
    avatarSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/review1-4.jpeg",
    username: "pree.palmer",
    reviewText: "I'm ngl i've lost 7 lbs with it doesn't need to be exact it's pretty decent"
  },
  {
    id: 2,
    avatarSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/review4-7.jpeg",
    username: "Ordinary Tony",
    reviewText: "“I’VE BEEN BULKING FOR A YEAR! STRAIGHT W APP FR” 😤😤💪"
  },
  {
    id: 3,
    avatarSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/review3-6.jpeg",
    username: "2025weightlossa...",
    reviewText: "“I love your app it helps me keep track of my food without overthinking everything and gives me a visual of my portions plus its so aesthetic 💓”"
  },
  {
    id: 4,
    avatarSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/review2-5.jpg",
    username: "Mathias",
    reviewText: "“I started to use it yesterday and im already giving it 5⭐”"
  },
  {
    id: 5,
    avatarInitial: "D",
    username: "Ms Nsofor",
    reviewText: "“For people that want to control their calories @calai.app is the app for you 🙌”"
  },
];


const ReviewCard = ({ avatarSrc, avatarInitial, username, reviewText }: Omit<Review, 'id'>) => {
  return (
    <div className="bg-[#3a3d42] rounded-2xl p-6 flex flex-col gap-4 w-full sm:w-auto sm:flex-1 sm:basis-80 max-w-sm">
      <div className="flex items-center gap-3">
        {avatarSrc ? (
          <Image src={avatarSrc} alt={username} width={40} height={40} className="rounded-full object-cover w-10 h-10 flex-shrink-0" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg font-medium">{avatarInitial}</span>
          </div>
        )}
        <p className="text-white font-semibold text-base">{username}</p>
      </div>
      <p className="text-white/80 text-sm leading-relaxed">
        {reviewText}
      </p>
    </div>
  );
};

const UserReviewsSection = () => {
  return (
    <section className="bg-[#2b2d31] py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl/[1.2] md:text-[48px] font-medium text-white mb-16">
          Thousands of users talk about us
        </h2>
        
        <div className="flex flex-wrap justify-center items-start gap-6">
          {reviewsData.map(({id, ...review}) => (
            <ReviewCard key={id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviewsSection;