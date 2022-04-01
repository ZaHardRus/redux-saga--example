import React, {FormEvent, useState} from "react";
import {IUser, UserService} from "../API/UserService";
import {fetchUpdateUserDetailsAC} from "../redux/sagas/userDetails-saga/actionCreators";
import {useAppDispatch} from "../redux";

interface EditUserFormProps {
    user:IUser,
    toggleEditMode:()=>void
}
export const EditUserForm:React.FC<EditUserFormProps> = ({user, toggleEditMode}) => {
    const dispatch = useAppDispatch()
    const [fields, setFields] = useState<IUser>(user)
    const formHandler = async (e: FormEvent) => {
        e.preventDefault()
        await UserService.updateUser(user.id, fields)
        dispatch(fetchUpdateUserDetailsAC(fields))
        toggleEditMode()
    }
    return (
        <form onSubmit={formHandler}>
            <div>
                <input
                    type="text"
                    value={fields.name}
                    onChange={e => setFields((prev: IUser) => ({...prev, name: e.target.value}))}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={fields.username}
                    onChange={e => setFields((prev: IUser) => ({...prev, username: e.target.value}))}
                />
            </div>
            <div>
                <input
                    type="text"
                    value={fields.email}
                    onChange={e => setFields((prev: IUser) => ({...prev, email: e.target.value}))}
                />
            </div>
            <button>update</button>
        </form>
    )
}