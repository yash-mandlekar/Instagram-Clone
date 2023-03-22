import React from 'react';
import {
    like, cover1, cover2, cover3, cover9, cover10, cover11, cover12, cover13, option, comment, send, save, smile
} from '../images'

const Homepage = ({ data, dropdown, setcurrent }) => {
    return (
        <div>
            <div className="main" onClick={dropdown}>
                <div className="wrapper">
                    <div className="left-col">
                        <div className="status-wrapper">
                            <div className="status-card">
                                <div className="profile-pic">
                                    <img src={data.profilePicture} alt="" />
                                </div>
                                <p className="username">Add Story</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src={cover2} alt="" /></div>
                                <p className="username">user_name_1</p>
                            </div>
                            <div className="status-card">
                                <div className="profile-pic"><img src={cover3} alt="" /></div>
                                <p className="username">user_name_2</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="info">
                                <div className="user">
                                    <div className="profile-pic"><img src={cover1} alt="" /></div>
                                    <p className="username">modern_web_channel</p>
                                </div>
                                <img src={option} className="options" alt="" />
                            </div>
                            <img src={cover1} className="post-image" alt="" />
                            <div className="post-content">
                                <div className="reaction-wrapper">
                                    <img src={like} className="icon" alt="" />
                                    <img src={comment} className="icon" alt="" />
                                    <img src={send} className="icon" alt="" />
                                    <img src={save} className="save icon" alt="" />
                                </div>
                                <p className="likes">1,012 likes</p>
                                <p className="description"><span>username </span> Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum
                                    quo natus molestias?</p>
                                <p className="post-time">2 minutes ago</p>
                            </div>
                            <div className="comment-wrapper">
                                <img src={smile} className="icon" alt="" />
                                <input type="text" className="comment-box" placeholder="Add a comment" />
                                <button className="comment-btn">post</button>
                            </div>
                        </div>
                        <div className="post">
                            <div className="info">
                                <div className="user">
                                    <div className="profile-pic"><img src={cover2} alt="" /></div>
                                    <p className="username">modern_web_channel</p>
                                </div>
                                <img src={option} className="options" alt="" />
                            </div>
                            <img src={cover2} className="post-image" alt="" />
                            <div className="post-content">
                                <div className="reaction-wrapper">
                                    <img src={like} className="icon" alt="" />
                                    <img src={comment} className="icon" alt="" />
                                    <img src={send} className="icon" alt="" />
                                    <img src={save} className="save icon" alt="" />
                                </div>
                                <p className="likes">1,012 likes</p>
                                <p className="description"><span>username </span> Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum
                                    quo natus molestias?</p>
                                <p className="post-time">2 minutes ago</p>
                            </div>
                            <div className="comment-wrapper">
                                <img src={smile} className="icon" alt="" />
                                <input type="text" className="comment-box" placeholder="Add a comment" />
                                <button className="comment-btn">post</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="profile-card">
                            <div className="profile-pic">
                                <img src={data && data.profilePicture} alt="" />
                            </div>
                            <div>
                                <p className="username">{data && data.username}</p>
                                <p className="sub-text">{data && data.fullname}</p>
                            </div>
                            <button className="action-btn">switch</button>
                        </div>
                        <p className="suggestion-text">Suggestions for you</p>
                        <div className="profile-card">
                            <div className="profile-pic">
                                <img src={cover9} alt="" />
                            </div>
                            <div>
                                <p className="username">modern_web_channel</p>
                                <p className="sub-text">followed by user</p>
                            </div>
                            <button className="action-btn">follow</button>
                        </div>
                        <div className="profile-card">
                            <div className="profile-pic">
                                <img src={cover10} alt="" />
                            </div>
                            <div>
                                <p className="username">modern_web_channel</p>
                                <p className="sub-text">followed by user</p>
                            </div>
                            <button className="action-btn">follow</button>
                        </div>
                        <div className="profile-card">
                            <div className="profile-pic">
                                <img src={cover11} alt="" />
                            </div>
                            <div>
                                <p className="username">modern_web_channel</p>
                                <p className="sub-text">followed by user</p>
                            </div>
                            <button className="action-btn">follow</button>
                        </div>
                        <div className="profile-card">
                            <div className="profile-pic">
                                <img src={cover12} alt="" />
                            </div>
                            <div>
                                <p className="username">modern_web_channel</p>
                                <p className="sub-text">followed by user</p>
                            </div>
                            <button className="action-btn">follow</button>
                        </div>
                        <div className="profile-card">
                            <div className="profile-pic">
                                <img src={cover13} alt="" />
                            </div>
                            <div>
                                <p className="username">modern_web_channel</p>
                                <p className="sub-text">followed by user</p>
                            </div>
                            <button className="action-btn">follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
