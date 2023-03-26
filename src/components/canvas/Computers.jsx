
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";;

import CanvasLoader from "../Loader";
import { isMotionComponent } from "framer-motion";


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./car/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={ isMobile ? 0.2 : 0.35} groundColor='black' />
      <pointLight intensity={isMobile ? 1 : 3} />
      <spotLight
        position={[20, 90, 40]}
        angle={0.22}
        penumbra={2}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.2 : 2.85}
        position={isMobile ? [-3, -1, -1.2] : [0, -3.25, -1.3]}
        rotation={[0.01, -0.1, 0.0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

    return (
      <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
    )
  }

export default ComputersCanvas;