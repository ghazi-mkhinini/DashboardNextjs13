import * as THREE from "three";
import { Ref, Suspense, useMemo, useRef } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { useEffect } from "react";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
//import factoryModel from "../assets/glTF/IndustrialTransparent4.gltf";

function FactoryModel(props: any) {
  //const { scene, nodes, materials } = useGLTF('/IndustrialTransparent4.gltf');
  const gltfModel = useLoader(GLTFLoader, "/IndustrialTransparent4.gltf");
  const modelRef: Ref<any> = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    modelRef.current.rotation.y = t * 0.2;
  });

  useEffect(() => {
    const { nodes } = gltfModel;
    Object.values(nodes).forEach((element: any) => {
      if (element.isMesh) {
        // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
        // roughnessMipmapper.generateMipmaps( child.material );
        element.material.color.setHex(0x3de0e0);
      }
    });
  }, []);

  return (
    <>
      <group ref={modelRef}>
        <primitive object={gltfModel.scene} {...props} />
      </group>
    </>
  );
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
