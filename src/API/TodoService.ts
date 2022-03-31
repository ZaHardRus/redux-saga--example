import axios, {AxiosResponse} from "axios";

export class TodoService {
    static async getAll({limit=10,page=1}) {
        console.log(`class>>>`, limit, page)
        try {
            const {data} = await axios.get<Promise<AxiosResponse<Array<ITodo>>>>(
                `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
            )
            return data
        } catch (e) {
            console.log('error TodoService >>> ', e)
        }
    }
}

interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}