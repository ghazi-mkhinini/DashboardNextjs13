import { animate, stagger, useAnimate } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children?: ReactNode;
  width: number;
  text?: string;
}

export default function Container3({
  width,
  text,
  children,
}: Props): JSX.Element {
  const [isForwardMove, setIsForwardMove] = useState(true);

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      console.log("--------isOpen= " + isOpen);
      const container: any = document.getElementById("container3");
      const guageEx: any = document.getElementById("guageEx");
      const menuAnimations = isOpen
        ? [
            [
              guageEx,
              { x:100 },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 2 },
            ],
            [
              guageEx,
              { scale:2, opacity: 1},
              { delay: stagger(0.05), at: "-0.1" },
            ],
          ]
        : [
            [
              guageEx,
              { scale:1, opacity: 1 },
              { delay: stagger(0.05, { from: "last" }), at: "<" },
            ],
          ];
      console.log("--------Running Animation= " + isOpen);
      if (isOpen)
        animate([
          [
            container,
            { transform: "translateX(20%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 2 },
          ],
          ...menuAnimations,
        ]);
    }, [isOpen]);

    return scope;
  }

  //----Custom Animation hook
  const [isOpen, setIsOpen] = useState(false);
  const scope2 = useMenuAnimation(isOpen);
  const handleClick2 = () => {
    setIsOpen(() => {
      return !isOpen;
    });
  };
  const handleClick = async () => {
    if (isForwardMove === true) {
      await animate(scope.current, {
        opacity: [1, 1, 1],
        rotateY: [0, 20, 20],
        rotateX: [0, 20, 20],
        x: [0, 200, 400],
        //transition: { type: "spring", stiffness: 100, duration: 2 },
      });
      /*await animate(
              scope.current,
              {
                opacity: 1,
                rotateY: [0,20],
                rotateX: [0,20],
                x: [0,400],
                transition: { type: "linear", stiffness: 100, duration: 2 },
              },
            );*/
      /*animate(
              scope.current,
              {
                x: 400,
                transition: "ease",
              },
              { duration: 0.8 }
            );*/
      setIsForwardMove(false);
    } else {
      await animate(
        scope.current,
        {
          opacity: 1,
          rotateY: -20,
          rotateX: 20,
          x: 0,
        },
        { duration: 0.4 }
      );
      setIsForwardMove(true);
    }
  };

  return (
    <>
      <button className="text-cyan-100" onClick={handleClick2}>
        Change Text
      </button>
      <div id="container3" style={{ transform: "translateX(0%)" }}>
        <div
          className="container3 inline-block m-2 relative "
          ref={scope2}
          style={{ minWidth: width, minHeight: width * 0.6 }}
        >
          <div className="container3_children m-5">{children}</div>
          <p className="absolute p-1 top-2 left-2 z-[1] text-zinc-400 text-xs">
            {text}
          </p>
          <svg
            className="absolute top-0 left-0"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 922 536"
            //Aspect Ration 1:0.6
            width={width}
            height={width * 0.6}
          >
            <style>{`.a{fill:#3de0e0}.b{opacity:.4;fill:#3de0e0}`}</style>
            <path
              className="a"
              d="m832.9 522h-338.2l-20-30.8h-202.7l-25 30.8h-223.6v-492.5h199.4v6.9h-192.6v478.8h213.6l24.9-30.8h209.7l20 30.8h331.5l70.7-77.6v-401.2h-121.4v-6.9h128.2v410.8z"
            />
            <path className="a" d="m457 40.5h-260.7l11.3-17.4h238.2z" />
            <path className="a" d="m215.5 33.9h-54.9v-8h54.9z" />
            <path className="a" d="m442.9 29.9h-222l8.3-15.9h205.4z" />
            <path className="a" d="m807.4 43.4h-114.7v-22.9h114.7z" />
            <path
              className="a"
              d="m73.3 533.7h-64.1v-85.1l15.3-8.8v78.6h61.2z"
            />
            <path className="a" d="m17.1 451.1h-4.6v-110.2h4.6z" />
            <path className="a" d="m17.1 215.1v136l-16.6-10v-116z" />
            <path className="a" d="m920.4 151.5l-16.4 10.6v-129.1h16.4z" />
            <path className="a" d="m916.2 211.3h-5.8v-62.9h5.8z" />
            <path className="a" d="m909.1 220.6v-6.2l12.9 4.3v6.1z" />
            <path className="a" d="m909.1 229.4v-6.1l12.9 4.2v6.1z" />
            <path className="a" d="m909.1 238.2v-6.1l12.9 4.2v6.2z" />
            <path className="a" d="m909.1 247.1v-6.2l12.9 4.3v6.1z" />
            <path className="a" d="m909.1 255.9v-6.1l12.9 4.2v6.1z" />
            <path className="a" d="m909.1 264.7v-6.1l12.9 4.2v6.2z" />
            <path className="a" d="m909.1 273.6v-6.2l12.9 4.3v6.1z" />
            <path className="a" d="m909.1 282.4v-6.1l12.9 4.2v6.1z" />
            <path className="a" d="m909.1 291.2v-6.1l12.9 4.2v6.2z" />
            <path className="a" d="m909.1 300.1v-6.1l12.9 4.2v6.1z" />
            <path className="a" d="m909.1 308.9v-6.1l12.9 4.2v6.1z" />
            <path className="a" d="m909.1 317.8v-6.2l12.9 4.2v6.2z" />
            <path className="a" d="m909.1 326.6v-6.1l12.9 4.2v6.1z" />
            <path className="a" d="m497.8 46h-29.2l20.1-46.1h29.2z" />
            <path className="a" d="m539.9 46h-29.2l20.2-46.1h29.2z" />
            <path className="a" d="m582.1 46h-29.3l20.2-46.1h29.2z" />
            <path className="a" d="m624.2 46h-29.2l20.1-46.1h29.3z" />
            <path className="a" d="m666.3 46h-29.2l20.2-46.1h29.2z" />
            <path className="a" d="m665.3 518.6h-148.8l7.5-17.5h133.9z" />
            <path className="a" d="m575.7 517.9h148.9l-7.5 17.5h-133.9z" />
            <path className="a" d="m43.3 156.7l-16.5 15v-138.7h16.5z" />
            <path className="a" d="m28.3 165.8l-20.2-14.8v-79.7l20.2-14.8z" />
            <path
              className="b"
              d="m60.4 60.2v108.7l-23.9 10.1v323.1h201.1l23.6-33.2h232.1l9.9 19.5h162.1l7.6 13.7h148.4l63.6-72.3v-369.6z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
