"use client";
import { useScroll, useTransform } from "framer-motion";
import React, {useRef} from "react";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";
import NavBar from "@/components/ui/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";

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
        <div
          className="absolute z-50 inset-0 flex-col md:flex-row flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Gradients X Animations
          </p> */}
          <h1 className="font-sans">Lorem ipsum dolar delta</h1>
          {/* <p>Text sample stuff here</p>
          <button>Some random button</button> */}
          <div className=" pb-2 items-center flex flex-col md:hidden pt-20">
            <LitUpBorderButton>
              Request beta access
            </LitUpBorderButton>
            <button className="p-[3px] md:pr-5 pt-5">
              <div
                className="px-4 py-2  bg-transparent rounded-full  relative group transition duration-200 text-white hover:opacity-30 font-sans lg:text-base md:text-sm text-xs"
              >
                Sign In
              </div>
            </button>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
    </>
  );
}
