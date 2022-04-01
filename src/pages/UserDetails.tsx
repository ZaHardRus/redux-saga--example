import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchUserDetailsAC} from "../redux/sagas/userDetails-saga/actionCreators";
import {useAppDispatch, useAppSelector} from "../redux";
import {EditUserForm} from "../components/editUserForm";

export const UserDetails = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams<string>()
    const user = useAppSelector(state => state.userDetails.user)
    const [editMode, setEditMode] = useState(false)
    const toggleEditMode = () => {
        setEditMode(prev => !prev)
    }

    useEffect(() => {
        dispatch(fetchUserDetailsAC(id))
    }, [id])

    return (
        <div>
            {!editMode
                ?
                <div>
                    <p><b>name:</b>{user.name}</p>
                    <p><b>username:</b>{user.username}</p>
                    <p><b>email:</b>{user.email}</p>
                </div>
                :
                <EditUserForm user={user} toggleEditMode={toggleEditMode}/>
            }
            <button onClick={toggleEditMode}>toggleMode</button>
        </div>
    )
}