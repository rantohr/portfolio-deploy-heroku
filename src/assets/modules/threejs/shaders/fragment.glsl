precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float random(in float x) {
    return fract(sin(x) * 43758.5453);
}

float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float rchar(in vec2 outer, in vec2 inner) {
    float grid = 15.;
    vec2 margin = vec2(.2, .05);
    float seed = 10.;
    vec2 borders = step(margin, inner) * step(margin, 1. - inner);
    return step(.5, random(outer * seed + floor(inner * grid))) * borders.x * borders.y;
}

vec3 matrix(in vec2 st) {
    float rows = 120.0;
    vec2 ipos = floor(st * rows);

    ipos += vec2(.0, floor(u_time * 20. * random(ipos.x)));

    vec2 fpos = fract(st * rows);
    vec2 center = (.5 - fpos);

    float pct = random(ipos);
    float glow = (1. - dot(center, center) * 3.) * 2.0;

    vec3 color = vec3(0.643,0.851,0.690) * ( rchar(ipos,fpos) * pct );
    color +=  vec3(1) * pct * glow;
    // return vec3(rchar(ipos, fpos) * pct * glow);
    return color;
}

void main() {
    vec2 st = gl_FragCoord.st / u_resolution.xy;
    st.y *= u_resolution.y / u_resolution.x;
    // vec3 color = vec3(0.14, 0.15, 0.15);
    vec3 color = vec3(0.14, 0.15, 0.15);

    color = matrix(st);
    gl_FragColor = vec4(0.12 - color, 1.0);
}