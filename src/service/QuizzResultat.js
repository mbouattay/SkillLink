import axios from "axios"
export const QuizzResultat = async (data) => {
    const response = await axios.post("http://127.0.0.1:3500/PostScorecondidature",data);
    return response
}