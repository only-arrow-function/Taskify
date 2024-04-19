import { StatesData } from "@/components/modal/modal-new-todo";

export const isFormFilled = (data: StatesData) => {
  const statesKeys = Object.keys(data) as (keyof StatesData)[];

  for (const key of statesKeys) {
    if (!data[key]) return false;
    if (key === 'tags' && data[key].length === 0) return false;
  }
  return true;
}