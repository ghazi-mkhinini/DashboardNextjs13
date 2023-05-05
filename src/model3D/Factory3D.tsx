import * as THREE from "three";
import { Ref, Suspense, useMemo, useRef, useState } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { useEffect } from "react";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useAnimate } from "framer-motion";

function FactoryModel(props: any) {
  //console.log("------Begin component Factory3D");
  //------Component States
  //const { scene, nodes, materials } = useGLTF('/IndustrialTransparent4.gltf');
  const gltfModel = useLoader(GLTFLoader, "/IndustrialTransparent4.gltf");
  const modelRef: Ref<any> = useRef();
  const [material2, setMaterial2] = useState("0x3de0e0");
  const { nodes } = gltfModel;
  const Objects3D: any = Object.values(nodes);

  //--------Custom Hook for material animation
  function useMaterialAnimation(animate: boolean) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      console.log(gltfModel.scene.children);
      Objects3D.forEach((element: any) => {
        if (element.isMesh) {
          console.log("---element = " + element);
          element.material.color.setHex(0x3de0e0);
        }
        //--setting Building material to Red
        if (Objects3D[9].isMesh) {
          //Object.values(nodes)[9].material.color.setHex(0x9c1515);
          Objects3D[9].material.color.setHex(0x3de0e0);
        }
      });
    }, []);

    return isAnimating;
  }

  //------Low level access to threejs rendering loop
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    //modelRef.current.rotation.y = t * 0.2;
  });

  //console.log("------Finished State and const Factory3D");
  //------Mount
  useEffect(() => {
    //console.log("------Begin Mount Factory3D");
    //console.log(gltfModel.scene.children);
    Objects3D.forEach((element: any) => {
      if (element.isMesh) {
        console.log("---element = " + element);
        //element.material.color.setHex(0x3de0e0);
        element.material.color.setHex(0xe5e7eb);
      }
      //--setting Building material to Red
      if (Objects3D[9].isMesh) {
        //Object.values(nodes)[9].material.color.setHex(0x9c1515);
        Objects3D[9].material.color.setHex(0x3de0e0);
      }
    });
    //console.log("------Finished Mount Factory3D");
  }, []);

  let repeat: number = 0;
  useEffect(() => {
    //console.log("------Begin Mount Factory3D effect modifying material");
    //--setting Building material to Red
    //setMaterial2("0x9c1515");
    let obj = Objects3D[9];
    let id = setInterval(() => {
      //console.log("Effect material ");
      //console.log(Objects3D[9].material.color);

      if (isMaterialColorEqual(obj)) {
        obj.material.color.setHex("0x9c1515");
      } else {
        obj.material.color.setHex("0x3de0e0");
        repeat += 1;
      }
      if (repeat == 6) clearInterval(id);
    }, 250);
    //console.log("------Finished Mount Factory3D effect modifying material");
  }, []);

  function isMaterialColorEqual(obj1: any) {
    /*Color to compare to
    {
          isColor: true,
          r: 0.04666508633021928,
          g: 0.7454042095350284,
          b: 0.7454042095350284,
        }*/

    return (
      obj1.material.color.r == "0.04666508633021928" &&
      obj1.material.color.g == "0.7454042095350284" &&
      obj1.material.color.g == "0.7454042095350284"
    );
  }

  const jsx = (
    <>
      <group ref={modelRef}>
        <primitive object={gltfModel.scene} {...props} />
      </group>
    </>
  );
  //console.log("------Rerender JSX Factory3D");
  return jsx;
}

const Factory3D = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        display: "inline-block",
        width: "100%",
        height: "100%",
        zIndex: "-10",
      }}
      className="inline-block absolute top-0 left-0 -z-10 w-full h-screen"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [80, 30, 0], fov: 45 }}
    >
      <color attach="background" args={["#15151a"]} />
      <Suspense>
        <FactoryModel></FactoryModel>
      </Suspense>
      <directionalLight position={[1, 1, 1]}></directionalLight>
      <ambientLight></ambientLight>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Factory3D;
