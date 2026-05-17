"use client";

import { useEffect, useRef, useState } from "react";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

const WORLD_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GlobeProps {
  isLight: boolean;
}

export function GlobeCanvas({ isLight }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [worldData, setWorldData] = useState<GeoJSON.FeatureCollection | null>(null);
  const rotationRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Fetch world topojson once
  useEffect(() => {
    let cancelled = false;
    fetch(WORLD_URL)
      .then((r) => r.json())
      .then((topo: Topology) => {
        if (cancelled) return;
        const countries = feature(topo, topo.objects.countries as GeometryCollection);
        setWorldData(countries as unknown as GeoJSON.FeatureCollection);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  // Animate
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !worldData) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const graticule = geoGraticule().step([20, 20]);

    function draw() {
      if (!canvas || !ctx || !worldData) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const size = Math.min(rect.width, rect.height);
      const radius = size * 0.62;

      const projection = geoOrthographic()
        .scale(radius)
        .translate([rect.width / 2, rect.height / 2])
        .rotate([rotationRef.current, -15, 0])
        .clipAngle(90);

      const pathGen = geoPath(projection, ctx);

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Globe background circle (ocean)
      ctx.beginPath();
      ctx.arc(rect.width / 2, rect.height / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? "rgba(115, 138, 110, 0.02)" : "rgba(142, 165, 140, 0.03)";
      ctx.fill();

      // Graticule (grid lines)
      ctx.beginPath();
      pathGen(graticule());
      ctx.strokeStyle = isLight ? "rgba(115, 138, 110, 0.06)" : "rgba(142, 165, 140, 0.07)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Country boundaries
      ctx.beginPath();
      pathGen({ type: "FeatureCollection", features: worldData.features } as GeoJSON.FeatureCollection);
      ctx.fillStyle = isLight ? "rgba(115, 138, 110, 0.04)" : "rgba(142, 165, 140, 0.06)";
      ctx.fill();
      ctx.strokeStyle = isLight ? "rgba(115, 138, 110, 0.12)" : "rgba(142, 165, 140, 0.15)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // Globe outline
      ctx.beginPath();
      ctx.arc(rect.width / 2, rect.height / 2, radius, 0, Math.PI * 2);
      ctx.strokeStyle = isLight ? "rgba(115, 138, 110, 0.08)" : "rgba(142, 165, 140, 0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();

      rotationRef.current += 0.08;
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [worldData, isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 right-0 h-full pointer-events-none"
      style={{ width: "75%", height: "120%", top: "-10%" }}
      aria-hidden
    />
  );
}
