import { ChangeEvent } from 'react';

export interface PasswordInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
