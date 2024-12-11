import axios from "axios"
export const registerEntreprise = async (data) => {
    const response = await axios.post("http://127.0.0.1:3500/Rentreprise", data)
    return response.data
}
