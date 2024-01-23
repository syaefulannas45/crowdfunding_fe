import React, { ChangeEventHandler } from "react";

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  label?: string;
}
const Input = ({ type, value, placeholder, label, onChange }: InputProps) => {
  return (
    <>
      <label className="font-normal text-lg text-white block mb-3">
        {label}
      </label>
      <input
        type={type}
        className="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
