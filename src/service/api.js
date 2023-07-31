import axios from "axios";

const response = axios.create({
  baseURL: "https://dev-u58462427336131.api.raw-labs.com/",
});

export default response;
