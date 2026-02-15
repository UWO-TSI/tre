"use client";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    _ctct_m?: string;
  }
}

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    // Define the global variable required by Constant Contact
    window._ctct_m = "81c2c1f7429278ac820f725c7f44d52a";

    // Create and append the script
    const script = document.createElement("script");
    script.id = "signupScript";
    script.src =
      "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount to prevent duplicates
      const existingScript = document.getElementById("signupScript");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 w-[412.5px]">
      {/* <!-- Begin Constant Contact Active Forms --> */}
      {/* Script loaded via useEffect to prevent hydration mismatch */}
      {/* <!-- End Constant Contact Active Forms --> */}

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

// Add type definition for the custom window property
declare global {
  interface Window {
    _ctct_m: string;
  }
}
