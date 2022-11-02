import React, { Suspense, useEffect, useState ,lazy} from 'react';
import "./App.css"
import Loader from './Components/Loader.jsx';
import { Routes, Route } from 'react-router-dom';
import axios from './axios/axios';
const Loginpage = lazy(() => import('./Components/Loginpage.jsx'));
const Signuppage = lazy(() => import('./Components/Signuppage.jsx'));
const Navbar = lazy(() => import('./Components/Navbar.jsx'));
const Profilepage = lazy(() => import('./Components/Profilepage.jsx'));
const Homepage = lazy(() => import('./Components/Homepage.jsx'));

const App = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [dropdownCss, setdropdownCss] = useState({
    display: 'none',
  });
  const [data, setdata] = useState();
  useEffect(() => {
    getToken();
  }, []);
  const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common = { Authorization: token }
      axios.post('/home')
        .then(res => {
          if (res.data.type) {
            setdata(res.data.user);
            setauthenticated(true)
          } else {
            setauthenticated(false)
          }
        })
    }
  }
  const dropdown = (e) => {
    if (e.target.className === "icon user-profile") {
      if (dropdownCss.display === "none") {
        setdropdownCss(prev => ({
          ...prev,
          display: 'block',
        }))
      } else {
        setdropdownCss(prev => ({
          ...prev,
          display: 'none'
        }))
      }
    }
    else {
      setdropdownCss(prev => ({
        ...prev,
        display: 'none'
      }))
    }
  }
  return (
    <div>
        <div>
          <Suspense fallback={<Loader />}>
          {authenticated && <Navbar data={data} dropdown={dropdown} dropdownCss={dropdownCss} setdropdownCss={setdropdownCss} />}
          <Routes>
            <Route path="/" element={
              authenticated ?
                <Homepage data={data} dropdown={dropdown} /> :
                <Loginpage setauthenticated={setauthenticated} />
            } />
            {!authenticated && <Route path="/accounts/emailsignup" element={<Signuppage setauthenticated={setauthenticated} />} />}
            <Route path="/:username" element={<Profilepage data={data} dropdown={dropdown} />} />

            <Route path="*" element={<div><h1>Error 404</h1></div>} />
          </Routes>
          </Suspense>
        </div>
    </div>
  );
}

export default App;
