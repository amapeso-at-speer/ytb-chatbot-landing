import React from "react";

export default function Input({
  name,
  label,
  required = false,
  type = 'text',
  placeholder,
  className,
} : {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <>
      <div className={className + " flex flex-col flex-1"}>
       <label className="mb-1 text-base">
          {label}
          {required && <span className="text-light-blue"> *</span>}
        </label>
        <input
          className="bg-light-blue/20 p-2 rounded-sm outline outline-1 outline-light-blue placeholder:text-light-blue/70"
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}  
        />
      </div>
    </>
  )
}