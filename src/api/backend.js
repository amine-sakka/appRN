import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://f79768341244.ngrok.io', // <=> localhost:5000
});