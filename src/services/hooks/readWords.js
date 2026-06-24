import axios from "axios";
import { useEffect, useState } from "react";

export default function readWords(){

    const [words,setWords] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.1.58:8082/api/findWords")
        .then(res => setWords(res.data));
    }, []);

    return words;
}

