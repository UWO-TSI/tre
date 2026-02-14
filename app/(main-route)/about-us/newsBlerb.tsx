import Image from "next/image";

interface NewsBlrebProps {
  image: string;
  alt: string;
  title: string;
  subtext: string;
  link: string;
}
function NewsBlerb(props: NewsBlrebProps) {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="relative cover h-auto w-full">
        <Image
          height={1404}
          width={2098}
          src={props.image}
          alt={props.alt}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col items-start h-full justify-center">
        <div className="text-header-teal text-h1 mb-4">{props.title}</div>
        <div className="text-body text-main-grey">{props.subtext}</div>
      </div>
    </div>
  );
}
export const newsItems: NewsBlrebProps[] = [
  {
    image: "/images/Aubree+crop2.webp",
    alt: "",
    title: "Meet Aubree",
    subtext: "Your January 2026 newsletter.",
    link: "",
  },
  {
    image: "/images/Todd+with+support+cards.webp",
    alt: "",
    title: "🌟 Christmas Wishes, stars, support, PJs, and more...",
    subtext: "Your December newsletter.",
    link: "",
  },
  {
    image: "/images/Be+A+Star+Web+Banner.webp",
    alt: "",
    title: "🌟 Stars, warmth and sparkles, lights, and more...",
    subtext: "Your November newsletter.",
    link: "",
  },
];
export default NewsBlerb;
