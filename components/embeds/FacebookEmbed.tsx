"use client";
import { useEffect } from "react";

export default function FacebookEmbed(props: { url: string; width: number }) {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => window.FB?.XFBML.parse();
    } else {
      window.FB?.XFBML.parse();
    }
  }, []);

  return (
    <div className="w-full aspect-video">
      <div
        className="fb-video w-full h-full m-auto"
        data-href={props.url}
      ></div>
    </div>
  );
}
