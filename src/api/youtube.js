import axios from "axios";



const KEY = "AIzaSyApSzw9Ue2UNKnLYg75xoiV-WrOCHmyOEE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5 ,
        key: KEY,
    }
})