interface SectionBoxProps {
  title: string;
  imgSrc: string;
  altText: string;
}

export default function SectionBox(props: SectionBoxProps) {
  return (
    <div className="flex h-1/3 gap-6 p-4">
      <div className="flex flex-col w-3/5 gap-2 p-4">
        <h1 className="text-h1 text-header-purple">{props.title}</h1>
        <p className="text-body text-secondary-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet pulvinar enim. Suspendisse potenti. Nam et maximus lorem, vitae
          elementum orci. Praesent id risus in metus mattis mollis. Duis enim
          justo, tempor ut rhoncus quis, lacinia quis lorem. Etiam sodales
          malesuada erat, quis fringilla libero bibendum ut. Curabitur sed arcu
          eget ex finibus egestas sit amet ac metus. Nulla dictum purus quis
          tortor imperdiet pellentesque. Donec feugiat a lorem vel porttitor.
          Sed imperdiet laoreet convallis.
        </p>
      </div>

      <img src={props.imgSrc} alt={props.altText} className="w-1/3 border-2" />
    </div>
  );
}
