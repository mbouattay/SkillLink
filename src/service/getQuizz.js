import axios from "axios";
export const getQuizz = async (id,token) => {
  const response = await axios.get("http://127.0.0.1:3500/GetQuizzByOffer/"+id,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};