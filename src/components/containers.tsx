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
  children?: ReactNode[];
  rest?: ReactNode[];
}

const Containers = (props: propsType): JSX.Element => {
  const { children, ...rest } = props;
  const [isActive, setIsActive] = useState(false);
  const scope = useContainerAnimation(isActive);

  //-----Traversing children of type ReactNode[], customizing them and finally cloning them
  const t = React.Children.toArray(children);
  const arrr = t.map((Item: any, index: number) => {
    let customPositionDisplacement = {
      top: `${10 * index}px`,
      left: `${10 * index}px`,
    };
    //----Returning new Element with JSX
    return (
      <Container2
        id={"container2_" + (index + 1)}
        className={"absolute" + " " + (Item.props.className ?? "")}
        style={customPositionDisplacement}
      ></Container2>
    );
    //----Returning new Element with React cloneElement  imperative code
    /*return cloneElement(
      Item,
      {
        className: "absolute" + " " + (Item.props.className ?? ""),
        id: "container2_" + (index + 1),
        style: customPositionDisplacement,
      },
      null
    );*/
  });

  return <div className="relative">{arrr}</div>;
};

export default Containers;
