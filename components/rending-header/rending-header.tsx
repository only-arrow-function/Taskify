import RendingHeaderLogo from './rending-header-logo';
import RendingHeaderNavBar from './rending-header-navbar';

const RendingHeader = () => {
  return (
    <header className="w-full">
      <div className="p-4 pr-20 flex justify-between items-center max-xl:pr-10 max-sm:p-6 max-sm:py-4">
        <RendingHeaderLogo />
        <RendingHeaderNavBar />
      </div>
    </header>
  );
};

export default RendingHeader;
