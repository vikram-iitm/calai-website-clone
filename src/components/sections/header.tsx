'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/20 py-5">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png"
            alt="AltSelf"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg">AltSelf</span>
        </Link>

  {/* Desktop Navigation */}
  <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
    <Link href="/" className="hover:opacity-70 transition-opacity">
      Home
    </Link>
    <Link href="/jobs" className="hover:opacity-70 transition-opacity">
      Jobs
    </Link>
    <Link href="/press" className="hover:opacity-70 transition-opacity">
      Press
    </Link>
    <Link href="/subscription" className="hover:opacity-70 transition-opacity">
      Manage Subscription
    </Link>
  </nav>

  {/* Desktop Download Buttons */}
  <div className="hidden lg:flex items-center gap-3">
    <Link 
      href="https://apps.apple.com" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Download on the App Store">
  
    <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/2-1764747312001.png?width=8000&height=8000&resize=contain"
      alt="Download on the App Store"
      width={135}
      height={60}
      className="h-[60px] w-auto object-contain"
    />
  </Link>
  <Link 
    href="https://play.google.com" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Get it on Google Play">
  
    <Image
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/get-it-on-google-play-badge-vector-11573976703gflfeuhxyt-1764746969906.png?width=8000&height=8000&resize=contain"
      alt="Get it on Google Play"
      width={139}
      height={60}
      className="h-[60px] w-auto object-contain"
    />
  </Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="lg:hidden"
    aria-label="Toggle menu"
    aria-expanded={isMenuOpen}
  >
    {isMenuOpen ? (
      <X className="h-6 w-6 text-gray-800" />
    ) : (
      <Menu className="h-6 w-6 text-gray-800" />
    )}
  </button>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-white/20 shadow-lg py-4 px-5 lg:hidden">
    <nav className="flex flex-col gap-4">
      <Link href="/" className="hover:opacity-70 transition-opacity">
        Home
      </Link>
      <Link href="/jobs" className="hover:opacity-70 transition-opacity">
        Jobs
      </Link>
      <Link href="/press" className="hover:opacity-70 transition-opacity">
        Press
      </Link>
      <Link href="/subscription" className="hover:opacity-70 transition-opacity">
        Manage Subscription
      </Link>
    </nav>
  </div>
)}
</header>
  );
}