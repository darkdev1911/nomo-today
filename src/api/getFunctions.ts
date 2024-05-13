import axios from "axios";

export function GETAllEntries() {
    const url = 'http://localhost:3001/allEntries'
    return axios.get(url);
}