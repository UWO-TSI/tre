interface IconProps {
  name: string;
  link: string;
  viewbox: string;
  width: string;
  height: string;
  colour: string;
  path: React.ReactNode;
}

export default function SocialIcons(props: IconProps) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <svg
        style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                fill: `${props.colour}`
            }}
        className="inline-block transition duration-[170ms] ease-in-out group-hover:opacity-30 hover:opacity-100"
        aria-label={props.name}
        preserveAspectRatio="xMidYMid meet"
        viewBox={props.viewbox}
      >
        {props.path}
      </svg>
    </a>
  );
}
