import { useEffect, useState } from 'react';

import { isFormFilled } from '@/lib/domain/is-form-filled';

export const useIsFormFilled = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tags, setTag] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const setAddTag = (newTag: string) => {
    setTag((tags) => [...tags, newTag]);
  };

  const setRemoveTag = (tags: string[]) => {
    setTag([...tags]);
  };

  const formStates = { title, description, dueDate, tags, imageUrl };
  useEffect(() => {
    const isValidated = isFormFilled(formStates);

    if (isFilled !== isValidated) {
      setIsFilled(isValidated);
    }
  }, [title, description, dueDate, tags, imageUrl]);

  return {
    title,
    description,
    dueDate,
    tags,
    imageUrl,
    isFilled,
    setTitle,
    setDescription,
    setDueDate,
    setAddTag,
    setImageUrl,
    setRemoveTag,
  };
};
