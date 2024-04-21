import axios from './axios';

const ERROR_MESSAGE = '에러 발생:';

const columnsRequests = Object.freeze({
  postCardImage: async (columnId: number, imageData: FormData) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.post(`columns/${columnId}/card-image`, imageData, {
        headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type': 'multipart/form-data' },
      });

      return data.imageUrl;
    } catch (error) {
      console.log(ERROR_MESSAGE, error);
    }
  },
});

export default columnsRequests;
