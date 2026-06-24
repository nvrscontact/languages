import axios from "axios";

const API_URL = `http://192.168.1.58:8082/api/register`;

export default function registerUser(user) {
    axios.post(API_URL, user)
}