import Image from "next/image";

interface NewBlerbProps {
  image: string;
  alt: string;
  title: string;
  subtext: string;
}
function NewBlerb(props: NewBlerbProps) {
  return (
    <div>
      <div className="relative cover">
        <Image fill src={props.image} alt={props.alt}></Image>
      </div>
    </div>
  );
}
export default NewBlerb;
