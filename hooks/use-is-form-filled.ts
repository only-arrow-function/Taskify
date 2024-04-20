import { useEffect } from "react";

import { isFormFilled } from '@/lib/domain/is-form-filled';
import useFormStore from '@/store/form-store';

export const useIsFormFilled = () => {
  const { title, description, dueDate, tags, isFilled,
    setTitle, setDescription, setDueDate, setAddTag, setRemoveTag, setIsFilled } = useFormStore();
  const formStates = { title, description, dueDate, tags }

  useEffect(() => {
    const isValidated = isFormFilled(formStates);

    if (isFilled !== isValidated) {
      console.log(isValidated)
      setIsFilled(isValidated);
    } 
  }, [title, description, dueDate, tags]);

  return { title, description, dueDate, tags, isFilled,
    setTitle, setDescription, setDueDate,  setAddTag, setRemoveTag }
}