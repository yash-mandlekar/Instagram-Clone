import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios/axios';

const Loginpage = ({setauthenticated}) => {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    useEffect(() => {
        ref3.current.disabled = true
    }, []);
    const [input, setinput] = useState({
        username: "",
        password: "",
        button: ""
    });
    const Hide = () => {
        ref2.current.type = "password";
        setinput(prev => ({
            ...prev,
            button: "Show"
        }))
    }
    const Show = () => {
        ref2.current.type = "text"
        setinput(prev => ({
            ...prev,
            button: "Hide"
        }))
    }
    const loginform = (e) => {
        e.preventDefault()
        axios.post('/login', {
            emailornumberorusername: e.target[0].value,
            password: e.target[1].value
          }).then(res => {
            if(res.data){
                setauthenticated(true)
                localStorage.setItem('token', res.data.token)
                window.location.reload()
            }
          })
    }
    const onChangeHandler1 = (e) => {
        setinput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        if (ref1.current.value !== "" && ref2.current.value.length > 5) {
            ref3.current.style.backgroundColor = "#3897f0"
            ref3.current.disabled = false
            ref3.current.style.cursor = "pointer"
        } else if (ref2.current.value.length > 0) {
            setinput(prev => ({
                ...prev,
                button: "Show"
            }))
            ref3.current.style.backgroundColor = "#abe2ff"
            ref3.current.disabled = true
            ref3.current.style.cursor = "default"
        } else {
            setinput(prev => ({
                ...prev,
                button: ""
            }))
            ref3.current.style.backgroundColor = "#abe2ff"
            ref3.current.disabled = true
            ref3.current.style.cursor = "default"
        }
    }
    return (
        <div>
            <div className="cnt">
                <div className="phone">
                    <img className="cntimg" src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt="" />
                    <div className="phoneimg"></div>
                </div>
                <div className="container1">
                    <div className="box">
                        <div className="heading"></div>
                        <form className="login-form" onSubmit={loginform}>
                            <div className="field">
                                <input
                                    onChange={onChangeHandler1}
                                    ref={ref1}
                                    value={input.username}
                                    id="username"
                                    name='username'
                                    type="name"
                                    placeholder="Phone number, username, or email" />
                                <label htmlFor="username">Phone number, username, or email</label>
                            </div>
                            <div className="field">
                                <input
                                    onChange={onChangeHandler1}
                                    ref={ref2}
                                    value={input.password}
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                />
                                <label htmlFor="password">Password
                                </label>
                                {input.button === "Hide" ? <div className='button' onClick={Hide}>Hide</div> :
                                    <div className='button' onClick={Show}>{input.button}</div>}
                            </div>
                            <button ref={ref3} className="login-button" title="login">Log In</button>
                            <div className="separator">
                                <div className="line"></div>
                                <p>OR</p>
                                <div className="line"></div>
                            </div>
                            <div className="other">
                                <button className="fb-login-btn" type="button">
                                    <i className="fa fa-facebook-official fb-icon"></i>
                                    <span className="">Log in with Facebook</span>
                                </button>
                                <Link className="forgot-password" to="#">Forgot password?</Link>
                            </div>
                        </form>
                    </div>
                    <div className="box">
                        <p>Don't have an account? 
                            <Link className="signup" to="/accounts/emailsignup">Sign up</Link></p>
                    </div>
                    Get the app.
                    <div className="store">
                        <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                            <img
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                                alt="" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D12E4DDBB-20BD-442C-989A-4B95C5384934%26utm_content%3Dlo%26utm_medium%3Dbadge">
                            <img
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                                alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;