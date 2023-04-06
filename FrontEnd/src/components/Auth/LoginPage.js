import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import "./AuthForm.css";
import fbLogo from "../../img/fb-logo.png";

const FACEBOOK_AUTH_URL =
  "http://localhost:8082/oauth2/authorize/facebook?redirect_uri=http://localhost:3000/oauth2/redirect";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");

  // SUBMIT HANDLER
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputEmail = inputEmailRef.current.value;
    const inputPassword = inputPasswordRef.current.value;

    axios
      .post("http://localhost:8082/api/auth/login", {
        email: inputEmail,
        password: inputPassword,
      })
      .then((res) => {
        console.log(res);
        setLoginStatus("SUCCESS");
        authCtx.login(res.data.accessToken);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err.message);
        setLoginStatus("FAILED");
      });

    inputEmailRef.current.value = "";
    inputPasswordRef.current.value = "";
  };

  return (
    <div className="d-flex justify-content-center ">
      <div className="form-auth my-5  py-5 bg-light">
        <h3 className="mb-3 fw-semibold text-center">Login</h3>
        <form onSubmit={onSubmitHandler}>
          {loginStatus === "FAILED" && (
            <div className="form-error text-center">
              Email or password is invalid
            </div>
          )}
          <input
            ref={inputEmailRef}
            className="form-control mb-3 ps-4 pe-0"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            ref={inputPasswordRef}
            className="form-control mb-3 ps-4 pe-0"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-primary btn-auth">
            Login
          </button>
        </form>
        <Link
          to="/signup"
          className="d-block mt-3 text-center text-decoration-none"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;