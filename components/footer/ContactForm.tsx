"use client";
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

    // Load the Constant Contact script
    const script = document.createElement("script");
    script.id = "signupScript";
    script.src = "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const existingScript = document.getElementById("signupScript");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 w-full md:w-[412.5px]">
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
