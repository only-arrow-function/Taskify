const ProfileBadge = (props: { username: string }) => {
  return (
    <div
      className="w-[2.375rem] h-[2.375rem] rounded-full
      flex
      items-center
      justify-center
    bg-slate-500
      text-white
    "
    >
      {props.username.slice(0, 1)}
    </div>
  );
};

export default ProfileBadge;
