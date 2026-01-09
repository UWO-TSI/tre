"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLink from "./headerLink";
import YellowAccentButton from "../accentButton/yellowAccentButton";

function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  // const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    // let scrollDebounce: NodeJS.Timeout | undefined; // debounce timer

    const handleScroll = () => {
      
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else setIsSticky(false);

      
      // // user is at the top of the screen
      // if(window.scrollY < 88) {
      //   setIsAtTop(true); // at top of the screen
      //   setisVisible(true); // header is always visible at the top of the screen (toggles transformation and translation)
      //   if(scrollDebounce) clearTimeout(scrollDebounce); // clear the timeout
      //   return;
      // }

      // // set not visible or at top otherwise 
      // setIsAtTop(false);
      // setisVisible(false);

      // // clear timeout as new scroll has begun
      // if (scrollDebounce) clearTimeout(scrollDebounce);
      
      // // timer to determine if user stopped scrolling for 500 milliseconds
      // scrollDebounce = setTimeout(() => {
      //   setisVisible(true);
      // }, 500);
    };

    // scroll listener
    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white transition-transform duration-300 ${isSticky ? "sticky" : "none"} top-0 flex flex-row justify-between align-middle px-4 w-full h-[88px] z-50`}
    >
      <div className="w-full flex flex-row justify-between align-middle bg-white animate-header-appear">
        <Image
          className="pl-1 "
          alt={""}
          height={110}
          width={210}
          src={"/images/Childcan-Logo.png.webp"}
        ></Image>
        <nav className="flex flex-row items-center">
          <HeaderLink
            title="About"
            items={[
              { link: "", label: "About Us" },
              { link: "", label: "Our Families" },
              { link: "", label: "Our News" },
              { link: "", label: "Our Team" },
              { link: "", label: "Report of Hope" },
              { link: "", label: "Careers" },
            ]}
          ></HeaderLink>
          <HeaderLink
            title="Need Support?"
            items={[
              { link: "", label: "Here for You" },
              { link: "", label: "Financial Support" },
              { link: "", label: "Emotional Support" },
              { link: "", label: "Social Support" },
              { link: "", label: "Research Support" },
              { link: "", label: "Upcoming Family Events" },
              { link: "", label: "Q&A" },
            ]}
          ></HeaderLink>
          <HeaderLink title="For Families"></HeaderLink>
          <HeaderLink
            title="How to Help"
            items={[
              { link: "", label: "Ways to Give" },
              { link: "", label: "PJ Day" },
              { link: "", label: "Gold" },
              { link: "", label: "Host an Event" },
              { link: "", label: "Marketplace" },
              { link: "", label: "Merchandise" },
              { link: "", label: "Volunteer" },
              { link: "", label: "Our Supporters" },
            ]}
          ></HeaderLink>
          <HeaderLink title="Events"></HeaderLink>
          <HeaderLink title="Star"></HeaderLink>
          <HeaderLink title="Hands of Hope"></HeaderLink>
          <HeaderLink title="Contact"></HeaderLink>
          <YellowAccentButton>Donate</YellowAccentButton>
        </nav>
      </div>
    </div>
  );
}

export default Header;
