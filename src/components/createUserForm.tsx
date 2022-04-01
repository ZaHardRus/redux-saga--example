import {FormEvent, useState} from "react";
import {fetchCrateUserAC} from "../redux/sagas/user-saga/actionCreators";
import {useAppDispatch} from "../redux";

export const CreateUserForm = () => {
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        username: '',
        email: ''
    })
    const formSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(fetchCrateUserAC(formData))
    }
    return(
        <form onSubmit={formSubmit}>
            <div>
                <input
                    type="text"
                    placeholder='id'
                    value={formData.id}
                    onChange={(e) => setFormData(prev => ({...prev, id: e.target.value}))}/>
            </div>
            <div>
                <input
                    type="text"
                    placeholder='name'
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}/>
            </div>
            <div>
                <input
                    type="text"
                    placeholder='username'
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({...prev, username: e.target.value}))}/>
            </div>
            <div>
                <input
                    type="text"
                    placeholder='email'
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}/>
            </div>
            <button type='submit'>send</button>
        </form>
    )
}