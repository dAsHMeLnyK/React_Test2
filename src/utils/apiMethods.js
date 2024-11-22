import axios from "axios";

const baseUrl = "https://reqres.in/api";

export const getUsers = async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data.data;
};

export const deleteUser = async (userId) => {
  await axios.delete(`${baseUrl}/users/${userId}`);
  return userId; 
};
