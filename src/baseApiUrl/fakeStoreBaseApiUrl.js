//this file has the base url

import axios from "axios";

export default axios.create({
    baseURL: "https://fakestoreapi.com",  //creating the base url
})