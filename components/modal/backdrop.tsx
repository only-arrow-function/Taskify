import { useBoundStore } from '@/store';

const BackDrop = () => {
  const { handleCloseToggle } = useBoundStore((state) => state);
  return (
    <div
      className="z-20 fixed inset-0 bg-black/70"
      onClick={handleCloseToggle}
    />
  );
};

export default BackDrop;
