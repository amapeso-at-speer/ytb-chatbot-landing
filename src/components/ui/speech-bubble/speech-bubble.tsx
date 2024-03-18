import React from "react";
import "./speech-bubble.css";

export default function SpeechBubble({
  text = "",
  isReply = false,
  className="",
}: {
  text?: string;
  isReply?: boolean;
  className?: string;
}) {
  return (
    <div
      className={(className + " " ?? "") +
        "speech-wrapper bg-blue p-5 rounded-lg outline outline-1" +
        (isReply ? " speech-reply" : "")}
      style={{animationDelay: `${Math.random()}s`}}
    >
      <p>{text}</p>
    </div>
  );
}