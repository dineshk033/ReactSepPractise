import axios from "axios";
/**
 * create axios instance
 */
export const AxiosInstance = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com/",
});

// Alter defaults after instance has been created
/**
 * only add when token is mandatory below line
 */
AxiosInstance.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUxYTJjMjZkNmYwZjAwMTc5MzIyMGQiLCJpYXQiOjE2NjkwOTM5NTd9.cJ2T4DKd0fwm2qBmiE_2IXXAt6TW0YTDVlzP1VT3KRA";
