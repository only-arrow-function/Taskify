import { PropsWithChildren } from 'react';

const CardListLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full xl:min-h-[85vh] xl:w-[350px] flex flex-col gap-[10px] sm:gap-[16px] p-[12px] sm:p-[20px] border-b-2 border-b-grayscale-30 xl:border-r-2 xl:border-b-0 xl:border-r-grayscale-30">
      {children}
    </div>
  );
};

export default CardListLayout;
