import { MouseEventHandler } from "react";

interface Props {
  clickHandler: MouseEventHandler;
  type: "submit" | "reset" | "button";
  disabled: boolean;
  hide: boolean;
  color: string;
  svg: JSX.Element; // nouveau prop pour le SVG
}

function RoundButton(props: Props) {
  return (
    <button
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.disabled}
      hidden={props.hide}
      className={`bg-${props.color} w-10 h-10 rounded-full flex items-center justify-center`}
    >
      {props.svg}
    </button>
  );
}

RoundButton.defaultProps = {
  type: "button",
  disabled: false,
  hide: false,
};

export default RoundButton;
