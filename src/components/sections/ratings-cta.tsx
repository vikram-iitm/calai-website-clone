import Image from "next/image";
import { Star, Apple, Play } from "lucide-react";

const RatingsCta = () => {
    return (
        <section className="py-16 md:py-32">
            <div className="container mx-auto text-center">
                <div className="flex justify-center gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-7 w-7 text-yellow-400" fill="currentColor" />
                    ))}
                </div>

                <div className="relative mx-auto mt-6 w-fit">
                    <div className="absolute -left-36 top-1/2 hidden -translate-y-1/2 lg:block">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/svgs/wreath-2.svg"
                            alt=""
                            width={100}
                            height={100}
                            aria-hidden="true"
                        />
                    </div>

                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                        Over 100k 5-star ratings
                    </h2>

                    <div className="absolute -right-36 top-1/2 hidden -translate-y-1/2 -scale-x-100 lg:block">
                         <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/svgs/wreath-2.svg"
                            alt=""
                            width={100}
                            height={100}
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4 text-lg text-zinc-700">
                    <div className="flex items-center gap-2">
                        <Apple className="h-5 w-5" />
                        <p>4.8/5</p>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                        <Play className="h-5 w-5 fill-current" />
                        <p>4.7/5</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
                        Join the waitlist
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RatingsCta;