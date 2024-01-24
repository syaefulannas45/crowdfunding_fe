import React, { ChangeEventHandler } from "react";

export interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  label?: string;
  className?: string;
  name?: string;
  defaultValue?: string;
}
const Input = ({
  type,
  value,
  placeholder,
  label,
  onChange,
  className,
  name,
  defaultValue,
}: InputProps) => {
  return (
    <>
      <label className="font-normal text-lg text-white block mb-3">
        {label}
      </label>
      <input
        type={type}
        className={`${className} auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default Input;
