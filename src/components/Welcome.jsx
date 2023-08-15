import React from 'react'
import { logout, selectUser } from '../features/userSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

const Welcome = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    return (
        <div>
            <div className="side-bar">
                <i className="fa-solid fa-house"></i>

                <i className="fa-regular fa-clipboard"></i>
            </div>
            <div className="side-2">
                <div className="navbar">
                    <button className="logout" onClick={(e) => handleLogout(e)}>
                        Logout
                    </button>
                </div>
                <div className="main-container">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Welcome