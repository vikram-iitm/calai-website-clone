'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
{ name: 'Home', href: '/' },
{ name: 'Features', href: '/#features' },
{ name: 'About', href: '/#about' },
{ name: 'Support', href: '/#support' }];

const JoinWaitlistButton = () => (
  <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
    Join the waitlist
  </button>
);

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
              <span className="text-2xl font-bold text-black">AltSelf</span>
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
            <div className="mt-3 flex justify-center">
              <JoinWaitlistButton />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <JoinWaitlistButton />
        </div>
      </div>
    </header>);

};

export default Header;