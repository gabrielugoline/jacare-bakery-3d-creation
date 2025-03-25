
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Types
type CakeLayerProps = {
  position: [number, number, number];
  radius: number;
  height: number;
  color: string;
  texture?: string;
};

type ToppingProps = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  model?: string;
};

type CakeProps = {
  layers: any[];
  toppings: any[];
  frosting: string;
};

// Cake Layer Component
const CakeLayer = ({ position, radius, height, color, texture }: CakeLayerProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textureMap = texture ? useTexture(texture) : null;
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });
  
  return (
    <mesh position={position} ref={meshRef}>
      <cylinderGeometry args={[radius, radius, height, 64]} />
      <meshStandardMaterial 
        color={color} 
        map={textureMap instanceof THREE.Texture ? textureMap : undefined} 
        roughness={0.3} 
        metalness={0.1}
      />
    </mesh>
  );
};

// Topping Component
const Topping = ({ position, scale, rotation, model }: ToppingProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <mesh position={position} scale={scale} rotation={rotation} ref={meshRef}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#FF3366" />
    </mesh>
  );
};

// Main Cake Component
const Cake = ({ layers, toppings, frosting }: CakeProps) => {
  const group = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });
  
  return (
    <group ref={group}>
      {/* Cake Layers */}
      <CakeLayer position={[0, 0, 0]} radius={1.5} height={0.7} color="#FFEBCD" texture="/textures/vanilla_cake.jpg" />
      <CakeLayer position={[0, 0.7, 0]} radius={1.3} height={0.7} color="#FFEBCD" texture="/textures/vanilla_cake.jpg" />
      <CakeLayer position={[0, 1.4, 0]} radius={1.1} height={0.7} color="#8B4513" texture="/textures/chocolate_cake.jpg" />
      
      {/* Toppings */}
      <Topping position={[0.8, 2.2, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
      <Topping position={[-0.7, 2.4, 0.5]} scale={[0.8, 0.8, 0.8]} rotation={[0, 0, 0]} />
      <Topping position={[0, 2.5, -0.6]} scale={[1.2, 1.2, 1.2]} rotation={[0, 0, 0]} />
    </group>
  );
};

// CakeCanvas Component
const CakeCanvas = () => {
  return (
    <Cake 
      layers={[
        { level: 1, flavor: 'vanilla', height: 0.7 },
        { level: 2, flavor: 'vanilla', height: 0.7 },
        { level: 3, flavor: 'chocolate', height: 0.7 }
      ]}
      toppings={[
        { type: 'cherry', position: [0.8, 2.2, 0] },
        { type: 'sprinkles', position: [-0.7, 2.4, 0.5] },
      ]}
      frosting="buttercream"
    />
  );
};

export default CakeCanvas;
