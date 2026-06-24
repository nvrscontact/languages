import axios from "axios";

const API_URL = "http://192.168.1.58:8082/api/addWord";

/* */
export async function addWord(word){

    await axios.post(API_URL,word);

}