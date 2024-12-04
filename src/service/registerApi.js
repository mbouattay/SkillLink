import axios from "axios"
export const register = async (data) => {
    const response = await axios.post("http://127.0.0.1:3500/Remploye", data)
    return response.data
}
