import Image from 'next/image';
import requests from '@/apis/request';
import AddIcon from '@/public/chips/add.svg';

const tempColumnId = 20004;

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
  value: string;
  onChange: (e, imageUrl) => void;
}) => {
  const handleChange = async (e) => {
    const file = e.target.files?.[0];

    const formData = new FormData();
    formData.append('image', file);

    const imageUrl = await requests.postCardImage(tempColumnId, formData);

    onChange(e, imageUrl);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <h3 className="text-grayscale-80">{label}</h3>
      <label
        htmlFor={id}
        className="relative flex justify-center items-center w-[76px] h-[76px] rounded-md bg-[#F5F5F5] overflow-hidden"
      >
        {!value && <Image width={28} height={28} src={AddIcon} alt="이미지 추가하기" />}
        {value && <Image fill src={value} alt="이미지 미리보기" style={{ objectFit: 'cover' }} />}
      </label>
      <input id={id} type="file" accept="image/*" name={name} onChange={handleChange} className="hidden" />
    </div>
  );
};

export default InputWithImg;