export interface ColumnItem {
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  id: string;
  title: string;
  teamId: string;
  dashboardId: string;
}

export interface ColumnResponse {
  result: string;
  data: ColumnItem[];
}
