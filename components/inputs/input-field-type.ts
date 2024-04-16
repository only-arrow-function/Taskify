import { ChangeEvent } from 'react';

export interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
