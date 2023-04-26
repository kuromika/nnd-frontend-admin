import { ChangeEvent, useState } from "react";

export const TextInput = (props: {
  type: string;
  name: string;
  id: string;
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="pl-2 pr-2 text-lg"
      type={props.type}
      value={value}
      onChange={handleChange}
      name={props.name}
      id={props.id}
    />
  );
};
