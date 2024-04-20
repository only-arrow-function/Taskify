import { create } from 'zustand';
import type { FormStore } from '@/types/modal-todo-form.type';

const useFormStore = create<FormStore>((set) => ({
  title: '',
  setTitle: (newTitle: string) => set(() => ({ title: newTitle })),

  description: '',
  setDescription: (newDescription: string) => set(() => ({ description: newDescription })),

  dueDate: '',
  setDueDate: (newDueDate: string) => set(() => ({ dueDate: newDueDate })),

  tags: [],
  setAddTag: (newTag: string) => set(({ tags }) => ({ tags: [...tags, newTag] })),
  setRemoveTag: () => set(({ tags }) => ({ tags: tags.slice(0, -1) })),

  imageUrl: '',
  setImageUrl: (newImageUrl: string) => set(() => ({ imageUrl: newImageUrl })),

  isFilled: false,
  setIsFilled: (newIsFilled: boolean) => set(() => ({ isFilled: newIsFilled })),
}));

export default useFormStore;
