import { PropsWithChildren } from "react";

export const WithLabel = (
  props: PropsWithChildren & { for: string; text: string }
) => {
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor={props.for} className="text-white text-xl ">
        {props.text}
      </label>
      {props.children}
    </div>
  );
};
