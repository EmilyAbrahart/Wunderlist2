import axios from "axios";

// Add token to headers for all axios requests for authentication.

export default () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};
