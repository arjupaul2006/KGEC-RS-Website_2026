'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Robot() {
  const { scene } = useGLTF('/robot.glb');
  return <primitive object={scene} scale={1.2} />;
}

export default function RobotScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Robot />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
