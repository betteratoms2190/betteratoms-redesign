'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, Lightformer } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Ring({ color, rot, speed, radius = 1.9 }) {
  const g = useRef();
  useFrame((_, d) => { if (g.current) g.current.rotation.z += d * speed; });
  return (
    <group rotation={rot}>
      <group ref={g}>
        <mesh><torusGeometry args={[radius, 0.07, 24, 96]} /><meshPhysicalMaterial color={color} roughness={0.3} clearcoat={1} clearcoatRoughness={0.15} /></mesh>
        <mesh position={[radius, 0, 0]}><sphereGeometry args={[0.24, 32, 32]} /><meshPhysicalMaterial color={color} roughness={0.25} clearcoat={1} /></mesh>
      </group>
    </group>
  );
}
function Atom({ reduce }) {
  const root = useRef();
  useFrame((state, d) => {
    if (!root.current || reduce) return;
    const { x, y } = state.pointer;
    const sy = typeof window !== 'undefined' ? Math.min(window.scrollY / 800, 1) : 0;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, x * 0.35 + state.clock.elapsedTime * 0.08, 3, d);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, -y * 0.25, 3, d);
    root.current.position.y = THREE.MathUtils.damp(root.current.position.y, sy * 0.8, 4, d);
  });
  return (
    <group ref={root}>
      <Float speed={reduce ? 0 : 1.6} rotationIntensity={reduce ? 0 : 0.4} floatIntensity={reduce ? 0 : 0.8}>
        <mesh><sphereGeometry args={[0.85, 64, 64]} /><meshPhysicalMaterial color="#5BD66B" roughness={0.35} clearcoat={1} clearcoatRoughness={0.2} sheen={1} sheenColor="#d6ffd0" /></mesh>
        <mesh position={[-0.28, 0.32, 0.72]}><sphereGeometry args={[0.12, 24, 24]} /><meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.4} /></mesh>
        <Ring color="#FF8A3D" rot={[1.2, 0, 0]} speed={1.1} />
        <Ring color="#4CC9F0" rot={[0.3, 0.9, 0.4]} speed={-0.8} radius={2.1} />
        <Ring color="#FF7EB6" rot={[-0.5, -0.8, 0.2]} speed={0.6} radius={2.3} />
      </Float>
      <Float speed={reduce ? 0 : 2} floatIntensity={reduce ? 0 : 1.4}>
        <mesh position={[2.6, 1.5, -1]}><sphereGeometry args={[0.38, 48, 48]} /><meshPhysicalMaterial color="#FFD447" roughness={0.3} clearcoat={1} /></mesh>
        <mesh position={[-2.7, -1.2, -0.6]}><icosahedronGeometry args={[0.32, 0]} /><meshPhysicalMaterial color="#B388FF" roughness={0.3} clearcoat={1} flatShading /></mesh>
      </Float>
    </group>
  );
}
export default function AtomScene({ reduce = false }) {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0.2, 6.4], fov: 42 }} frameloop={reduce ? 'demand' : 'always'} gl={{ antialias: true, powerPreference: 'low-power', alpha: true }} aria-hidden>
      <hemisphereLight args={['#ffe9d6', '#3B1E7A', 0.9]} />
      <directionalLight position={[4, 5, 4]} intensity={2.2} color="#FFB37A" />
      <directionalLight position={[-5, 1, -3]} intensity={1.4} color="#4CC9F0" />
      <Environment resolution={64}>
        <Lightformer intensity={2} position={[0, 4, 4]} scale={[6, 2, 1]} color="#fff3e0" />
        <Lightformer intensity={1.2} position={[-4, 0, 2]} scale={[2, 4, 1]} color="#ff9ccc" />
      </Environment>
      <Atom reduce={reduce} />
      <ContactShadows position={[0, -2.4, 0]} opacity={0.45} scale={9} blur={2.6} far={4} color="#1B1045" />
    </Canvas>
  );
}
