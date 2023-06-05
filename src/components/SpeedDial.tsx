import { Dial, DialOptions } from "flowbite";
import { useLayoutEffect, useRef } from "react";
("useClient");

const SpeedDial = () => {
  let dial: Dial;
  let dialref = useRef<Dial>();

  useLayoutEffect(() => {
    console.log("----------Added Speed Dial-----");
    // parent element wrapping the speed dial
    const $parentEl = document.getElementById("dialParent");

    // the trigger element that can be clicked or hovered
    const $triggerEl = document.getElementById("dialButton");

    // the content wrapping element of menu items or buttons
    const $targetEl = document.getElementById("dialContent");

    // options with default values
    const options: DialOptions = {
      triggerType: "hover",
      onHide: () => {
        console.log("speed dial is hidden");
      },
      onShow: () => {
        console.log("speed dial is shown");
      },
      onToggle: () => {
        console.log("speed dial is toggled");
      },
    };

    dial = new Dial($parentEl, $triggerEl, $targetEl, options);
    dialref.current = dial;
    //dialref.current.toggle();
  }, []);

  return (
    <div
      id="dialParent"
      data-dial-init
      className="dark fixed bottom-6 right-24 group"
    >
      <div
        id="dialContent"
        className="flex flex-col items-center hidden mb-4 space-y-2"
      >
        <button
          type="button"
          className="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mx-auto mt-px"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
          </svg>
          <span className="block mb-px text-xs font-medium">Share</span>
        </button>
        <button
          type="button"
          className="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mx-auto mt-px"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="block mb-px text-xs font-medium">Print</span>
        </button>
        <button
          onClick={(e) => {
            dialref.current?.toggle();
          }}
          type="button"
          className="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mx-auto mt-px"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="block mb-px text-xs font-medium">Save</span>
        </button>
        <button
          type="button"
          className="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 mx-auto mt-px"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
          </svg>
          <span className="block mb-px text-xs font-medium">Copy</span>
        </button>
      </div>
      <button
        type="button"
        id="dialButton"
        data-dial-toggle="speed-dial-menu-text-inside-button"
        aria-controls="speed-dial-menu-text-inside-button"
        aria-expanded="false"
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
