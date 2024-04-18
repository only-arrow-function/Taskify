import { useState } from "react"

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