"use client";
import { useScroll, useTransform } from "framer-motion";
import React, {useRef} from "react";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";
import NavBar from "@/components/ui/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";
import SpeechBubble from "@/components/ui/speech-bubble/speech-bubble";
import { cn } from "@/utils/cn";

export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
    <main className="flex min-h-screen">
      <NavBar/>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row text-white px-4 max-w-screen-xl items-center">
            {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Gradients X Animations
            </p> */}
            <div className="mr-10 flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">Elaborate</h1>
              <p className="text-xl md:text-2xl lg:text-3xl">your curiosity</p>
              <p className="text-xl md:text-3xl lg:text-4xl pt-10 text-zinc-400">dive deep with our AI chat on YouTube videos</p>
              <button className="bg-white/10 py-3 px-6 mt-10 rounded-full font-bold outline outline-1">Request beta access</button>
            </div>
            <div className="hidden md:flex flex-col flex-1 pointer-events-none ">
              <SpeechBubble
                className={
                  cn("w-9/12 self-end", 'animate-hovering')} 
                text={"Hey there! I just watched this fascinating YouTube video about quantum computing. Can you tell me more about it?"}/>
              <SpeechBubble
                className={
                  cn("mt-10 w-9/12", "animate-hovering")}
                text={"Of course! Quantum computing is a field that utilizes the principles of quantum mechanics to perform operations on data."}
                isReply/>
              <SpeechBubble
                className={
                  cn("mt-10 w-9/12 self-end", "animate-hovering")}
                text={"Wow, that sounds mind-blowing! But how exactly does it differ from traditional computing?"}/>
              <SpeechBubble 
                className={cn("mt-10 w-9/12", "animate-hovering")}
                text={"In traditional computing, bits can only exist in one state at a time, either 0 or 1. However, qubits can exist in a superposition of both states simultaneously, exponentially increasing the computational power of quantum computers."}
                isReply/>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
    </>
  );
}
