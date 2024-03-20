"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  textClassName,
  delay,
}: {
  words: string;
  className?: string;
  textClassName?: string;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.35,
          delay: stagger(0.02),
        }
      );
    }, delay ?? 0);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div className="text-ellipsis" ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn(textClassName, "opacity-0")}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div>
        <div className={"leading-snug tracking-wide"}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
