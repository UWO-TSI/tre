import Image from "next/image";
import Link from "next/link";
import YellowAccentButton from "@/components/accentButton/yellowAccentButton";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-screen relative">
        <Image
          src="/images/child.webp"
          alt="Child"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center px-8 py-12 md:py-0">
        <div className="max-w-md w-full flex flex-col items-center text-center space-y-6">
          {/* Childcan Logo */}
          <div className="mb-2">
            <Image
              src="/images/Childcan-Logo.png.webp"
              alt="Childcan Logo"
              width={150}
              height={75}
              className="h-auto w-auto"
              priority
            />
          </div>

          {/* 404 Heading */}
          <h1 className="text-7xl md:text-8xl font-bold text-header-purple">
            404!
          </h1>

          {/* Description Text */}
          <p className="text-body text-main-grey leading-relaxed">
            We can&apos;t find the page you&apos;re looking for, sorry about
            that. It has either moved, or does not exist.
          </p>

          {/* Go Home Button */}
          <Link href="/">
            <YellowAccentButton className="mt-4">Home Page</YellowAccentButton>
          </Link>

          {/* Social Icons */}
          <div className="pt-8 flex gap-4 items-center">
            <a
              href="https://www.facebook.com/Childcan/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border-2 border-header-purple flex items-center justify-center hover:bg-header-purple hover:bg-opacity-10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#60588e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/childcan/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border-2 border-header-purple flex items-center justify-center hover:bg-header-purple hover:bg-opacity-10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#60588e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/childcan/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border-2 border-header-purple flex items-center justify-center hover:bg-header-purple hover:bg-opacity-10 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#60588e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
