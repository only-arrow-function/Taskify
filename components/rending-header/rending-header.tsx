import RendingHeaderLogo from './rending-header-logo';
import RendingHeaderNavBar from './rending-header-navbar';

const RendingHeader = () => {
  return (
    <header className="w-full">
      <div className="p-4 pr-20 flex justify-between items-center">
        <RendingHeaderLogo />
        <RendingHeaderNavBar />
      </div>
    </header>
  );
};

export default RendingHeader;
