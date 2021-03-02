import axios, {AxiosResponse} from "axios";

const host: string = 'https://jsonplaceholder.typicode.com/';

const API = {
    GET: () => {
        return axios.get(host+'posts')
            .then((response: AxiosResponse<any>) => {
                return response.data;
            })
            .catch((error)=>{
                throw error;
            })
    }
}

export default API;
