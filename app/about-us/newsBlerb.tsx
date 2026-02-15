import Image from "next/image";
import Link from "next/link";

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
        ></Image>
      </div>
      <div className="flex flex-col items-start h-full justify-center">
        <Link href={props.link} className="text-header-teal text-h1 mb-4">
          {props.title}
        </Link>
        <div className="text-body text-main-grey">{props.subtext}</div>
      </div>
    </div>
  );
}

export default NewsBlerb;
