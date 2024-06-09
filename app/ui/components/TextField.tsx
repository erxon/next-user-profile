export default function TextField({
  placeholder,
  name,
  style,
  type="text"
}: {
  placeholder: string;
  name: string;
  style?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full p-2 text-sm outline outline-1 rounded outline-neutral-400 transition focus:outline-neutral-500 ${style}`}
    />
  );
}
