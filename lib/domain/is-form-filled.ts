import { StatesData } from '@/components/modal/modal-new-todo';

const exceptedKeys = ['id', 'assignee', 'teamId', 'columnId', 'dashboardId', 'createdAt', 'updatedAt'];

export const isFormFilled = (data: any) => {
  const statesKeys = Object.keys(data).filter((key) => !exceptedKeys.includes(key)) as (keyof StatesData)[];

  return statesKeys.every((key) => data[key].length);
};
