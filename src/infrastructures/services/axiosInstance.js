import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://64bd34612320b36433c77e26.mockapi.io/react-edspert-api/",
});

export default axiosInstance;
