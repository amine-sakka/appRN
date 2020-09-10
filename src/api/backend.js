import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://70c801dc1881.ngrok.io', // <=> localhost:5000
});