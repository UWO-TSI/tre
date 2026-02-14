"use client";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    _ctct_m?: string;
  }
}

export default function ContactForm() {
  useEffect(() => {
    // Set the Constant Contact variable
    window._ctct_m = "81c2c1f7429278ac820f725c7f44d52a";
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full md:w-[412.5px]">
      {/* Load Constant Contact script using Next.js Script component */}
      <Script
        id="signupScript"
        src="https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        strategy="lazyOnload"
      />

      {/* <!-- Begin Constant Contact Inline Form Code --> */}
      <div
        className="ctct-inline-form"
        data-form-id="5b7aa8ea-3df7-4924-8147-41dee4256832"
        suppressHydrationWarning
      ></div>
      {/* <!-- End Constant Contact Inline Form Code --> */}
    </div>
  );
}
