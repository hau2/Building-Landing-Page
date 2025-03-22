// hooks/useInViewAnimation.ts
"use client"
import { useEffect } from "react";
import { useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function useInViewAnimation(
  threshold = 0.2
): [AnimationControls, React.RefCallback<Element>] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [controls, ref];
}
