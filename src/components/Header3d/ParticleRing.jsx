import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import Hero from "../Hero/Hero";

const ParticleRing = () => {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* We create enough scroll space for zoom */}
      <div >
        <Canvas
          camera={{ position: [40, -10, 60], fov: 50  }}
          style={{  height: "100vh" }}
          className="bg-slate-900"
        >
          <OrbitControls enabled={false} maxDistance={30} minDistance={15}/>
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <ScrollZoom scrollRef={scrollRef} />
          <PointCircle />
        </Canvas>
      </div>

      {/* Hero section will appear below 100vh scroll */}
      <div id="hero-section">
        <Hero />
      </div>
    </div>
  );
};

const ScrollZoom = ({ scrollRef }) => {
  const { camera } = useThree();

  useFrame(() => {
    const scrollY = scrollRef.current;

    const maxScroll = window.innerHeight;
    const t = Math.min(scrollY / maxScroll, 1); // value between 0 and 1

    // Interpolate from [200, -50.5, 200] to [0, 0, 20]
    camera.position.x = 40 * (1 - t);
    camera.position.y = -10 * (1 - t);
    camera.position.z = 60 * (1 - t) + 20 * t;
    camera.updateProjectionMatrix();
  });

  return null;
};

const PointCircle = () => {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to -1 to 1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (ref.current) {
      // Smooth lerp to target rotation
      ref.current.rotation.z += 0.005; // keep spinning
      ref.current.rotation.y += (mouse.current.x * 0.5 - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (mouse.current.y * 0.5 - ref.current.rotation.x) * 0.05;

    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};


const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
