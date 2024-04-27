import { PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full p-[6px] sm:p-[9px] bg-white border-grayscale-40 border-2 rounded-[6px] cursor-pointer">
      {children}
    </div>
  );
};

export default Card;
