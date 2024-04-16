import { useState } from 'react';
import Image from 'next/image';
import { PasswordInputProps } from './password-input-type';
import HidePasswordIcon from '@/public/icon/eye-off.svg';
import ShowPasswordIcon from '@/public/icon/eye-on.svg';

const PasswordInput = ({
  label,
  value,
  placeholder,
  onChange,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col">
      <label className="text-grayscale-80 mb-[0.5rem]">{label}</label>
      <div className="relative w-[32.5rem]">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[3.125rem] pl-4 pr-10 rounded-lg border border-solid ${
            error ? 'border-red-50' : 'border-grayscale-40'
          }`}
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={toggleShowPassword}
        >
          <Image
            src={showPassword ? ShowPasswordIcon : HidePasswordIcon}
            alt={showPassword ? '비밀번호 표시' : '비밀번호 숨김'}
            width={24}
            height={24}
          />
        </div>
      </div>
      {error && <p className="text-red-50 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default PasswordInput;
