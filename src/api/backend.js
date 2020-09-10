import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://72770f1cda17.ngrok.io', // <=> localhost:5000
});