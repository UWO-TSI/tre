export default function Button(props: { text: string; attributes: string }) {
  return (
    <button className={`text-body px-8 p-3 rounded-4xl ${props.attributes}`}>
      {props.text}
    </button>
  );
}
