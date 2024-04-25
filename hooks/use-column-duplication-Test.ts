import { ColumnItem } from './swr/column/use-column';

export const useColumnDuplicationTest = (columnTitle: string, columnData: ColumnItem[] | undefined): boolean => {
  return columnData?.some((obj) => obj.title === columnTitle) ?? false;
};
