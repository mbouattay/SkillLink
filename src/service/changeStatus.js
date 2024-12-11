import axios from "axios"
export const ChangeStatus = async (data,token) => {
    const response = await axios.patch("http://127.0.0.1:3500/ChangeStatus",data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response
}