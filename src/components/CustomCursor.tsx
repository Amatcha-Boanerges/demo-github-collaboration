"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.style.cursor === "pointer" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;
      
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="relative"
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isPointer ? 0.5 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="w-8 h-8 rounded-full border-2 border-white"
            style={{
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        </motion.div>

        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            scale: isPointer ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="w-2 h-2 rounded-full bg-white"
            style={{
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
