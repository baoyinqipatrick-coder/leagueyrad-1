'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';

export default function PackOpening3D({ opening = false }: { opening?: boolean }) {
  return (
    <div className="h-[480px] md:h-[620px] w-full rounded-[40px] overflow-hidden border border-yellow-500/20 bg-zinc-950/70 shadow-gold">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        <Environment preset="city" />
        <Sparkles count={90} scale={7} size={3} speed={opening ? 2 : 0.45} color="#facc15" />
        <Float speed={opening ? 6 : 2.4} rotationIntensity={opening ? 5 : 1.5} floatIntensity={1.5}>
          <mesh rotation={[0.25, -0.35, 0]}>
            <boxGeometry args={[2.15, 3.25, 0.2]} />
            <meshStandardMaterial color="#facc15" metalness={1} roughness={0.16} />
          </mesh>
          <mesh position={[0, 0, 0.13]} rotation={[0.25, -0.35, 0]}>
            <boxGeometry args={[1.72, 2.55, 0.04]} />
            <meshStandardMaterial color="#111111" metalness={0.65} roughness={0.25} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
