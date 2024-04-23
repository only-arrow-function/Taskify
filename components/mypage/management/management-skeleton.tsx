import React from 'react';
import BasicButton from '@/components/buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import PasswordInput from '@/components/inputs/password-input';

const ManagementSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-[95%] max-w-[620px] mt-[25px] mx-auto md:mx-3 rounded-md shadow-md bg-white">
        <h2 className="text-xl font-bold pt-[32px] pl-[28px]">프로필</h2>
        <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 p-4">
          <div className="flex flex-col md:items-center justify-center mb-4 md:mb-0">
            <input type="file" className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="relative w-[100px] h-[100px] md:w-[182px] md:h-[182px] bg-[#F5F5F5] flex items-center justify-center"></div>
            </label>
          </div>
          <div className="flex-1 mx-2 md:col-span-2">
            <div>
              <InputField label="이메일" type="email" />
            </div>
            <div>
              <InputField label="닉네임" type="text" />
            </div>
          </div>
        </div>
        <div className="flex justify-end px-4 pb-[20px]"></div>
      </div>
      <form className="w-[95%] max-w-[620px] mt-[25px] flex flex-col mx-auto md:mx-3 rounded-md shadow-md bg-white">
        <h2 className="text-xl font-bold pt-[32px] pl-[28px]">비밀번호 변경</h2>
        <div className="pt-[32px] pl-[28px] mr-[20px] sm:mr-[28px]">
          <PasswordInput label="현재 비밀번호" placeholder="현재 비밀번호 입력" autoComplete="current-password" />
          <PasswordInput label="새 비밀번호" placeholder="새 비밀번호 입력" autoComplete="new-password" />
          <PasswordInput label="새 비밀번호 확인" placeholder="새 비밀번호 입력" autoComplete="new-password" />
        </div>
        <div className="flex justify-end px-4 pb-[20px]"></div>
      </form>
    </div>
  );
};

export default ManagementSkeleton;
