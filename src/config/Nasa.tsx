import axios from "axios";

//NASA api key
const nasaEndPoint = 'https://api.nasa.gov/';
const nasaApiKey = 'SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR';


//NASA Data
axios.interceptors.request.use(
    config => {
        config.params = config.params ? config.params : {}
        const configUrl: any = config.url
        if (configUrl.includes(nasaEndPoint)) {
            config.params["api_key"] = nasaApiKey
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    getApod() {
        return axios.get(`${nasaEndPoint}planetary/apod`)
    },
}