import axios from "axios";

export function POSTAddEntry(data: object) {
    const url = 'http://localhost:3001/addEntry'
    return axios.post(url, data)
}