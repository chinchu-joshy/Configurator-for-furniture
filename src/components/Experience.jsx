import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import { Suspense } from "react";
import Chair from "./Chair";
const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment={"city"} intensity={0.4} contactShadow={false}>
          <Chair />
        </Stage>
        <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
