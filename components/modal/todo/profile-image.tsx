import Image from 'next/image';

const ProfileImage = ({ nickname, imageUrl }) => {
  return (
    <div className="relative size-[1.625rem] rounded-full overflow-hidden">
      {imageUrl && <Image src={imageUrl} alt="프로필 이미지" fill style={{ objectFit: 'cover' }} />}
      {nickname && (
        <span className="inline-flex justify-center items-center rounded-full text-xs font-[Montserrat] bg-[#A3C4A2] size-full text-white border-2 border-white">
          {nickname.slice(0, 1).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default ProfileImage;
