import React from 'react';
import { InputFieldProps } from './input-field-type';

const InputField = ({
  label,
  type,
  id,
  value,
  placeholder,
  onChange,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-grayscale-80 mb-[0.5rem]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-[32.5rem] h-[3.125rem] px-4 rounded-lg border ${
          error ? 'border-red-50' : 'border-grayscale-40'
        }`}
      />
      {error && <p className="text-red-50 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
