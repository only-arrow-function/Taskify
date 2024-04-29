import React, { forwardRef, ForwardedRef } from 'react';
import { InputFieldProps } from './input-field-type';

const InputField = (
  { label, type, id, value, placeholder, autoComplete, onBlur, onChange, error, readOnly }: InputFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-grayscale-80 mb-[0.5rem]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        className={`w-full h-[3.125rem] px-4 rounded-lg border focus-within:border-2 focus-within:border-violet-50 ${
          error ? 'border-red-50' : 'border-grayscale-40'
        } ${readOnly ? 'text-grayscale-50' : 'text-black'}`}
      />
      <p className={`text-red-50 text-sm mt-[0.5rem] h-5 ${error ? '' : 'opacity-0'}`}>{error || ' '}</p>
    </div>
  );
};

export default forwardRef(InputField);
