import { useState, useRef, useEffect } from "react"

export const useHandleDropdown = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpenDropdown(true);
  }

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  }

  return { isOpenDropdown, handleOpenDropdown, handleCloseDropdown };
}

export const useHandleDropdownOutside = (onClickInside: () => void, onClickOutside : () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      } else {
        onClickInside && onClickInside();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };

  }, [ onClickOutside ]);

  return ref;
}
