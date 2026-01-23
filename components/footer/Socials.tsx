import SocialIcons from "@/app/_components/socialIcons";

export default function Socials() {
  return (
    <div className="inline-flex gap-3 items-center group">
      <SocialIcons
        name="facebook"
        link="https://www.facebook.com/Childcan/"
        width="20"
        height="36"
        colour="white"
        viewbox="0 0 512 512"
        path={
          <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"></path>
        }
      ></SocialIcons>
      <SocialIcons
        name="linkedin"
        link="https://www.linkedin.com/in/childcan/"
        width="16.25"
        height="16.25"
        colour="white"
        viewbox="-271 283.9 256 235.1"
        path={
          <>
            <rect x="-264.4" y="359.3" width="49.9" height="159.7"></rect>
            <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path>
            <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
          </>
        }
      ></SocialIcons>
      <SocialIcons
        name="instagram-new"
        link="https://www.instagram.com/childcan/"
        width="25"
        height="25"
        colour="white"
        viewbox="0 0 24 24"
        path={
          <path d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
        }
      ></SocialIcons>
    </div>
  );
}
