"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
    text: string;
    onComplete?: () => void;
    className?: string;
};

export default function AnimatedText({ text, onComplete, className }: Props) {
    const calledRef = useRef(false); // tránh gọi onComplete nhiều lần
    const words = text.split(" ");

    useEffect(() => {
        const totalDelay =
            (words.length * 4 + text.length) * 0.008 * 1000 + 100;
        const timeout = setTimeout(() => {
            if (!calledRef.current && onComplete) {
                calledRef.current = true;
                onComplete();
            }
        }, totalDelay);

        return () => clearTimeout(timeout);
    }, [text, onComplete, words.length]);

    return (
        <p className={className}>
            {words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-[0.25em]">
                    {word.split("").map((char, charIdx) => (
                        <motion.span
                            key={charIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: (wordIdx * 4 + charIdx) * 0.008,
                                duration: 0.06,
                                ease: "easeOut",
                            }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </p>
    );
}
