import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:' http://839ce8c3613c.ngrok.io', // <=> localhost:5000
});