import {useAppDispatch, useAppSelector} from "../redux";
import {useEffect} from "react";
import {fetchRemoveUserAC, fetchUsersAC} from "../redux/sagas/user-saga/actionCreators";
import {IUser} from "../API/UserService";
import {Link} from "react-router-dom";
import {usersSelector} from "../redux/selectors/user-selector";
import {CreateUserForm} from "../components/createUserForm";

export const UsersPage = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(usersSelector)

    useEffect(() => {
        dispatch(fetchUsersAC())
    }, [])


    const removeUserHandler = (el: IUser) => {
        dispatch(fetchRemoveUserAC(el.id))
    }
    return (
        <div>
            {users?.map((el: IUser) => {
                return (
                    <div key={el.id} className="cell">
                        <Link to={`/users/${el.id}`}>{el.name}</Link>
                        <button onClick={() => removeUserHandler(el)}>delete</button>
                    </div>
                )
            })}
            <CreateUserForm/>
        </div>
    )
}