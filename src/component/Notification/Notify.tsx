import { MouseEventHandler, useState } from "react";
interface props {
  title: string;
  text: JSX.Element | string;
}
function Notify(props: props) {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <dialog className="relative z-50" open={isOpen}>
      <div className="fixed inset-0 flex items-start justify-end m-4">
        <div className="w-full max-w-sm rounded p-4 bg-grey flex flex-col">
          <button
            className="fixed top-5 right-5  p-2"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:h-10 md:w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="text-left p-4 w-full h-full md:mx-auto">
            <h3 className=" font-title text-xl">{props.title}</h3>
            {props.text}
          </div>
        </div>
      </div>
    </dialog>
  );
}
export default Notify;
