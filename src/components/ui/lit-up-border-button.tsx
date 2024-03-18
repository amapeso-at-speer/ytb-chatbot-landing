import React, { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export const LitUpBorderButton: React.FC<Props> = ({
  onClick,
  children,
}) => {
  return (
    <button className="p-[3px] relative" onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"/>
      <div
        className="px-4 py-2  button-color rounded-full  relative group transition duration-200 text-white hover:bg-transparent font-sans lg:text-base md:text-sm text-xs"
      >
        {children}
      </div>
    </button>
  )
}
