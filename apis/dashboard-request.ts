import axios from './axios';
import getToken from './localStorage';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const dashboardRequest = {
  
}