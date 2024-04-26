import { ChangeEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const DashboardInviteSearch = () => {
  const [searchString, setSearchString] = useState('');
  const route = useRouter();

  const handleSearchStringChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      route.push(`?title=${searchString}`);
    }, 200);

    return () => clearTimeout(timerId);
  }, [searchString]);

  return (
    <form className="mt-5 mb-6">
      <input
        type="text"
        placeholder="검색"
        className="w-full h-10 border border-grayscale-40 rounded-md bg-search-icon bg-no-repeat pl-12 bg-[length:24px_24px] bg-[center_left_16px]"
        onChange={handleSearchStringChange}
      />
    </form>
  );
};

export default DashboardInviteSearch;
