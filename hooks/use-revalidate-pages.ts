import { useEffect, useState } from "react";

export const useRevalidatePages = (data: any, currentPage: number, setCurrentPage: (newCurrentPage: number) => void) => {
  useEffect(() => {
    if (data && data.totalPages && currentPage >= data.totalPages) {
      setCurrentPage(data.totalPages);
    }
  }, [data])
}