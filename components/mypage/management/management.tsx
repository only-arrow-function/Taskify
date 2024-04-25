import React, { useState } from 'react';
import Link from 'next/link';
import ManagementSkeleton from './management-skeleton';
import MypagePasswordChangeForm from '../password-change-form/password-change-form';
import MypageProfile from '../profile/profile';
import NotificationModal from '@/components/modal/notification-modal';
import { useUser } from '@/hooks/swr/use-user';
import arrowForward from '@/public/icon/arrow-forward-left.svg';
import { useToggleStore } from '@/store/toggle-store';

const MypageManagement = () => {
  const { user, isLoading, isError } = useUser();
  const { isToggle, handleOpenToggle } = useToggleStore();
  const [notificationMessage, setNotificationMessage] = useState('');

  if (isLoading) return <ManagementSkeleton />;
  if (isError) {
    alert('데이터 불러오기 실패');
  }

  const handleNotification = (message: string) => {
    setNotificationMessage(message);
    handleOpenToggle();
  };
  return (
    <>
      <Link className="flex flex-row mt-[17px] ml-[12px]" href="/my-dashboard">
        <img className="mr-[6px]" src={arrowForward.src} alt="돌아가기" />
        돌아가기
      </Link>
      <MypageProfile userData={user} onNotification={handleNotification} />
      <MypagePasswordChangeForm onNotification={handleNotification} />
      {isToggle && <NotificationModal message={notificationMessage} />}
    </>
  );
};

export default MypageManagement;
