import React from 'react';

interface ModalDescriptionProps {
  text: string;
}

const ModalDescription = ({ text }: ModalDescriptionProps) => {
  return <p className="text-center my-4  text-grayscale-80 sm:text-base">{text}</p>;
};

export default ModalDescription;
