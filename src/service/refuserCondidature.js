import axios from "axios"
export const RefuserCondidature = async (data,token)=>{
    const response = await axios.post("http://127.0.0.1:3500/RefuseCondidature",data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response
}