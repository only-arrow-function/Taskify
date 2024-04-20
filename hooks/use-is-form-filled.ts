import { useEffect } from "react";

import { isFormFilled } from '@/lib/domain/is-form-filled';
import useFormStore from '@/store/form-store';

export const useIsFormFilled = () => {
  const { title, description, dueDate, tags, imageUrl, isFilled,
    setTitle, setDescription, setDueDate, setAddTag, setRemoveTag, setImageUrl, setIsFilled } = useFormStore();
  const formStates = { title, description, dueDate, tags, imageUrl }

  useEffect(() => {
    const isValidated = isFormFilled(formStates);

    if (isFilled !== isValidated) {
      console.log(isValidated)
      setIsFilled(isValidated);
    } 
  }, [title, description, dueDate, tags, imageUrl]);

  return { title, description, dueDate, tags, imageUrl, isFilled,
    setTitle, setDescription, setDueDate,  setAddTag, setImageUrl, setRemoveTag }
}