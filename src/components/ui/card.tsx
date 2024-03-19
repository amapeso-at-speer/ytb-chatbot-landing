import React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"flex-1 backdrop-blur-sm bg-dark-blue/20 p-5 rounded-md outline outline-1 outline-light-blue " + className}>
      {children}
    </div>
  );
}