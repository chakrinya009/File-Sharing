import axios from "axios";

const API_URL = "https://share-azw3.onrender.com";

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (err) {
    console.error("Error while calling the api", err.message);
  }
};
