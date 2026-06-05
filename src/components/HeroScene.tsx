import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.4, 0.42, 180, 24]} />
      <meshStandardMaterial
        color="#F5F3EF"
        emissive="#F59E0B"
        emissiveIntensity={0.15}
        wireframe
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="!absolute inset-0">
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[5, 4, 5]} intensity={3} color="#F59E0B" />
      <pointLight position={[-5, -3, 2]} intensity={1.2} color="#F59E0B" />
      <Knot />
    </Canvas>
  );
}
