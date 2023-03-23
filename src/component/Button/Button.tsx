import { MouseEventHandler } from "react";

interface props {
  clickHandler: MouseEventHandler;
  type: "submit" | "reset" | "button";
  disabled: boolean;
  hide: boolean;
  name: string;
  color: "black" | "teal";
}
function Button(props: props) {
  return (
    <button
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.disabled}
      hidden={props.hide}
      className={
        props.color === "black"
          ? "bg-black text-white px-6 py-1 m-1 font-roboto"
          : "bg-teal text-black px-6 py-1 m-1"
      }
    >
      {props.name}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  hide: false,
};

export default Button;
