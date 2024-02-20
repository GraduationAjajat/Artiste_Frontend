import axios from "axios";

const JWT_EXPIRY_TIME = 60000 * 30;

export const onRefresh = () => {
  axios
    .post("/api/v1/user/reissue", {
      accessToken: localStorage.getItem("token"),
      refreshToken: localStorage.getItem("refresh"),
    })
    .then((res) => {
      //새로 받은 토큰으로 업뎃
      localStorage.setItem("refresh", res.data.refreshToken);
      localStorage.setItem("token", res.data.accessToken);
      console.log("refresh");
      setTimeout(onRefresh, JWT_EXPIRY_TIME - 60000);
    })
    .catch((err) => console.log(err));
};
