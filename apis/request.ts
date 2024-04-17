import axios from "./axios"

const ERROR_MESSAGE = "에러 발생:"

const requests = Object.freeze({
  getInviteUsers: async function(dashboardid: string) {
    try {
      const { data } = await axios.get(`dashboards/${dashboardid}`);

      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  }, // 메서드로 다른 요청을 추가해 주세요.
})

export default requests