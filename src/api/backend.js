import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://7b673d31d6fb.ngrok.io', // <=> localhost:5000
});