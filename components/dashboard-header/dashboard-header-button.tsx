import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface DashboardHeaderButtonProps {
  children: React.ReactNode;
  imageSource: string | StaticImport;
}

const DashboardHeaderButton = (props: DashboardHeaderButtonProps) => {
  return (
    <button className="flex items-center border rounded-lg border-grayscale-40 py-2.5 px-4">
      <div className="w-5 h-5 relative">
        <Image src={props.imageSource} alt="" fill />
      </div>
      <span className="block ml-2 text-grayscale-60">{props.children}</span>
    </button>
  );
};

export default DashboardHeaderButton;
