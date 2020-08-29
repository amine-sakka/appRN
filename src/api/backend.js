import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://3d78ad2204e9.ngrok.io/', // <=> localhost:5000
});