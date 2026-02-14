"use client";
import Contact from "./Contact";

export default function FooterContent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-main-darkpurple w-full">
      <div className="flex flex-col m-auto w-full md:w-2/3 py-8 md:py-16 gap-10 px-4 md:px-0">
        {/* Back to Top button - mobile only */}
        <button
          onClick={scrollToTop}
          className="text-white text-body font-semibold tracking-wider self-center hover:opacity-80 transition-opacity md:hidden"
        >
          BACK TO TOP
        </button>

        <Contact />

        <p className="text-body-small text-footer-grey w-full md:w-2/3 font-semibold">
          Copyright © 2026 Childcan, The Childhood Cancer Research Association,
          All Rights Reserved.
          <br />
          Charitable Registration #11885 1930 RR0001
        </p>
      </div>
    </div>
  );
}
