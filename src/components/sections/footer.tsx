import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) =>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  {...props}>

    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97v7.47c0 2.92-2.36 5.28-5.28 5.28-2.91 0-5.28-2.36-5.28-5.28 0-2.91 2.37-5.28 5.28-5.28.01 0 .02 0 .03 0v4.03c-1.13 0-2.14-.88-2.14-2.13 0-1.25.99-2.14 2.14-2.14h.01v-4.04c-2.51 0-4.9.63-6.92 1.85V7.18c2.25-1.12 4.75-1.74 7.37-1.75v.02h.01z" />
  </svg>;


const AppStoreButton = () =>
<a href="#" className="block">
    <Image
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/2-1764761365453.png?width=8000&height=8000&resize=contain"
    alt="Download on the App Store"
    width={135}
    height={40}
    className="h-[40px] w-auto" />

  </a>;


const GooglePlayButton = () =>
<a href="#" className="block">
    <Image
    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a974e5ea-fdb8-47ff-8492-3699a34ab4d8-calai-app/assets/images/googleplay-1.png"
    alt="Get it on Google Play"
    width={141}
    height={40}
    className="h-[40px] w-auto" />

  </a>;


const Footer = () => {
  return (
    <footer className="w-full bg-cal-bg-secondary pt-20">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cal-text-primary">AltSelf</span>
            </Link>
            <p className="text-cal-text-muted text-sm font-normal">Download AltSelf</p>
            <div className="flex items-center gap-3">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:mx-auto">
            <h3 className="font-bold text-cal-text-primary text-base mb-4">Legal</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link href="/privacy" className="text-cal-text-muted hover:text-cal-text-primary transition-colors text-sm font-normal">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-cal-text-muted hover:text-cal-text-primary transition-colors text-sm font-normal">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start md:mx-auto">
            <h3 className="font-bold text-cal-text-primary text-base mb-4">Company</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a href="mailto:support@altself.com" className="text-cal-text-muted hover:text-cal-text-primary transition-colors text-sm font-normal">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/#support" className="text-cal-text-muted hover:text-cal-text-primary transition-colors text-sm font-normal">
                  Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cal-border-light flex flex-col-reverse sm:flex-row items-center justify-between py-8 gap-4">
          <p className="text-cal-text-muted text-xs">
            © Copyright 2025, All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-cal-text-secondary hover:text-cal-text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-cal-text-secondary hover:text-cal-text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-cal-text-secondary hover:text-cal-text-primary transition-colors">
               <TiktokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;