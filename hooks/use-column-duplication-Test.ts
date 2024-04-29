import { ColumnItem } from '@/components/modal/column/columns-data.type';


export const useColumnDuplicationTest = (columnTitle: string, columnData: ColumnItem[] | undefined): boolean => {
  return columnData?.some((obj) => obj.title === columnTitle) ?? false;
};
