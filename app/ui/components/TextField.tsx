import { FieldTypes } from "./types";

export default function TextField(props: FieldTypes) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={`w-full p-2 text-sm outline outline-1 rounded outline-neutral-400 transition focus:outline-neutral-500 ${props.style}`}
      disabled={props.disabled}
      defaultValue={props.defaultValue}
      onChange={(e) => {
        props.handleChange ? props.handleChange(e.target.value) : null
      }}
      
    />
  );
}
