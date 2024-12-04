import axios from "axios"
export const AjouterOffer = async (data,token) => {
    const response = await axios.post("http://127.0.0.1:3500/CreateOffer",data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response
}