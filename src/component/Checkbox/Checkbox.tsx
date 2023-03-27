import { ChangeEvent, ChangeEventHandler } from "react";

interface Props {
  checkboxValue: string;
  checked: boolean;
  onChange: ChangeEventHandler;
}
function Checkbox(props: Props) {
  return (
    <div className="flex items-center mr-4 mb-2 relative">
      <input
        id={props.checkboxValue}
        type="checkbox"
        className="opacity-0 absolute h-8 w-8"
        value={props.checkboxValue}
        name="filter"
        checked={props.checked}
        onChange={props.onChange}
      />
      <div className="bg-transparent border rounded-md border-white w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="fill-white hidden w-5 h-5 text-blue-600 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <label className="select-none text-sm" htmlFor={props.checkboxValue}>
        {props.checkboxValue}
      </label>
    </div>
  );
}
Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
