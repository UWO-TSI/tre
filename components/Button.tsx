export default function Button(props: { children?: React.ReactNode }) {
  return (
    <button className="text-body bg-btn-purple px-8 p-4 rounded-4xl">
      {props.children}
    </button>
  );
}
