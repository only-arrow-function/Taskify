const BackDrop = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  return <div className="z-20 fixed inset-0 bg-black/70" onClick={onCloseModal} />;
};

export default BackDrop;
