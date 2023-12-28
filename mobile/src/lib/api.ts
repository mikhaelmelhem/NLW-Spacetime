import axios from "axios";

export const api = axios.create({
    baseURL: 'exp://192.168.15.109:3333',
})