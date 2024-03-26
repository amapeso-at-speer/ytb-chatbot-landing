import React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"card flex-1 backdrop-blur-sm bg-dark-blue/20 p-5 rounded-md relative " + className}>
      {children}
    </div>
  );
}