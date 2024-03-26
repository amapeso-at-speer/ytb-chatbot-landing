import React, { useEffect, useState } from "react";
import "./speech-bubble.css";
import { TextGenerateEffect } from "../text-generate-effect";
import { RiRobot2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

export default function SpeechBubble({
  text = "",
  isReply = false,
  className="",
  delay = 0,
}: {
  text?: string;
  isReply?: boolean;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={(className + " " ?? "") +
        "speech-wrapper relative bg-dark-blue p-5 rounded-lg outline outline-1" +
        (isReply ? " speech-reply" : "")}
      style={{animationDelay: `${Math.random()}s`}}
    >
      <div className={"absolute speech-icon-wrapper " + (isReply ? "robo" : "person")}>
        {isReply ? <RiRobot2Line className="speech-icon" /> : <IoPersonOutline className="speech-icon" />}
      </div>
      <TextGenerateEffect textClassName="text-sm lg:text-base" delay={delay} words={text} />
    </div>
  );
}