import axios from "axios";
import { CoinApi } from "./Constants";

const axiosInstance = axios.create({
    baseURL: CoinApi
})

export default axiosInstance