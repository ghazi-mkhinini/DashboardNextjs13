import Image from "next/image";
import { Inter } from "next/font/google";
import svg from "./_Group.svg";
import { transform } from "typescript";
import { useEffect, useState } from "react";
import Container from "../components/container";
import Container2 from "../components/container2";

import ExtendedGuage1 from "../components/extendedGuage1";
import ExtendedGuage2 from "../components/extendedGuage2";
import Container3 from "../components/container3";
import Central from "../components/Central";
import { animate, useAnimate } from "framer-motion";

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
    //<Image src={svg} alt={""} style={{width:"400px",height:"300px"}}></Image>
    <>
      <div className="flex">
        <div>
          <div className="flex">
            <Container text={text}></Container>
            <Container text={text2}></Container>
          </div>
          <Container3 text={""} width={220}>
            <ExtendedGuage2 id={"guageEx"} percentage={percentage}></ExtendedGuage2>
            <ExtendedGuage1 text={""}></ExtendedGuage1>
          </Container3>
          <Container2 text={""}></Container2>
          <Container2 text={""}></Container2>

          <ExtendedGuage1 text={""}></ExtendedGuage1>
          <ExtendedGuage1 text={""}></ExtendedGuage1>

          <ExtendedGuage2 percentage={percentage}></ExtendedGuage2>

          <Container text={text}></Container>
          <Container text={text}></Container>

          <button
            className="text-cyan-100"
            ref={scope}
            onClick={() => {
              setText("Setting new Text");
              animate(
                scope.current,
                { opacity: 0.2, rotateZ: 80 },
                { duration: 4 }
              );
            }}
          >
            Change Text
          </button>
        </div>

        <Central></Central>
      </div>
    </>
  );
}
