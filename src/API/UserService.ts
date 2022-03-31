import axios, {AxiosResponse} from "axios";

export class UserService {
    static async getAll() {
        try {
            const {data} = await axios.get<Promise<AxiosResponse<Array<iUser>>>>('https://jsonplaceholder.typicode.com/users/')
            return data
        } catch (e) {
            console.log('error TodoService >>> ', e)
        }
    }
}

interface iUser {
    id:number
    name:string
    username:string
    email:string
    address:{
        street:string
        suite:string
        city:string
        zipcode:string
        geo:{
            lat:string
            lng:string
        }
    },
    phone:string
    website:string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }

}