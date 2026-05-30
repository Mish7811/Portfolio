/**
 * Ultra Smooth Wavy Background (GPU Accelerated)
 * No external deps. Works with React + Vite + Tailwind.
 */

import React, { useMemo } from "react";

export interface WavyBackgroundProps {
  backgroundFill?: string;
  colors?: string[];
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "normal" | "fast" | number;
  waveOpacity?: number;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  backgroundFill = "black",
  colors = ["#4ecdc4", "#45b7d1", "#96ceb4"],
  waveWidth = 60,
  blur = 14,
  speed = "normal",
  waveOpacity = 0.6,
  className = "",
  containerClassName = "",
  children,
}) => {
  // Convert speed string → seconds
  const duration = useMemo(() => {
    if (typeof speed === "number") return speed;
    if (speed === "slow") return 18;
    if (speed === "fast") return 6;
    return 12; // normal
  }, [speed]);

  // Generate paths
  const layers = useMemo(() => {
    return colors.slice(0, 5).map((color, i) => {
      const offset = i * 15;
      const path = `
        M0,200 
        C ${200 + waveWidth + offset},${180 - offset} 
          ${600 - waveWidth},${220 + offset} 
          900,200 
        C 1100,180 
          ${1400 - waveWidth},${250 - offset} 
          1600,200 
        L1600,400 L0,400 Z
      `;
      return { path, color, opacity: waveOpacity - i * 0.1 };
    });
  }, [colors, waveWidth, waveOpacity]);

  return (
    <div
      className={containerClassName}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: backgroundFill,
      }}
    >
      <svg
        className={className}
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          filter: `blur(${blur}px)`,
        }}
      >
        {layers.map((layer, i) => (
          <g
            key={i}
            style={{
              animation: `waveMove${i} ${duration + i * 2}s ease-in-out infinite`,
              transformOrigin: "50% 50%",
            }}
          >
            <path
              d={layer.path}
              fill={layer.color}
              fillOpacity={Math.max(layer.opacity, 0)}
            />
          </g>
        ))}

        <style>
          {layers
            .map(
              (_, i) => `
            @keyframes waveMove${i} {
              0%   { transform: translateX(0px) translateY(0px); }
              50%  { transform: translateX(-40px) translateY(8px); }
              100% { transform: translateX(0px) translateY(0px); }
            }
          `
            )
            .join("\n")}
        </style>
      </svg>

      {children}
    </div>
  );
};

export default WavyBackground;
