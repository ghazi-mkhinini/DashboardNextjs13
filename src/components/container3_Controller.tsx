import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";



//----Custom Animation hook
export  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const container: any = document.getElementById("container3");
      const guageEx: any = document.getElementById("guageEx");
      console.log("--------isOpen= " + isOpen);

      const childrenAnimations: any = isOpen
        ? [
            "GuageAnimation",
            [
              guageEx,
              { scale: 2, opacity: 1 },
              //{ delay: stagger(0.5), at: "-0.4" },
              { duration: 1, at: "GuageAnimation" },
            ],
            [
              guageEx,
              { x: 170 },
              {
                ease: [0.08, 0.65, 0.53, 0.96],
                duration: 1,
                at: "GuageAnimation",
              },
            ],
          ]
        : [
            [
              guageEx,
              { scale: 1, opacity: 1 },
              { delay: stagger(0.05, { from: "last" }), at: "<" },
            ],
          ];

      console.log("--------Running Animation= " + isOpen);
      if (isOpen)
        animate([
          [
            container,
            {
              rotateX: [0, 20, 20, 20, 20, 20, 20],
              rotateY: [0, 20, 20, 20, 20, 20, 20],
              x: 300,
              y: 180,
              //transform: "translateX(20%)",
            },
            { duration: 1, ease: "easeIn" },
          ],
          [
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
          ],
          ...childrenAnimations,
        ]);
    }, [isOpen]);

    return scope;
  }