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
  const [isActive, setIsActive] = useState(false);
  const scope = useContainerAnimation(isActive);
  //const table=
  const t = React.Children.toArray(children);
  const arrr = t.map((Item: any) => {
    return <Container2 className={"absolute inline-block m-2"}></Container2>;
    //return cloneElement(Item, { special : "absolute" }, null);
  });
  return <>{arrr}</>;
};

export default Containers;
