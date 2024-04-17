import { PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren) => {
  return <div className="w-full xl:w-[314px] p-[6px] sm:p-[9px] bg-white border-grayscale-40 border-2">{children}</div>;
};

export default Card;
