import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface DashboardHeaderButtonProps {
  children: React.ReactNode;
  imageSource: string | StaticImport;
  onClick? : () => void;
}

const DashboardHeaderButton = (props: DashboardHeaderButtonProps) => {
  const router = useRouter();
  if (router.pathname.match('my')) return null;

  return (
    <button className="flex items-center border rounded-lg border-grayscale-40 py-2.5 px-4 max-[744px]:py-1.5 max-[744px]:px-3 max-[744px]:text-sm" onClick={props.onClick}>
      <div className="w-5 h-5 relative max-[744px]:hidden">
        <Image src={props.imageSource} alt="" fill />
      </div>
      <span className="block ml-2 text-grayscale-60 max-[744px]:ml-0">
        {props.children}
      </span>
    </button>
  );
};

export default DashboardHeaderButton;
