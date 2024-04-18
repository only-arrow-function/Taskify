import React, { InputHTMLAttributes } from 'react';

interface ModalInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ModalInput = (props: ModalInputProps) => {
  return (
    <input
      type="text"
      value={props.value}
      className="w-full h-12 px-4 border border-grayscale-40 rounded-md"
    />
  );
};

export default ModalInput;
