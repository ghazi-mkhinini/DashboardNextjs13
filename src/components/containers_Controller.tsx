import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

//----Custom Animation hook
export function useContainerAnimation(isActive: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const container: any = document.getElementById("container2_2");
    const guageEx: any = document.getElementById("");

    if (isActive)
      animate([
        [
          container,
          {
            rotateX: [0, 20, 20, 20, 20, 20, 20],
            rotateY: [0, 20, 20, 20, 20, 20, 20],
            x: 20,
            //transform: "translateX(20%)",
          },
          { duration: 1, ease: "easeIn" },
        ],
        /*[
          container,
          {
            x: 550,
            y: 250,
            //transform: "translateX(20%)",
          },
          //{ duration: 1.4, ease: "linear", at: "last" },
          {
            duration: 1,
            ease: "easeOut",
            delay: stagger(0, { from: "last" }),
          },
        ],*/
      ]);
  }, [isActive]);

  return scope;
}
