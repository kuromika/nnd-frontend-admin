import clsx from "clsx";

export const SwitchButton = (props: {
  selected: boolean;
  handleClick: () => void;
  text: string;
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "p-2 text-white",
        props.selected ? "text-xl text-black" : "text-lg"
      )}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};
