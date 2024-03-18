"use client";
import { useScroll, useTransform } from "framer-motion";
import React, {useRef} from "react";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";
import NavBar from "@/components/ui/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

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
    <NavBar />
    <main className="flex min-h-screen">
      {/* <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}/>
      </div> */}
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row text-white px-4 max-w-screen-xl">
            {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Gradients X Animations
            </p> */}
            <div className="mr-10 flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">Lorem ipsum dolar delta</h1>
              <p className="text-xl md:text-3xl lg:text-5xl">Text sample stuff here</p>
              <button className="bg-white/10 py-3 px-6 mt-10 rounded-full font-bold outline outline-1">Request beta access</button>
            </div>
            <div className="flex-1 pointer-events-none">
              {/* <div >
                <iframe src="https://giphy.com/embed/7OXm7rFOJ0ARoeXOCV" width="100%" height="100%" className="absolute giphy-embed" frameBorder="0" allowFullScreen></iframe>
              </div> */}
              {/* <p><a href="https://giphy.com/gifs/warcraft-video-games-world-of-warcraft-7OXm7rFOJ0ARoeXOCV">via GIPHY</a></p> */}
              <div>Speech bubble 1</div>
              <div>Speech bubbble 2 - Lorem ipsum dolar delta</div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
    </>
);
}
