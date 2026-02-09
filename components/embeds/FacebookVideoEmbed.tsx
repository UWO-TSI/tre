"use client";

import { useEffect } from "react";

type EmbedType = "video" | "page";
let sdkLoaded = false;

export default function FacebookVideoEmbed(props: {
  url: string;
  type: EmbedType;
}) {
  useEffect(() => {
    if (!window.FB) {
      if (!sdkLoaded) {
        sdkLoaded = true;

        const script = document.createElement("script");
        script.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
        script.async = true;
        script.defer = true;
        script.onload = () => window.FB?.XFBML.parse();
        document.body.appendChild(script);
      }
    } else {
      window.FB?.XFBML.parse();
    }
  }, []);

  return (
    <div className="w-full aspect-video">
      <div
        className={`fb-${props.type} w-full h-full m-auto`}
        data-href={props.url}
        data-tabs="timeline"
      ></div>
    </div>
  );
}
