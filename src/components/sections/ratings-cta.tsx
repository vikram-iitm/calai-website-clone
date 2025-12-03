"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { useState } from "react";

const RatingsCta = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                        Be Among the First to Experience AltSelf
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

                <p className="mt-6 text-lg text-[var(--cal-text-muted)] max-w-2xl mx-auto">
                    Join our exclusive waitlist and get early access when we launch. Be part of the AI assistant revolution.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button 
                        size="lg" 
                        className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg rounded-xl"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Join the Waitlist
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-xl"
                    >
                        Learn More
                    </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[var(--cal-text-muted)]">
                    <span className="flex items-center gap-1">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Limited spots available
                    </span>
                    <span>•</span>
                    <span>Launching soon</span>
                </div>
            </div>

            <WaitlistDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </section>
    );
};

export default RatingsCta;