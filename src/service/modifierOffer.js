import axios from "axios"
export const ModifierOffer = async (id,data,token) => {
    const response = await axios.put("http://127.0.0.1:3500/UpdateOfferById/"+id,data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response
}