import Image from 'next/image';

const ProfileImage = ({ nickname, imageUrl }: { nickname: string; imageUrl?: string | null }) => {
  return (
    <div className="relative flex-shrink-0 size-[1.625rem] rounded-full overflow-hidden">
      {imageUrl && <Image src={imageUrl} alt="프로필 이미지" fill style={{ objectFit: 'cover' }} />}
      {nickname && (
        <span className="inline-flex justify-center items-center rounded-full text-xs font-[Montserrat] bg-slate-500 size-full text-white border-2 border-white">
          {nickname.slice(0, 1)}
        </span>
      )}
    </div>
  );
};

export default ProfileImage;
