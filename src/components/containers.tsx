import { JSXElementConstructor, ReactElement, ReactNode, cloneElement, useState } from "react";
import { useContainerAnimation } from "./containers_Controller";
import React from "react";

interface Props {
  children?: ReactNode;
}

interface Props2 {
  item: ReactElement;
}
const Containers = ({ children }: Props): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const scope = useContainerAnimation(isActive);
  //const table=
  const t = React.Children.toArray(children);
  const arrr = t.map((Item: any) =>
    cloneElement(Item, { className: "absolute" }, null)
  );
  return <>{arrr}</>;
};

export default Containers;
