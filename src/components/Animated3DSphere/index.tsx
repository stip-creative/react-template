import React, { FunctionComponent } from "react";
import { Canvas } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

import StyledCanvasWrapper from "./style";

const Blob: FunctionComponent<{ size: number }> = ({ size }) => {
    return (
        <group dispose={null} rotation={[0, Math.PI / 4, -Math.PI / 4]}>
            <Icosahedron args={[size, 48]}>
                <meshBasicMaterial attach="material" color="hotpink" />
            </Icosahedron>
        </group>
    );
};

const Animated3DSphere: FunctionComponent = () => {
    return (
        <StyledCanvasWrapper>
            <Canvas>
                <ambientLight />
                <Blob size={2.75} />
            </Canvas>
        </StyledCanvasWrapper>
    );
};

export default Animated3DSphere;
