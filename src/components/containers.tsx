import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from "react";
import { useContainerAnimation } from "./containers_Controller";
import React from "react";
import Container2 from "./container2";

interface propsType {
  children?: ReactNode;
  rest?: ReactNode[];
}

const Containers = (props: propsType): JSX.Element => {
  const { children, ...rest } = props;
  const [isActive, setIsActive] = useState(true);
  const scope = useContainerAnimation(isActive);
  //const table=
  const t = React.Children.toArray(children);
  const arrr = t.map((Item: any, index: number) => {
    //----Returning new Element with JSX
    return (
      <Container2
        id={"container2_"+(index + 1)}
        customClassName={"absolute"}
      ></Container2>
    );
    //----Returning new Element with React cloneElement  imperative code
    //return cloneElement(Item, { special : "absolute" }, null);
  });
  return <>{arrr}</>;
};

export default Containers;
