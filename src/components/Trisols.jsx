import '../index.css';
import { Canvas } from '@react-three/fiber';

const Trisols = () => {
    return (
        <div className="canvas-trisols">
        <Canvas camera={{ position: [0, 0, 50], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <mesh>
                <sphereGeometry args={[5,20,20]} />
                <meshStandardMaterial wireframe color="orange" />
            </mesh>
        </Canvas>
        </div>
    )
}

export default Trisols;