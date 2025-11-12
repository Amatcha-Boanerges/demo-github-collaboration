"use client";

import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const RotatingCube = ({ 
  size = 100, 
  startX = 50, 
  startY = 50, 
  speed = 1,
  colors = {
    front: 'rgba(245, 1, 1, 0.6)',
    back: 'rgba(68, 9, 10, 0.6)',
    left: 'rgba(200, 0, 0, 0.6)',
    right: 'rgba(150, 0, 0, 0.6)',
    top: 'rgba(255, 50, 50, 0.6)',
    bottom: 'rgba(100, 0, 0, 0.6)',
  }
}: {
  size?: number;
  startX?: number;
  startY?: number;
  speed?: number;
  colors?: {
    front: string;
    back: string;
    left: string;
    right: string;
    top: string;
    bottom: string;
  };
}) => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!cubeRef.current) return;

    const rotate = Math.sin(t / 10000 * speed) * 200;
    const y = (1 + Math.sin(t / 1000 * speed)) * -30;
    cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div 
      className="absolute"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        perspective: '800px',
        width: size,
        height: size,
      }}
    >
      <div
        ref={cubeRef}
        style={{
          width: size,
          height: size,
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="absolute w-full h-full"
          style={{
            transform: `rotateY(0deg) translateZ(${size / 2}px)`,
            backgroundColor: colors.front,
          }}
        />
        <div 
          className="absolute w-full h-full"
          style={{
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            backgroundColor: colors.right,
          }}
        />
        <div 
          className="absolute w-full h-full"
          style={{
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            backgroundColor: colors.back,
          }}
        />
        <div 
          className="absolute w-full h-full"
          style={{
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            backgroundColor: colors.left,
          }}
        />
        <div 
          className="absolute w-full h-full"
          style={{
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            backgroundColor: colors.top,
          }}
        />
        <div 
          className="absolute w-full h-full"
          style={{
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            backgroundColor: colors.bottom,
          }}
        />
      </div>
    </div>
  );
};

export default function Hero() {
  const cubes = [
    { size: 80, startX: 10, startY: 20, speed: 1 },
    { size: 120, startX: 25, startY: 60, speed: 0.8 },
    { size: 60, startX: 45, startY: 15, speed: 1.2 },
    { size: 100, startX: 70, startY: 40, speed: 0.9 },
    { size: 90, startX: 85, startY: 70, speed: 1.1 },
    { size: 70, startX: 40, startY: 80, speed: 1.3 },
    { size: 110, startX: 60, startY: 30, speed: 0.7 },
    { size: 85, startX: 15, startY: 50, speed: 1.4 },
  ];

  return (
     <main className="relative h-screen w-full overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-luzhaven-dark to-black" />
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated 3D Cubes */}
      <div className="absolute inset-0">
        {cubes.map((cube, index) => (
          <RotatingCube key={index} {...cube} />
        ))}
      </div>

      {/* Dark Overlay for Content Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Logo / Partner info */}
        <div className="absolute top-6 left-40 flex items-center gap-2 text-white font-medium">
          <Image src="/car.svg" alt="Car" width={25} height={25} />
          <span className="font-bold">Luzhaven</span>
          <span className="text-xs">× Yango Partner</span>
        </div>

        {/* Main Text */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-primary">
          <span className="text-white">Work with a partner who truly</span>
          <br />
          <span className="text-luzhaven-red">has your back.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-2">
          Tired of being blamed for every issue or left waiting when you need help? With Luzhaven, you get real support, better earnings, and rewards that actually mean something.
        </p>
        </div>
        {/* Button */}
        <a
          href="#apply"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Apply Now. Start Earning. →
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 flex flex-col items-center text-gray-300">
          <span className="text-sm mb-2">Scroll to apply</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-1 animate-bounce" />
          </div>
        </div>
      </div>
    </main>
  );
}