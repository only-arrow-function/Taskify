import type { DarkmodeProps } from './rending-header.type';
import RendingHeaderLogo from './rending-header-logo';
import RendingHeaderNavBar from './rending-header-navbar';

const RendingHeader = (props: DarkmodeProps) => {
  const themeModeClassName = props.isDarkmode
    ? 'bg-black text-white'
    : 'bg-white text-black';

  return (
    <header className="w-full">
      <div
        className={`p-4 pr-20 flex justify-between items-center max-xl:pr-10 max-sm:p-6 max-sm:py-4 ${themeModeClassName}`}
      >
        <RendingHeaderLogo isDarkmode={props.isDarkmode} />
        <RendingHeaderNavBar />
      </div>
    </header>
  );
};

export default RendingHeader;
