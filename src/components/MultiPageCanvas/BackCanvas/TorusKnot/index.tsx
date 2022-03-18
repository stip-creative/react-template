import { useFrame, useThree } from "@react-three/fiber";
import React, { FunctionComponent, useRef } from "react";

const TorusKnotGeometry: FunctionComponent = () => {
    const { viewport } = useThree();
    const meshRef = useRef<THREE.Mesh>();

    useFrame(() => {
        const mesh = meshRef.current;

        if (mesh) {
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width / 96, viewport.width / 96, viewport.width / 96]} position={[0, 0, -700]}>
            <torusKnotGeometry attach="geometry" args={[10, 3, 100, 16]} />
            <meshStandardMaterial color="#f2deb5" />
        </mesh>
    );
};

export default TorusKnotGeometry;
