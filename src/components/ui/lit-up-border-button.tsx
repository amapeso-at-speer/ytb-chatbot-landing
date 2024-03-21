import React, { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isFormButton?: boolean;
  className?: string;
  disabled?: boolean;
}
export const LitUpBorderButton: React.FC<Props> = ({
  onClick,
  children,
  className,
  isFormButton = false,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} className={"p-[3px] relative " + className} type={isFormButton ? "submit" : "button"} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"/>
      <div
        className={
          "button-color rounded-full relative group transition duration-200 text-white font-sans lg:text-base md:text-sm text-xs " +
          (!disabled ? "hover:bg-transparent" : "")
        }
      >
        {children}
      </div>
    </button>
  )
}
