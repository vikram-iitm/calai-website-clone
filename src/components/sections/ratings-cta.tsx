"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { useState } from "react";

const RatingsCta = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <section className="py-12 md:py-16 lg:py-32 px-4">
            <div className="container mx-auto text-center">
                <div className="flex justify-center gap-1.5 md:gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 md:h-7 md:w-7 text-yellow-400" fill="currentColor" />
                    ))}
                </div>

                <div className="relative mx-auto mt-4 md:mt-6 w-fit px-4">
                    <div className="absolute -left-20 md:-left-28 lg:-left-36 top-1/2 hidden md:block -translate-y-1/2">
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/svgs/wreath-2.svg"
                            alt=""
                            width={80}
                            height={80}
                            className="md:w-[100px] md:h-[100px]"
                            aria-hidden="true"
                        />
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                        Be Among the First to Experience AltSelf
                    </h2>

                    <div className="absolute -right-20 md:-right-28 lg:-right-36 top-1/2 hidden md:block -translate-y-1/2 -scale-x-100">
                         <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/svgs/wreath-2.svg"
                            alt=""
                            width={80}
                            height={80}
                            className="md:w-[100px] md:h-[100px]"
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <p className="mt-4 md:mt-6 text-base md:text-lg text-[var(--cal-text-muted)] max-w-2xl mx-auto px-4">
                    Join our exclusive waitlist and get early access when we launch. Be part of the AI assistant revolution.
                </p>

                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
                    <Button 
                        size="lg" 
                        className="bg-black text-white hover:bg-black/90 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-xl w-full sm:w-auto"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Join the Waitlist
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="border-2 border-black text-black hover:bg-black hover:text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-xl w-full sm:w-auto"
                    >
                        Learn More
                    </Button>
                </div>

                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs md:text-sm text-[var(--cal-text-muted)]">
                    <span className="flex items-center gap-1">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Limited spots available
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>Launching soon</span>
                </div>
            </div>

            <WaitlistDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </section>
    );
};

export default RatingsCta;