import '../index.css';
import { Canvas } from '@react-three/fiber';

const Trisols = () => {
    const Sois = [
      { position: [0, 0, -10], color: 'red', size: 20 },
      { position: [0, 5, 10], color: 'orange', size: 10 },
      { position: [0, 1, 20], color: 'yellow', size: 5 },
    ];
  
    return (
      <div className="canvas-trisols">
        <Canvas camera={{ position: [0, 0, 70], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
  
          {Sois.map((sol, i) => (
            <mesh key={i} position={sol.position}>
              <sphereGeometry args={[sol.size, 15, 15]} />
              <meshStandardMaterial color={sol.color} />
            </mesh>
          ))}
        </Canvas>
      </div>
    );
  };
  
  export default Trisols;