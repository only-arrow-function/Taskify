import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'none';
}

const BaseButton = ({children}: Props) => {
  return (
    <button>
      <span>{children}</span>
    </button>
  )
}

export default BaseButton