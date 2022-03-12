uniform float u_shift;
varying vec2 vUv;

void main() {
    float PI = 3.14159265359;
    vec3 pos = position;
    pos.y = pos.y + ((sin(uv.x * PI) * u_shift * 5.0) * 0.125);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}