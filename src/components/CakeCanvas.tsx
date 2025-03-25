
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// Cake Layer Component
const CakeLayer = ({ position, radius, height, color, texture }) => {
  const meshRef = useRef();
  const textureMap = texture ? useTexture(texture) : null;
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <cylinderGeometry args={[radius, radius, height, 64]} />
      <meshStandardMaterial 
        color={color} 
        map={textureMap} 
        roughness={0.3} 
        metalness={0.1}
      />
    </mesh>
  );
};

// Topping Component
const Topping = ({ position, scale, rotation, model }) => {
  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#FF3366" />
    </mesh>
  );
};

// Main Cake Component
const Cake = ({ layers, toppings, frosting }) => {
  const group = useRef();
  
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  let currentHeight = 0;
  
  return (
    <group ref={group}>
      {/* Plate */}
      <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.1, 64]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Cake Layers */}
      {layers.map((layer, index) => {
        const layerPosition = [0, currentHeight + layer.height / 2, 0];
        currentHeight += layer.height;
        
        return (
          <CakeLayer 
            key={index}
            position={layerPosition}
            radius={layer.radius}
            height={layer.height}
            color={layer.color}
            texture={layer.texture}
          />
        );
      })}
      
      {/* Toppings */}
      {toppings.map((topping, index) => (
        <Topping 
          key={index}
          position={topping.position}
          scale={topping.scale}
          rotation={topping.rotation}
          model={topping.model}
        />
      ))}
    </group>
  );
};

// Scene Setup
const CakeScene = ({ cakeConfig }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <spotLight position={[-10, 5, -10]} angle={0.15} penumbra={1} intensity={0.5} />
      
      <Cake 
        layers={cakeConfig.layers}
        toppings={cakeConfig.toppings}
        frosting={cakeConfig.frosting}
      />
      
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={10}
      />
      <Environment preset="sunset" />
    </>
  );
};

// Main Component
const CakeCanvas = ({ onSaveImage }) => {
  const [cakeConfig, setCakeConfig] = useState({
    layers: [
      { radius: 1.5, height: 0.7, color: '#F5D0C5', texture: null },
      { radius: 1.3, height: 0.7, color: '#F7E2CF', texture: null },
      { radius: 1.0, height: 0.7, color: '#F5D0C5', texture: null },
    ],
    toppings: [
      { position: [0, 2.4, 0], scale: [1, 1, 1], rotation: [0, 0, 0], model: 'cherry' },
      { position: [0.6, 2.2, 0.6], scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], model: 'cherry' },
      { position: [-0.6, 2.2, -0.6], scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], model: 'cherry' },
      { position: [-0.6, 2.2, 0.6], scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], model: 'cherry' },
      { position: [0.6, 2.2, -0.6], scale: [0.7, 0.7, 0.7], rotation: [0, 0, 0], model: 'cherry' },
    ],
    frosting: {
      color: '#FFFFFF',
      texture: null
    }
  });

  // Cake Customization Options
  const layerColors = [
    { name: 'Pink', value: '#F5D0C5' },
    { name: 'Vanilla', value: '#F7E2CF' },
    { name: 'Chocolate', value: '#5C4033' },
    { name: 'Red Velvet', value: '#A91B0D' },
    { name: 'Matcha', value: '#88B04B' },
    { name: 'Blueberry', value: '#6B7CB4' },
  ];

  const handleLayerColorChange = (layerIndex, color) => {
    const updatedLayers = [...cakeConfig.layers];
    updatedLayers[layerIndex].color = color;
    setCakeConfig({ ...cakeConfig, layers: updatedLayers });
  };

  const handleAddLayer = () => {
    if (cakeConfig.layers.length >= 5) {
      toast.warning("Maximum 5 layers allowed");
      return;
    }
    
    const lastLayer = cakeConfig.layers[cakeConfig.layers.length - 1];
    const newRadius = Math.max(lastLayer.radius - 0.3, 0.5);
    
    setCakeConfig({
      ...cakeConfig,
      layers: [
        ...cakeConfig.layers,
        { radius: newRadius, height: 0.7, color: layerColors[0].value, texture: null }
      ]
    });
  };

  const handleRemoveLayer = () => {
    if (cakeConfig.layers.length <= 1) {
      toast.warning("At least one layer is required");
      return;
    }
    
    const updatedLayers = [...cakeConfig.layers];
    updatedLayers.pop();
    setCakeConfig({ ...cakeConfig, layers: updatedLayers });
  };

  const captureCanvas = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      onSaveImage(dataUrl);
      
      // Create a temporary link to download the image
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'my-custom-cake.png';
      link.click();
      
      toast.success("Image saved successfully!");
    } else {
      toast.error("Failed to capture canvas");
    }
  };

  return (
    <div className="cake-canvas-container">
      <Canvas shadows>
        <CakeScene cakeConfig={cakeConfig} />
      </Canvas>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cake-builder-controls absolute bottom-4 left-4 right-4 p-4"
      >
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {cakeConfig.layers.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-xs mb-1">Layer {index + 1}</span>
                <div className="flex gap-1">
                  {layerColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleLayerColorChange(index, color.value)}
                      className="w-6 h-6 rounded-full transition-transform hover:scale-110"
                      style={{ backgroundColor: color.value, border: cakeConfig.layers[index].color === color.value ? '2px solid black' : '1px solid #ddd' }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleRemoveLayer}
              className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
            >
              Remove Layer
            </button>
            <button
              onClick={handleAddLayer}
              className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
            >
              Add Layer
            </button>
            <button
              onClick={captureCanvas}
              className="px-3 py-1 bg-primary text-white rounded-md text-sm hover:bg-primary/90"
            >
              Save Cake
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CakeCanvas;
