"use client";
import YellowAccentButton from "@/components/accentButton/yellowAccentButton";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "/images/ChildcanWalk2023-12.jpg",
    text: "my button text 1",
    offset: "20%",
  },
  {
    id: 2,
    url: "/images/ChildcanWalk2023-108.jpg",
    text: "my button text 2",
    offset: "20%",
  },
  {
    id: 3,
    url: "/images/ChildcanWalk2023-304.jpg",
    text: "my button text 3",
    offset: "20%",
  },
  { id: 4, url: "/images/family.jpg", text: "my button text 4", offset: "20%" },
  {
    id: 5,
    url: "/images/_DSC5337.JPG",
    text: "my button text 5",
    offset: "35%",
  },
];

export default function ImageCarousel() {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  function handleNextClick() {
    setCurrImgIndex((currImgIndex + 1) % images.length);
  }

  function handlePrevClick() {
    if (currImgIndex === 0) {
      setCurrImgIndex(images.length - 1);
    } else {
      setCurrImgIndex((currImgIndex - 1) % images.length);
    }
  }

  // changes every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(timer);
  }, [currImgIndex]);

  return (
    <div className="relative group w-full max-w-full overflow-hidden h-[600px]">
      <button
        className="nav-button left-0 absolute z-20 self-center top-[50%] translate-y-[-50%] p-[10px] cursor-pointer"
        onClick={handlePrevClick}
      >
        <svg
          className="w-[24px] h-[24px] inline-block fill-white"
          preserveAspectRatio="xMidYMid meet"
          viewBox="91.708 653.596 216.584 397.533"
        >
          <path
            d="M 91.708002,1033.4901 272.9697,851.43539 92.690402,671.27913 110.3623,653.59553 308.292,851.39046 109.4248,1051.1288 91.708002,1033.4901 Z"
            transform="scale(-1, 1) translate(-400, 0)"
          >
            {" "}
          </path>
        </svg>
      </button>
      <button
        className="nav-button right-0 absolute z-99 self-center top-[50%] translate-y-[-50%] p-[10px] cursor-pointer"
        onClick={handleNextClick}
      >
        <svg
          className="w-[24px] h-[24px] fill-white"
          preserveAspectRatio="xMidYMid meet"
          viewBox="91.708 653.596 216.584 397.533"
        >
          <path d="M 91.708002,1033.4901 272.9697,851.43539 92.690402,671.27913 110.3623,653.59553 308.292,851.39046 109.4248,1051.1288 91.708002,1033.4901 Z">
            {" "}
          </path>
        </svg>
      </button>

      {images.map((img, index) => (
        <div key={index} className="h-50 md:h-27.5">
          <Image
            key={index}
            alt=""
            fill={true}
            src={img.url}
            style={{
              objectPosition: `center ${img.offset}`,
              objectFit: "cover",
            }}
            className={`absolute inset-0 transition-opacity duration-175 ease-in-out ${currImgIndex === index ? "opacity-100" : "opacity-0"}`}
          ></Image>
          <YellowAccentButton className="transition duration-400 ease-in-out right-[50%] absolute z-20 top-[50%] translate-x-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100">
            {img.text}
          </YellowAccentButton>
        </div>
      ))}
    </div>
  );
}
