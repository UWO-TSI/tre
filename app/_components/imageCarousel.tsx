"use client";
import YellowAccentButton from "@/components/accentButton/yellowAccentButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Image as TypeImage } from "sanity";
import { Slug } from "@sanity/types";
import { urlForImage } from "@/sanity/lib/client";

export interface CarouselItem {
  image: { image: TypeImage; alt: string };
  text: string;
  slug: Slug;
  offset: string;
}

export default function ImageCarousel(props: { items: CarouselItem[] }) {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const length = props.items.length;

  function handleNextClick() {
    setCurrImgIndex((currImgIndex + 1) % length);
  }

  function handlePrevClick() {
    if (currImgIndex === 0) {
      setCurrImgIndex(length - 1);
    } else {
      setCurrImgIndex((currImgIndex - 1) % length);
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

      <div style={{ display: "grid", gridTemplateAreas: "'area'" }}>
        {props.items.map((item, index) => (
          <div
            className="h-130 overflow-hidden relative w-full"
            key={index}
            style={{ gridArea: "area" }}
          >
            <Image
              key={index}
              alt={item.image.alt}
              src={urlForImage(item.image).url()}
              layout="fill"
              className={` transition-opacity duration-175 ease-in-out ${currImgIndex === index ? "opacity-100" : "opacity-0"}`}
              style={{
                objectFit: "cover",
                objectPosition: `${item.offset ?? "center"} center`,
              }}
            ></Image>
            <YellowAccentButton
              href={item.slug.current}
              className={`transition duration-400 ease-in-out right-[50%] absolute z-20 top-[50%] translate-x-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 ${currImgIndex != index ? "hidden" : ""}`}
            >
              {item.text}
            </YellowAccentButton>
          </div>
        ))}
      </div>
    </div>
  );
}
