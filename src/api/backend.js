import axios from 'axios';
//creating & exporting instrense 
export default axios.create({
    baseURL:'http://9cddaa11fe66.ngrok.io', // <=> localhost:5000
});