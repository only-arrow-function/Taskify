const ProfileUsername = (props: { username: string }) => {
  return (
    <span className="text-color-grayscale-80 max-[744px]:hidden">
      {props.username}
    </span>
  );
};

export default ProfileUsername;
