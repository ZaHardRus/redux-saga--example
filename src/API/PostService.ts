import axios, {AxiosResponse} from "axios";

export class PostService {
    static async getAll({limit=10,page=1}:{limit:number,page:number}){
        try {
            const data = await axios.get<Promise<AxiosResponse<Array<IPost>>>>(
                `http://localhost:3001/posts?_limit=${limit}&_page=${page}`
            )
            return data.data
        } catch (e) {
            console.log('error TodoService >>> ', e)
        }
    }
}

export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}