'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
{ name: 'Home', href: '/' },
{ name: 'Jobs', href: 'mailto:apply@calai.app' },
{ name: 'Press', href: '/press' },
{ name: 'Manage Subscription', href: '/manage-subscription' }];


const AppStoreButton = () =>
<a
  href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616?ppid=0fdd527c-4a8a-4b3f-9db0-ee844938c041"
  aria-label="Download on the App Store">

    <Image
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/svgs/svgs_1.svg"
    alt="Download on the App Store"
    width={135}
    height={41}
    className="transition-opacity hover:opacity-80" />

  </a>;


const GooglePlayButton = () =>
<a
  href="https://play.google.com/store/apps/details?id=com.viraldevelopment.calai"
  aria-label="Get it on Google Play">

    <Image
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/googleplay-1.png"
    alt="Get it on Google Play"
    width={139}
    height={41}
    className="transition-opacity hover:opacity-80" />

  </a>;


const NavLink = ({ name, href }: {name: string;href: string;}) => {
  const isInternal = href.startsWith('/');
  const className = 'transition-opacity hover:opacity-75';

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {name}
      </Link>);

  }
  return (
    <a href={href} className={className}>
      {name}
    </a>);

};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/20 px-5 py-4 backdrop-blur-xl xl:px-0">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between lg:flex-row">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/icons/logo-8.png"
                alt="Cal AI Logo"
                width={28}
                height={28} />

              <span className="text-xl font-bold text-black !whitespace-pre-line">AltSelf</span>
            </Link>
            <button
              className="block lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}>

              {isOpen ?
              <X className="h-6 w-6 text-gray-800" /> :

              <Menu className="h-6 w-6 text-gray-800" />
              }
            </button>
          </div>

          <nav className="absolute left-1/2 top-7 hidden -translate-x-1/2 justify-center gap-[30px] text-base font-medium lg:flex">
            {navLinks.map((link) =>
            <NavLink key={link.name} {...link} />
            )}
          </nav>

          <div className={`mt-4 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col text-lg">
              {navLinks.map((link) =>
              <li key={link.name} className="py-2">
                  <NavLink {...link} />
                </li>
              )}
            </ul>
            <div className="mt-3 flex origin-left scale-90 transform items-center gap-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>

        <div className="hidden min-w-[288px] items-center justify-end gap-4 lg:flex">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </header>);

};

export default Header;