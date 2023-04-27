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
        "p-2",
        props.selected
          ? "text-2xl font-bold bg-[#4465A1] text-white"
          : "text-lg bg-[#DD8A06] text-black"
      )}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};
