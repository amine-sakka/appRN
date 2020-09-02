import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://b84bc461e628.ngrok.io', // <=> localhost:5000
});