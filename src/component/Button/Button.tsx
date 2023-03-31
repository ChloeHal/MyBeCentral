import { ChangeEvent, MouseEventHandler } from "react";

interface props {
  clickHandler: MouseEventHandler;
  type: "submit" | "reset" | "button";
  disabled: boolean;
  hide: boolean;
  name: string;
  color: "black" | "teal";
  class: string;
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
          ? `${props.class} bg-black text-white px-6 py-1 m-1 font-roboto dark:bg-whitish dark:text-black hover:text-black relative tracking-wider transition-all duration-500 ease-in-out cursor-pointer select-none bg-def hover:bg-transparent hover:text-def hover:dark:text-white`
          : `${props.class} bg-teal text-black dark:bg-pink px-6 py-1 m-1 relative tracking-wider transition-all duration-500 ease-in-out cursor-pointer select-none bg-def hover:bg-transparent hover:text-def`
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
  class: "",
};

export default Button;
