import React from "react";
import { InputProps } from ".";

const InputProject = ({
  type,
  value,
  placeholder,
  label,
  onChange,
  className,
}: InputProps) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        className={`${className} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputProject;
