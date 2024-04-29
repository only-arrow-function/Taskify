import axios from './axios';
import getToken from './cookie';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const columnsRequests = Object.freeze({
  postCardImage: async (columnId: number, imageData: FormData) => {
    try {
      const { data } = await axios.post(`columns/${columnId}/card-image`, imageData, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });

      return data.imageUrl;
    } catch (error) {
      console.log(ERROR_MESSAGE, error);
    }
  },
});

export default columnsRequests;
