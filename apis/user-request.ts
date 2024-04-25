import axios from './axios';
import getToken from './localStorage';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const userRequests = Object.freeze({
  myInformation: async () => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get('users/me', headers);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  uploadProfileImage: async (file: File) => {
    const token = getToken();
    if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
    const formData = new FormData();
    formData.append('image', file);

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const { data } = await axios.post('users/me/image', formData, headers);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  editInformation: async (nickname: string, profileImageUrl: string | null) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.put(
        'users/me',
        {
          nickname,
          profileImageUrl,
        },
        headers,
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  editPassword: async (password: string, newPassword: string) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.put('auth/password', { password, newPassword }, headers);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
});

export default userRequests;
