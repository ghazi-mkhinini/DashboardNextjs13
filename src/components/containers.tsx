import { useState } from "react";
import { useContainerAnimation } from "./containers_Controller";

const Containers = ({ children }: any) => {

  const [isActive,setIsActive]=useState(false);
  const scope = useContainerAnimation(isActive);
  return { children };
};
