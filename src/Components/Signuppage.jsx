import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
const Signuppage = ({ setauthenticated }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    ref5.current.disabled = true;
  }, []);
  const [input, setinput] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
    button: "",
  });
  const [attempt, setattempt] = useState({
    email: false,
    fullname: false,
    username: false,
    password: false,
  });
  const [valid, setvalid] = useState({
    email: false,
    fullname: false,
    username: false,
    password: false,
  });
  const Hide = () => {
    ref4.current.type = "password";
    setinput((prev) => ({
      ...prev,
      button: "Show",
    }));
  };
  const Show = () => {
    ref4.current.type = "text";
    setinput((prev) => ({
      ...prev,
      button: "Hide",
    }));
  };
  const signupform = (e) => {
    e.preventDefault();
    axios
      .post("/signup", {
        emailornumber: e.target[0].value,
        fullname: e.target[1].value,
        username: e.target[2].value,
        password: e.target[3].value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.type) {
          setauthenticated(true);
          navigate("/instagram");
        } else {
          alert("Signup Failed");
        }
      });
  };
  const onChangeHandler1 = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (
      valid.email &&
      ref2.current.value.length > 2 &&
      ref3.current.value.length > 2 &&
      ref4.current.value.length > 5
    ) {
      ref5.current.style.backgroundColor = "#3897f0";
      ref5.current.style.cursor = "pointer";
      ref5.current.disabled = false;
    } else if (ref4.current.value.length > 0) {
      setinput((prev) => ({
        ...prev,
        button: "Show",
      }));
      ref5.current.style.backgroundColor = "#abe2ff";
      ref5.current.disabled = true;
    } else {
      setinput((prev) => ({
        ...prev,
        button: "",
      }));
      ref5.current.style.backgroundColor = "#abe2ff";
      ref5.current.disabled = true;
    }
    setattempt((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
    if (e.target.name === ref4.current.name) {
      if (e.target.value.length > 5) {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: true,
        }));
      } else {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: false,
        }));
      }
    } else if (e.target.name === ref1.current.name) {
      if (
        e.target.value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: true,
        }));
      } else if (e.target.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: true,
        }));
      } else {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: false,
        }));
      }
    } else {
      if (e.target.value.length > 2) {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: true,
        }));
      } else {
        setvalid((prev) => ({
          ...prev,
          [e.target.name]: false,
        }));
      }
    }
  };

  return (
    <div>
      <div className="container2">
        <div className="box">
          <div className="heading"></div>
          <h2 className="vvzhL">
            Sign up to see photos and videos from your friends.
          </h2>
          <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221mrh52n1kfsl0i431ywulijsdx1wvir7h12jz6qo7cqiukyv5uaf%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D367032a2-76c4-4f33-bc0b-cf57ad75f649%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221mrh52n1kfsl0i431ywulijsdx1wvir7h12jz6qo7cqiukyv5uaf%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
            <button className="fb-login-btn" type="button">
              <div className="signupfblogo">
                <img
                  height="15px"
                  src="https://imgs.search.brave.com/AX34wiiWNWK_TUaPjJj-qm13dz5_VtTsAm8yxC8VIYU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/amtKWXlnSFFXc0hP/a01TeUlqdm13SGFI/YSZwaWQ9QXBp"
                  alt=""
                />
                Log in with Facebook
              </div>
            </button>
          </a>
          <div className="separator separator2">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <form className="login-form" onSubmit={signupform}>
            <div className="field">
              <input
                onChange={onChangeHandler1}
                ref={ref1}
                value={input.email}
                id="email"
                name="email"
                type="text"
                placeholder="Mobile Number or Email"
              />
              <label htmlFor="username">Mobile Number or Email</label>
              {valid.email ? (
                <ion-icon
                  className="check"
                  name="checkmark-circle-outline"
                ></ion-icon>
              ) : (
                attempt.email && (
                  <ion-icon
                    className="check"
                    name="close-circle-outline"
                  ></ion-icon>
                )
              )}
            </div>
            <div className="field">
              <input
                onChange={onChangeHandler1}
                ref={ref2}
                value={input.fullname}
                id="fullname"
                name="fullname"
                type="fullname"
                placeholder="Full Name"
              />
              <label htmlFor="username">Full Name</label>
              {valid.fullname ? (
                <ion-icon
                  className="check"
                  name="checkmark-circle-outline"
                ></ion-icon>
              ) : (
                attempt.fullname && (
                  <ion-icon
                    className="check"
                    name="close-circle-outline"
                  ></ion-icon>
                )
              )}
            </div>
            <div className="field">
              <input
                onChange={onChangeHandler1}
                ref={ref3}
                value={input.username}
                id="username"
                name="username"
                type="username"
                placeholder="Username"
              />
              <label htmlFor="username">Username</label>
              {valid.username ? (
                <ion-icon
                  className="check"
                  name="checkmark-circle-outline"
                ></ion-icon>
              ) : (
                attempt.username && (
                  <ion-icon
                    className="check"
                    name="close-circle-outline"
                  ></ion-icon>
                )
              )}
            </div>
            <div className="field field4">
              <input
                onChange={onChangeHandler1}
                ref={ref4}
                value={input.password}
                name="password"
                id="password"
                type="password"
                placeholder="password"
              />
              <label htmlFor="password">Password</label>
              {valid.password ? (
                <ion-icon
                  className="check"
                  name="checkmark-circle-outline"
                ></ion-icon>
              ) : (
                attempt.password && (
                  <ion-icon
                    className="check"
                    name="close-circle-outline"
                  ></ion-icon>
                )
              )}
              {input.button === "Hide" ? (
                <div className="button" onClick={Hide}>
                  Hide
                </div>
              ) : (
                <div className="button" onClick={Show}>
                  {input.button}
                </div>
              )}
            </div>
            <button ref={ref5} className="login-button" title="Signup">
              Sign up
            </button>
          </form>
          <p className="ZGwn1">
            By signing up, you agree to our{" "}
            <a
              href="https://help.instagram.com/581066165581870"
              tabIndex="0"
              waprocessedanchor="true"
            >
              Terms
            </a>{" "}
            ,{" "}
            <a
              href="https://help.instagram.com/519522125107875"
              tabIndex="0"
              waprocessedanchor="true"
            >
              Data Policy
            </a>{" "}
            and{" "}
            <a href="/legal/cookies/" tabIndex="0">
              Cookies Policy
            </a>{" "}
            .
          </p>
        </div>
        <div className="box">
          <p>
            Have an account?{" "}
            <Link className="signup" to="/">
              Log in
            </Link>
          </p>
        </div>
        Get the app.
        <div className="store">
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt=""
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D12E4DDBB-20BD-442C-989A-4B95C5384934%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
