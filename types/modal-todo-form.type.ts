export interface FormStore extends FormState, ChangeFormState {}

export interface FormState {
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
  isFilled: boolean;
}

export interface ChangeFormState {
  setTitle: (newState: string) => void;
  setDescription: (newState: string) => void;
  setDueDate: (newState: string) => void;
  setAddTag: (newState: string) => void;
  setRemoveTag: () => void;
  setImageUrl: (newState: string) => void;
  setIsFilled: (newState: boolean) => void;
}
