import { useToggleStore } from '@/store/toggle-store';

const BackDrop = () => {
  const handleCloseToggle = useToggleStore((state) => state.handleCloseToggle);
  
  return <div className="z-20 fixed inset-0 bg-black/70" onClick={handleCloseToggle} />;
};

export default BackDrop;
