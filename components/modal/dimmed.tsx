interface DimmedType {
  handleCloseModal: () => void;
}

const Dimmed = ({ handleCloseModal }: DimmedType) => {
  return <div className="z-20 fixed inset-0 bg-black/70" onClick={handleCloseModal} />;
};

export default Dimmed;
