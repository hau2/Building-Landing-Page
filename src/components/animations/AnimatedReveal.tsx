/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

function AnimatedReveal({
  children,
  direction = "up",
  distance = 40,
  duration = 0.6,
  delay = 0,
  once = true,
  threshold = 0.1,
}: AnimatedRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  });

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getOffset() }}
      animate={
        inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getOffset() }
      }
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <AnimatedReveal direction="up" {...props}>
      {children}
    </AnimatedReveal>
  );
}

export function FadeDown({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <AnimatedReveal direction="down" {...props}>
      {children}
    </AnimatedReveal>
  );
}

export function FadeLeft({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <AnimatedReveal direction="left" {...props}>
      {children}
    </AnimatedReveal>
  );
}

export function FadeRight({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <AnimatedReveal direction="left" {...props}>
      {children}
    </AnimatedReveal>
  );
}
