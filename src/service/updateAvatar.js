import axios from "axios";

export const updateAvatar = async (token, data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:3500/UpAvatar",
      data, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "Une erreur s'est produite lors de la récupération des données.";
  }
};
