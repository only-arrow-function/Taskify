export interface ColumnItem {
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  teamId: number;
  dashboardId: number;
}

export interface ColumnResponse {
  result: string;
  data: ColumnItem[];
}
