
export default function InputBox(props: {
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <input className="w-3/4 bg-white text-body-small p-2 pl-4 rounded-4xl text-[#272727]" type="text" placeholder={ props.label } value={ props.value } onChange={ (e) => props.setValue(e.target.value) } />
    );
}