import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    img, home, messenger, add, explore, like, profile, bookmark, settings, witch, logout
} from '../images'


const Navbar = ({ data, dropdownCss, setdropdownCss, dropdown }) => {
    const navigate = useNavigate();
    const homebtn = () => {
        navigate('/');
    }
    const messengerbtn = () => {
        // window.location.href = '/';
    }
    const addbtn = () => {
        // window.location.href = '/';
    }
    const explorebtn = () => {
        // window.location.href = '/';
    }
    const likebtn = () => {
        // window.location.href = '/';
    }
    const Logout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('token')
            window.location.href = '/';
        }
    }
    const Profile = () => {
        navigate(`/${data.username}`);
    }
    const Saved = () => {
        // window.location.href = '/';
    }
    const Settings = () => {
        // window.location.href = '/';
    }
    const Witch = () => {
        // window.location.href = '/';
    }

    return (
        <div>
            <nav className="navbar" onClick={dropdown}>
                <div className="nav-wrapper" >
                    <img src={img} className="brand-img" alt="" />
                    <input type="text" className="search-box" placeholder="search" />
                    <div className="nav-items">
                        <img src={home} onClick={homebtn} id="home-page" className="icon" alt="" />
                        <img src={messenger} onClick={messengerbtn} className="icon" alt="" />
                        <img src={add} onClick={addbtn} className="icon" alt="" />
                        <img src={explore} onClick={explorebtn} className="icon" alt="" />
                        <img src={like} onClick={likebtn} className="icon" alt="" />

                        <div className="dropdown">
                            <img src={data && data.profilePicture} className="icon user-profile" alt="" />
                            <div className="dropdown-content" style={dropdownCss}>
                                <div className="square"></div>
                                <a onClick={Profile} className="a" id="profile-page">
                                    <img src={profile} className="drop-icon" alt="" />
                                    <span>Profile</span>
                                </a>
                                <a onClick={Saved} className="a">
                                    <img src={bookmark} className="drop-icon" alt="" />
                                    <span>Saved</span>
                                </a>
                                <a onClick={Settings} className="a">
                                    <img src={settings} className="drop-icon" alt="" />
                                    <span>Settings</span>
                                </a>
                                <a onClick={Witch} className="a">
                                    <img src={witch} className="drop-icon" alt="" />
                                    <span>Switch Accounts</span>
                                </a>
                                <hr className="W4P49" />
                                <div onClick={Logout} className="a">
                                    <img src={logout} className="drop-icon" alt="" />
                                    <span>Log Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
