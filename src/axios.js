import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-3789a.cloudfunctions.net/api'
});
export default instance;


// https://us-central1-clone-3789a.cloudfunctions.net/api
// http://127.0.0.1:5001/clone-3789a/us-central1/api