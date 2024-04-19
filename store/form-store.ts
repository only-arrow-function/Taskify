import { create } from 'zustand'

const useFormStore = create(set => ({
  title: '',
  setTitle: (newTitle: string) => set(() => ({ title: newTitle })),

  description: '',
  setDescription: (newDescription: string) => set(() => ({ description: newDescription })),

  dueDate: '',
  setDueDate: (newDueDate: string) => set(() => ({ dueDate: newDueDate })),

  tags: ["1", "2"],
  setTags: (newTags: string[]) => set(() => ({ title: newTags })),

  // imageUrl: '',
  // setImageUrl: (newImageUrl: string) => set(() => ({ imageUrl: newImageUrl })),

  isFilled: false,
  setIsFilled: (newIsFilled: boolean) => set(() => ({ isFilled: newIsFilled })),
}))

export default useFormStore