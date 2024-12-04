import axios from "axios";

export const getOfferById = async (token,id) => {
  const response = await axios.get("http://127.0.0.1:3500/GetOfferById/"+id,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
