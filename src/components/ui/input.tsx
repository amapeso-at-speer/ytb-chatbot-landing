import React, { InputHTMLAttributes, useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Control, Controller } from "react-hook-form";

export default function FormInput({
  name,
  labelText,
  type = 'text',
  placeholder,
  className,
  errors,
  rules,
  control,
  render,
} : {
  name: string;
  labelText: string;
  type?: string;
  placeholder?: string;
  className?: string;
  errors?: any;
  rules?: any;
  control?: Control;
  render?: (renderVal:
    {
      field: {
        onChange: (value: any) => void; 
        value: any;
        }
    }) => any;
}) {
  const defaultRender = ({ 
    field: { onChange, value } 
  } : {
    field: { 
      onChange: (value: any) => void; 
      value: InputHTMLAttributes<HTMLInputElement>["value"];
  }}) => (
    <input
      required={rules?.required}
      className={"bg-light-blue/20 p-2 rounded-sm outline outline-1 outline-light-blue placeholder:text-light-blue/70 " +
        (errors?.[name] ? "outline-red-500" : "")
      }
      value={value}
      onChange={onChange}
      name={name} 
      placeholder={placeholder}
      type={type}
    />
  );

  return (
    <>
      <div className={className + " flex flex-col flex-1"}>
       <label htmlFor={name} className="mb-1 text-base">
          {labelText}
          {rules?.required && <span className="text-light-blue"> *</span>}
        </label>
        <Controller
          defaultValue={''}
          control={control}
          name={name}
          rules={{
            ...rules,
            required: !!rules?.required,
          }}
          render={render ?? defaultRender}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ messages }) =>
            messages && 
            Object.entries(messages).map(([type, message]) => 
              (<p className="text-red-500 mt-1" key={type}>{message}</p>))
          }
        />
      </div>
    </>
  )
}