"use client";
import { useScroll, useTransform } from "framer-motion";
import React, {useRef} from "react";
import { HiOutlineLightBulb, HiOutlineDocumentSearch  } from "react-icons/hi";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BiConversation } from "react-icons/bi";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";
import NavBar from "@/components/ui/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";
import SpeechBubble from "@/components/ui/speech-bubble/speech-bubble";
import { cn } from "@/utils/cn";
import Card from "@/components/ui/card";
import "./page.css";
import Link from "next/link";

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
      <BackgroundGradientAnimation className="min-h-screen flex">
        <div className="flex flex-col flex-1 z-50">
          <NavBar/>
          <div className="inset-0 flex flex-1 items-center justify-center p-5">
            <div className="flex flex-col md:flex-row text-white px-4 max-w-screen-xl items-center">
              {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Gradients X Animations
              </p> */}
              <div className="mr-0 md:mr-10 flex flex-col flex-1">
                <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-7xl font-bold">Elaborate</h1>
                <p className="text-center md:text-left text-xl md:text-2xl lg:text-3xl">on your curiosity</p>
                <p className="text-center md:text-left text-xl md:text-3xl lg:text-4xl pt-10 text-zinc-400">dive deep with our AI chat on YouTube videos</p>
                <Link
                  href="/access-form"
                  className="self-center md:self-start bg-white/10 py-3 px-6 mt-10 rounded-full font-bold outline outline-1 transition-all hover:bg-white hover:text-light-blue">
                  Request beta access
                </Link>
                {/* <button className="md:hidden mt-3 opacity-70 transition duration-300 text-white hover:opacity-100">Sign In</button> */}
              </div>
              <div className="hidden md:flex flex-col flex-1 mb-20">
                <SpeechBubble
                  className={
                    cn("w-9/12 self-end", 'animate-hovering')} 
                  text={"Hey there! I just watched this fascinating YouTube video about quantum computing. Can you tell me more about it?"}/>
                <SpeechBubble
                  className={
                    cn("mt-10 w-9/12", "animate-hovering")}
                  text={"Of course! Quantum computing is a field that utilizes the principles of quantum mechanics to perform operations on data."}
                  isReply
                  delay={400}
                />
                <SpeechBubble
                  className={
                    cn("mt-10 w-9/12 self-end", "animate-hovering")}
                  text={"Wow, that sounds mind-blowing! But how exactly does it differ from traditional computing?"}
                  delay={400 + 300}
                />
                <SpeechBubble 
                  className={cn("mt-10 w-9/12", "animate-hovering")}
                  text={"In traditional computing, bits can only exist in one state at a time, either 0 or 1. However, qubits can exist in a superposition of both states simultaneously, exponentially increasing the computational power of quantum computers."}
                  isReply
                  delay={400 + 300 + 100}
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <section className="cards flex flex-col md:flex-row justify-between p-5 w-full max-w-screen-xl z-[100]">
        <Card className="mr-0 mb-10 md:mr-10 md:mb-0">
          <div className="flex align-center mb-3">
            <HiOutlineLightBulb className="card-icon"/>
            <h2 className="font-bold text-xl">Instant Video Insights</h2>
          </div>
          <p className="text-white/50">Get quick and accurate summaries of YouTube videos on various topics.</p>
        </Card>
        <Card className="mr-0 mb-10 md:mr-10 md:mb-0">
          <div className="flex align-center mb-3">
            <HiOutlineDocumentSearch className="card-icon"/>
            <h2 className="font-bold text-xl">Video Analysis</h2>
          </div>
          <p className="text-white/50">Receive detailed analyses and breakdowns of video content, including themes, trends, and important points.</p>
        </Card>
        <Card>
          <div className="flex align-center mb-3">
            <BiConversation className="card-icon"/>
            <h2 className="font-bold text-xl">Interactive Experience</h2>
          </div>
          <p className="text-white/50">Engage in conversational interactions, ask follow-up questions, and explore further insights effortlessly.</p>
        </Card>
      </section>
    </>
  );
}
