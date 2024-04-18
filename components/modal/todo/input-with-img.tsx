import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AddIcon from '@/public/chips/add.svg';

const InputWithImg = ({
  label,
  id,
  name,
  value,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  value: File | null;
  onChange: ChangeEventHandler;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-grayscale-80">{label}</h3>
      <label
        htmlFor={id}
        className="relative flex justify-center items-center w-[76px] h-[76px] rounded-md bg-[#F5F5F5] overflow-hidden"
      >
        {!preview && <Image width={28} height={28} src={AddIcon} alt="이미지 추가하기" />}
        {preview && <Image fill src={preview} alt="이미지 미리보기" style={{ objectFit: 'cover' }} />}
      </label>
      <input id={id} type="file" name={name} onChange={onChange} accept="image/*" className="hidden" ref={inputRef} />
    </div>
  );
};

export default InputWithImg;
