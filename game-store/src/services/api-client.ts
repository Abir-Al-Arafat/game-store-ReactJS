import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '75e3fec8851a4a6aadd9ddb439c96a4c'
    }
})