"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  amount?: number;
  once?: boolean;
};

const directionOffset = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.15,
  once = true,
}: Props) {
  const offset = direction === "up" || direction === "down" ? directionOffset[direction].y : directionOffset[direction].x;
  const axis = direction === "up" || direction === "down" ? "y" : "x";

  return (
    <motion.div
      initial={{
        opacity: 0,
        [axis]: offset,
      }}
      whileInView={{
        opacity: 1,
        [axis]: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
