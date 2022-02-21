import React, { FunctionComponent, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import PlaneStatus from "../../../models/PlaneStatus";
import lerp from "../../../utils/lerp";

import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";

export interface IPlane {
    planeStatus: PlaneStatus;
}

const Plane: FunctionComponent<IPlane> = ({ planeStatus }) => {
    const { viewport } = useThree();
    const meshRef = useRef<THREE.Mesh>();
    const meshPositionYRef = useRef<number>();
    const materialRef = useRef<THREE.ShaderMaterial>();
    const uniforms = useMemo(
        () => ({
            u_shift: { value: 0 },
        }),
        []
    );

    useFrame(() => {
        const mesh = meshRef.current;
        const material = materialRef.current;
        let meshPositionY = meshPositionYRef.current;

        meshPositionY = mesh.position.y;

        if (mesh && material) {
            switch (planeStatus) {
                case PlaneStatus.goIn:
                    mesh.position.y = lerp(mesh.position.y, 0, 0.08);
                    material.uniforms.u_shift.value = lerp(material.uniforms.u_shift.value, (mesh.position.y - meshPositionY) / 120, 0.1);
                    break;
                case PlaneStatus.goOut:
                    mesh.position.y = lerp(mesh.position.y, viewport.height * 1.1, 0.08);
                    material.uniforms.u_shift.value = lerp(material.uniforms.u_shift.value, (meshPositionY - mesh.position.y) / 120, 0.1);
                    break;
                default:
                    mesh.position.y = -viewport.height * 1.1;
            }
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width, viewport.height * 1.1, 1]} position={[0, -viewport.height * 1.1, 0]}>
            <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
            <shaderMaterial ref={materialRef} attach="material" vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
        </mesh>
    );
};

export default Plane;
