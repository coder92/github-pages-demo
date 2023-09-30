import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import THREE, { Box3, Mesh, MeshBasicMaterial, Vector3 } from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from '@react-three/drei';

function App() {

  const stlFileRef = useRef<HTMLInputElement | null>(null);
  const [stlModel, setStlModel] = useState<Mesh | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const loader = new STLLoader();
      loader.load(URL.createObjectURL(file), (geometry) => {
        geometry.computeBoundingBox();
        const material = new MeshBasicMaterial({ color: '#ded9d5' });
        const mesh = new Mesh(geometry, material);
        geometry.center();
        mesh.position.set(0, 0, 0); // Adjust position as needed

        const box = new Box3().setFromObject(mesh);
        const size = new Vector3();
        box.getSize(size);
        const maxSize = Math.max(size.x, size.y, size.z);
        const scale = 1 / maxSize;

        // Apply the scale factor to the mesh
        mesh.scale.set(scale, scale, scale);

        setStlModel(mesh);

        console.log(mesh)
        // const volume = THREE.GeometryUtils.triangleArea(geometry);
        // const area = THREE.GeometryUtils.triangleArea(geometry);

        //const volume = new Volume(mesh.geometry);
        //const area = new Area(mesh.geometry);

        //console.log('Volume:', volume);
        //console.log('Surface Area:', area);
      });
    }
  };

  return (
    <div >
      <input
        type="file"
        accept=".stl"
        ref={(el) => (stlFileRef.current = el)}
        onChange={handleFileUpload}
      />
      <Canvas style={{ height: '1000px', width: '720px' }} camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[1, 10, 10]} />
        <OrbitControls />
        {stlModel && <primitive object={stlModel} />}
      </Canvas>
    </div>
  );
};

export default App;
