import { useState } from "react";
import { Switch } from "@headlessui/react";
import moonIcon from "../../content/moon.svg";
import sunIcon from "../../content/sun.svg";

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  const handleDarkMode = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    setEnabled(!enabled);
  };
  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={handleDarkMode}
        className={`${
          enabled ? "bg-teal" : "bg-pink"
        } relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-9" : "translate-x-0"
          } flex items-center pointer-events-none place-content-center h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          <img src={enabled ? moonIcon : sunIcon} alt="" className="w-1/2" />
        </span>
      </Switch>
    </div>
  );
}
