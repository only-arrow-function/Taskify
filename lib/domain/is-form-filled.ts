import { StatesData } from '@/components/modal/modal-new-todo';

export const isFormFilled = (data: any) => {
  const statesKeys = Object.keys(data) as (keyof StatesData)[];

  return statesKeys.every((key) => data[key].length);
};
