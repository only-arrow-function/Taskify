const PAGE_DASHBOARD_COUNT = 5;

export const pagesCalculate = (data: any, isLoading:boolean) => {
  if (isLoading || !data || !data.totalCount) return 1;

  const totalPages =
      data.totalCount % PAGE_DASHBOARD_COUNT === 0
      ? data.totalCount / PAGE_DASHBOARD_COUNT
      : Math.ceil(data.totalCount / PAGE_DASHBOARD_COUNT);

  return totalPages;
}

export const totalPagesCalculate = (data: any) => {
  const totalPages =
      data.totalCount % PAGE_DASHBOARD_COUNT === 0
      ? data.totalCount / PAGE_DASHBOARD_COUNT
      : Math.ceil(data.totalCount / PAGE_DASHBOARD_COUNT);

  return totalPages;
}
