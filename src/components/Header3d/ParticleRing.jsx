import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Instances, Instance } from "@react-three/drei";
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
      <Canvas
        camera={{ position: [40, -5, 60], fov: 50 }}
        style={{ height: "80vh" }}
        className="bg-slate-900"
      >
        <OrbitControls enabled={false} maxDistance={10} minDistance={5} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <ScrollZoom scrollRef={scrollRef} />
        <PointCircle />
      </Canvas>

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
    const t = Math.min(scrollY / maxScroll, 1);

    camera.position.x = 10 * (1 - t);
    camera.position.y = 0;
    camera.position.z = 40 * (1 - t) + 20 * t;
    camera.updateProjectionMatrix();
  });

  return null;
};

const PointCircle = () => {
  const groupRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  // 🧠 Combine and slice for performance
  const allPoints = useMemo(
    () => [...pointsInner.slice(0, 1500), ...pointsOuter.slice(0, 500)],
    []
  );

  // ✅ useMemo for geometry and material
  const geometry = useMemo(() => new THREE.SphereGeometry(0.1, 6, 6), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        roughness: 0.5,
        emissiveIntensity: 0.5,
      }),
    []
  );

  // ✅ Optimized mouse move listener (1 per frame)
  useEffect(() => {
    let raf;
    const handleMouseMove = (event) => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raf = null;
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.005;
      groupRef.current.rotation.y +=
        (mouse.current.x * 0.5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (mouse.current.y * 0.5 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Instances
        geometry={geometry}
        material={material}
        limit={allPoints.length}
        castShadow
        receiveShadow
      >
        {allPoints.map((point) => (
          <Instance
            key={point.idx}
            position={point.position}
            color={point.color}
            emissive={point.color}
          />
        ))}
      </Instances>
    </group>
  );
};

export default React.memo(ParticleRing);
