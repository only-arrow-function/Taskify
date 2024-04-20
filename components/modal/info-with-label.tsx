import { ReactNode } from 'react';
import Image from 'next/image';

const InfoWithLabel = ({
  label,
  children,
  nickname,
  imageUrl,
}: {
  label: string;
  children: ReactNode;
  nickname?: string;
  imageUrl?: string | null;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="inline-block text-[10px] font-semibold leading-3">{label}</h3>
      <div className="flex gap-2 items-center">
        {nickname && (
          <div className="relative size-[1.625rem] rounded-full overflow-hidden">
            {imageUrl && <Image src={imageUrl} alt="프로필 이미지" fill style={{ objectFit: 'cover' }} />}
            {nickname && (
              <span className="inline-flex justify-center items-center rounded-full text-xs font-[Montserrat] bg-[#A3C4A2] size-full text-white border-2 border-white">
                {nickname.slice(0, 1)}
              </span>
            )}
          </div>
        )}
        <span className="text-xs text-grayscale-80 leading-[26px]">{children}</span>
      </div>
    </div>
  );
};

export default InfoWithLabel;
