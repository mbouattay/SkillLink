import axios from "axios"
export const VerifierCompetence = async (data) => {
    try{
        const response = await axios.post("http://127.0.0.1:3500/Post",data);
        return response
    }catch(error){
            return error.response.data
    }
    
}