import React, { useState } from 'react';

const PAGE_DASHBOARD_COUNT = 5;

const usePagination = <T>(data: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages =
    data.length % PAGE_DASHBOARD_COUNT === 0
      ? data.length / PAGE_DASHBOARD_COUNT
      : Math.ceil(data.length / PAGE_DASHBOARD_COUNT);

  const sliceData = data.slice((currentPage - 1) * PAGE_DASHBOARD_COUNT, currentPage * PAGE_DASHBOARD_COUNT);

  const nextCurrentPage = () => setCurrentPage((prevPage) => (prevPage >= totalPages ? prevPage : prevPage + 1));
  const prevCurrentPage = () => setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));

  return {
    totalPages,
    currentPage,
    sliceData,
    nextCurrentPage,
    prevCurrentPage,
  };
};

export default usePagination;
