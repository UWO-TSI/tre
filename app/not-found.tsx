import Image from "next/image";
import Link from "next/link";
import YellowAccentButton from "@/components/accentButton/yellowAccentButton";
import SocialIcons from "@/app/_components/socialIcons";

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
          <div className="mb-4">
            <Image
              src="/images/Childcan-Logo.png.webp"
              alt="Childcan Logo"
              width={200}
              height={100}
              className="h-auto w-auto"
              priority
            />
          </div>

          {/* 404 Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-header-purple">
            404!
          </h1>

          {/* Description Text */}
          <p className="text-body text-main-grey leading-relaxed">
            We looked but there just isn&apos;t anything here. If this seems
            wrong or looks like an error, email us back!
          </p>

          {/* Go Home Button */}
          <Link href="/">
            <YellowAccentButton className="mt-4">Go Home</YellowAccentButton>
          </Link>

          {/* Social Icons */}
          <div className="pt-8 flex gap-4 items-center">
            <SocialIcons
              name="facebook"
              link="https://www.facebook.com/Childcan/"
              width="20"
              height="36"
              colour="#60588e"
              viewbox="0 0 512 512"
              path={
                <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"></path>
              }
            />
            <SocialIcons
              name="instagram"
              link="https://www.instagram.com/childcan/"
              width="25"
              height="25"
              colour="#60588e"
              viewbox="0 0 24 24"
              path={
                <path d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
              }
            />
            <SocialIcons
              name="youtube"
              link="https://www.youtube.com/@ChildcanCanada"
              width="25"
              height="25"
              colour="#60588e"
              viewbox="0 0 24 24"
              path={
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
