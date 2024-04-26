import axios from './axios';
import getToken from './localStorage';
import { ColumnResponse } from '@/components/modal/column/columns-data.type';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const columnRequest = {
  fetchColumns: async (dashboardId: number) => {
    return (
      await axios.get<ColumnResponse>(`/columns`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          dashboardId,
        },
      })
    ).data;
    // try {
    //   if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
    //   const { data } = await axios.get<ColumnResponse>(`/columns`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //     params: {
    //       dashboardId,
    //     },
    //   });

    //   return data;
    // } catch (error) {
    //   console.error(error);
    //   return error;
    // }
  },

  createColumn: async (columnData: { title: string; dashboardId: number }) => {
    try {
      const { data } = await axios.post('columns', columnData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  updateColumn: async (columnData: { title: string }, columnId: number) => {
    try {
      const { data } = await axios.put(`columns/${columnId}`, columnData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  deleteColumn: async (columnId: number) => {
    try {
      const { data } = await axios.delete(`columns/${columnId}`, headers);
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default columnRequest;
