import axios from "axios";
export const allOfferEntreprise = async (token) => {
  const response = await axios.get("http://127.0.0.1:3500/GetAllOfferEnt",{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};