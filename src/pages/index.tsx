import Image from "next/image";
import { Inter } from "next/font/google";
import svg from "./_Group.svg";
import { transform } from "typescript";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "../components/container";
import Container2 from "../components/container2";

import ExtendedGuage1 from "../components/extendedGuage1";
import ExtendedGuage2 from "../components/extendedGuage2";
import Container3 from "../components/container3";
import Central from "../components/Central";
import { animate, useAnimate } from "framer-motion";
import Factory3D from "@/model3D/Factory3D";
import Containers from "@/components/containers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryRoute1 from "@/API/QueryRoute1";
import { Dial, DialOptions } from "flowbite";
import SpeedDial from "@/components/SpeedDial";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState<string>("testing text");
  const [percentage, setPercentage] = useState<number>(0);
  const [text2, setText2] = useState<string>("");
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setInterval(() => {
      if (percentage < 100)
        setPercentage((percentage) => {
          if (percentage < 100) return percentage + 1;
          else return 0;
        });
    }, 20);
  }, []);

  return (
    <>
      <Factory3D></Factory3D>
      <div className="flex">
        <div>
          <div className="flex">
            <Container text={text}></Container>
            <Container text={text2}></Container>
          </div>

          <Container2 text={""}></Container2>
          <Container2 text={""}></Container2>

          <Container3 text={""} width={220}>
            <ExtendedGuage2
              id={"guageEx"}
              percentage={percentage}
            ></ExtendedGuage2>
            <ExtendedGuage1 text={""}></ExtendedGuage1>
          </Container3>

          <ExtendedGuage1 text={""}></ExtendedGuage1>
          <ExtendedGuage1 text={""}></ExtendedGuage1>

          <ExtendedGuage2 percentage={percentage}></ExtendedGuage2>

          <Containers>
            <Container2 text={""}></Container2>
            <Container2 text={""}></Container2>
            <Container2 text={""}></Container2>
            <Container2 text={""}></Container2>
            <Container2 text={""}></Container2>
          </Containers>
          {/*<Container text={text}></Container>
          <Container text={text}></Container>*/}

          <button
            className="text-cyan-100"
            ref={scope}
            onClick={() => {
              setText("Setting new Text");
              /*animate(
                scope.current,
                { opacity: 0.2, rotateZ: 80 },
                { duration: 4 }
              );*/
              //dialref.current?.toggle();
            }}
          >
            Change Text
          </button>
        </div>

        {/*<Central></Central>*/}

        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
              className="dark:hidden h-[426px] md:h-[654px]"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
              className="hidden dark:block h-[426px] md:h-[654px]"
              alt=""
            />
          </div>
        </div>

        <SpeedDial></SpeedDial>

        {/*<div data-dial-init className="fixed right-6 bottom-6 group">
          <div
            id="speed-dial-menu-text-inside-button-square"
            className="flex flex-col items-center hidden mb-4 space-y-2"
          >
            <button
              type="button"
              className="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
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
              className="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
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
              type="button"
              className="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
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
              className="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
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
            data-dial-toggle="speed-dial-menu-text-inside-button-square"
            aria-controls="speed-dial-menu-text-inside-button-square"
            aria-expanded="false"
            className="flex items-center justify-center text-white bg-blue-700 rounded-lg w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
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
        </div>*/}

        <QueryClientProvider client={queryClient}>
          <QueryRoute1 />
        </QueryClientProvider>
      </div>
    </>
  );
}
