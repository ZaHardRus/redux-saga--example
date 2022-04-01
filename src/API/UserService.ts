import axios, {AxiosResponse} from "axios";

export class UserService {
    static async getAll() {
        try {
            const {data} = await axios.get<Promise<AxiosResponse<Array<IUser>>>>('http://localhost:3001/users')
            return data
        } catch (e) {
            throw new Error('Произошла ошибка при запросе всех пользователей')
        }
    }

    static async getOneById(id: any) {
        try {
            const {data} = await axios.get<Promise<AxiosResponse<IUser>>>(`http://localhost:3001/users/${id}`)
            return data
        } catch (e) {
            throw new Error('Произошла ошибка при запросе пользователя')
        }
    }

    static async createUser(userData: IUser) {
        try {
            const {data} = await axios.post<IUser, Promise<AxiosResponse<IUser>>>('http://localhost:3001/users', userData)
            return [data]
        } catch (e) {
            throw new Error('Произошла ошибка при добавлении пользователя')
        }

    }

    static async removeUser(id: Pick<IUser, 'id'>) {
        try {
            return await axios.delete<Promise<AxiosResponse>>(`http://localhost:3001/users/${id}`)
                .then(() => id)
        } catch (e) {
            throw new Error('Произошла ошибка при удалении пользователя')
        }

    }

    static async updateUser(id: string, obj: IUser) {
        try {
            const {data} = await axios.patch<IUser, Promise<AxiosResponse>>(`http://localhost:3001/users/${id}`, obj)
            return data
        } catch (e) {
            throw new Error('Произошла ошибка при изменении пользователя')
        }

    }
}

export interface IUser {
    id: string
    name: string
    username: string
    email: string
}