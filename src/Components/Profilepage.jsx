import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../axios/axios';

const Profilepage = () => {
    const { username } = useParams();
    const [User, setUser] = useState(null);
    useEffect(() => {
        document.querySelector('*').style.fontSize = '10px';
        document.querySelector('*').style.boxSizing = 'border-box';
        Axios.get(`/users/${username}`)
            .then(res => {
                setUser(res.data);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            {User && <div className="profile-page">
                <header>
                    <div className="container">
                        <div className="profile">
                            <div className="profile-image">
                                <img src={User.user.profilePicture} alt="Profile" />
                            </div>
                            <div className="profile-user-settings">
                                <h1 className="profile-user-name">{User.user.username}</h1>
                                {User.authenticated && <button className="btn profile-edit-btn">Edit Profile</button>}
                                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog"
                                    aria-hidden="true"></i></button>
                            </div>
                            <div className="profile-stats">
                                <ul>
                                    <li><span className="profile-stat-count">{User.user.posts.length}</span> posts</li>
                                    <li><span className="profile-stat-count">{User.user.followers.length}</span> followers</li>
                                    <li><span className="profile-stat-count">{User.user.following.length}</span> following</li>
                                </ul>
                            </div>
                            <div className="profile-bio">
                                <p><span className="profile-real-name">{User.user.fullname} </span>
                                    <br /> {User.user.bio}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="container">
                        <div className="gallery">
                            {User.user.posts.map(post => {
                                return (
                                    <div className="gallery-item" key={post.id}>
                                        <div className="gallery-image">
                                            <img src={post.image} alt="Post" />
                                        </div>
                                        <div className="gallery-item-info">
                                            <ul>
                                                <li className="gallery-item-info-item">
                                                    <span className="profile-bio">{post.caption}</span>
                                                </li>
                                                <li className="gallery-item-info-item">
                                                    <span className="profile-bio">{post.likes.length} likes</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                        <div className="loader"></div>
                    </div>
                </main>
            </div>}
        </div>
    );
}

export default Profilepage;
