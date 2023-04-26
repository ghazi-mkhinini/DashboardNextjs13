import Image from "next/image";
import { Inter } from "next/font/google";
import svg from "./_Group.svg";
import { transform } from "typescript";
import { useState } from "react";
import Container from "./components/container";
import Container2 from "./components/container2";

import ExtendedGuage1 from "./components/extendedGuage1";
import ExtendedGuage2 from "./components/extendedGuage2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState<string>("testing text");
  const [text2, setText2] = useState<string>(".");

  return (
    //<Image src={svg} alt={""} style={{width:"400px",height:"300px"}}></Image>
    <>
      <div className="flex">
        <Container text={text}></Container>
        <Container text={text2}></Container>
      </div>

      <Container2 text={undefined}></Container2>
      <Container2 text={undefined}></Container2>

      <ExtendedGuage1 text={undefined}></ExtendedGuage1>
      <ExtendedGuage1 text={undefined}></ExtendedGuage1>

      <ExtendedGuage2 text={undefined}></ExtendedGuage2>

      <Container text={text}></Container>
      <Container text={text}></Container>

      <button
        className="text-cyan-100"
        onClick={() => {
          setText("Setting new Text");
        }}
      >
        Change Text
      </button>
    </>
  );
}
