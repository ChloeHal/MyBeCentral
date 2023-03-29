import { ChangeEventHandler } from "react";

interface props {
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  label: string;
}
function Input(props: props) {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={props.type}
        name={props.name}
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
        className="block py-2.5 px-0 w-full text-sm text-dark dark:text-whitish bg-transparent border-0 border-b border-black dark:border-whitish appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
      />
      <label className="invalid:border-pink-500 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {props.label}
      </label>
    </div>
  );
}
export default Input;
