import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  onSubmit: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit(message);
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Anything to share?"
          onClick={() => setIsOpen(true)}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 text-dark bg-whitish border border-grey  shadow-xl shadow-grey rounded-md focus:outline-none focus:border-blue-500 dark:bg-dark dark:text-whitish"
        />
        <Transition show={isOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-whitish shadow-lg rounded-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-dark"
                  >
                    Anything to share?
                  </Dialog.Title>
                  <div className="mt-2">
                    <textarea
                      placeholder="Tell us everything..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2 text-dark bg-whitish border-2 border-grey rounded-md focus:outline-none focus:border-teal"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!message}
                      className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-teal border border-transparent rounded-md focus:outline-none  ${
                        !message ? "bg-grey cursor-not-allowed" : ""
                      }`}
                    >
                      hool
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex justify-center ml-2 px-4 py-2 text-sm font-medium text-whitish bg-dark border border-transparent rounded-md hover:bg-grey focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default MessageInput;
