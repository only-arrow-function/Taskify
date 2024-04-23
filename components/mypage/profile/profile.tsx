import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { UserInfo } from '../management/userinfo-type';
import userRequests from '@/apis/user-request';
import BasicButton from '@/components/buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import plusIcon from '@/public/icon/profile-add.svg';
import { useAuthenticationStore } from '@/store/auth';

interface MypageProfileProps {
  userData: UserInfo;
  onNotification: (message: string) => void;
}

const MypageProfile = ({ userData, onNotification }: MypageProfileProps) => {
  const [username, setUsername] = useState<string>(userData.nickname);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(userData.profileImageUrl);

  const handleNickNameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const response = await userRequests.uploadProfileImage(file);
        setProfileImageUrl(response.profileImageUrl);
      } catch (err: any) {
        onNotification('사진 업로드에 실패하였습니다.');
      }
    }
  };

  const handleSubmit = async () => {
    try {
      await userRequests.editInformation(username, profileImageUrl);
      const updatedUserInfo = { ...userData, nickname: username, profileImageUrl: profileImageUrl };
      useAuthenticationStore.getState().setAuthentication(updatedUserInfo);
      onNotification('성공적으로 저장되었습니다.');
    } catch (err: any) {
      onNotification(err.response.data.message || '알수없는 오류로 저장에 실패하였습니다.');
    }
  };

  return (
    <div className="w-[95%] max-w-[620px] mt-[25px] mx-auto md:mx-3 rounded-md shadow-md bg-white">
      <h2 className="text-xl font-bold pt-[32px] pl-[28px]">프로필</h2>
      <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 p-4">
        <div className="flex flex-col md:items-center justify-center mb-4 md:mb-0">
          <input type="file" onChange={handleImageChange} className="hidden" id="fileInput" accept="image/*" />
          <label htmlFor="fileInput" className="cursor-pointer">
            <div className="relative w-[100px] h-[100px] md:w-[182px] md:h-[182px] bg-[#F5F5F5] flex items-center justify-center">
              {profileImageUrl ? (
                <Image
                  src={profileImageUrl}
                  alt="프로필"
                  fill
                  sizes="(max-width: 768px) 100px, 182px"
                  priority={true} // LCP 속성
                />
              ) : (
                <img src={plusIcon.src} alt="프로필 추가" />
              )}
            </div>
          </label>
        </div>
        <div className="flex-1 mx-2 md:col-span-2">
          <div>
            <InputField label="이메일" type="email" value={userData.email} readOnly />
          </div>
          <div>
            <InputField label="닉네임" type="text" value={username} onChange={handleNickNameChange} />
          </div>
        </div>
      </div>
      <div className="flex justify-end px-4 pb-[20px]">
        <BasicButton purpose="positive" eventHandler={handleSubmit}>
          저장
        </BasicButton>
      </div>
    </div>
  );
};

export default MypageProfile;
