"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedDivider() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            className="w-full h-[1px] bg-gray-300 overflow-hidden my-8"
            ref={ref}
        >
            <div
                className={`h-full bg-blue-900 transition-all duration-1000 ${
                    isVisible ? "expand-line" : "w-0"
                }`}
            ></div>
        </div>
    );
}
