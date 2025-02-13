import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import jar from "../assets/3d/be_my_valentine.glb";
import CanvasLoader from "./Loader";
import { useFrame } from "@react-three/fiber";

const Jar = ({ scale, position }) => {
  const jarRef = useRef();
  const { scene } = useGLTF(jar);
  const [time, setTime] = useState(0);

  useEffect(() => {
    scene.position.set(0, 0, 0); // ✅ Reset position
    scene.scale.set(1, 1, 1); // ✅ Reset scale

    // ✅ Ensure the model is visible
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide; // Fix potential invisibility
      }
    });
  }, [scene]);


  useFrame((state, delta) => {
    if (jarRef.current) {
      setTime((prev) => prev + delta); // Increment time smoothly
      jarRef.current.rotation.y = 0 + Math.sin(time) * 0.1; // Swing side to side
    }
  });

  return (
    <mesh ref={jarRef} position={position} scale={scale}>
      <primitive object={scene.children[0]} rotation={[.2, .1, 0]}/> {/* Extract first child */}
    </mesh>
  );
};

const JarCanvas = () => {
  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ position: [0, 0, 10], fov: 50 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
        <Jar scale={[.18, .18, .18]} position={[-8, -4, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default JarCanvas;
