import firstHalfImage from "../../assets/img/goodBg-removebg.png";
import logo from "../../assets/img/logo.svg";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching the users", error));
  }, []);

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validation = () => {
    let errors = {
      email: "",
      password: "",
    };

    if (!values.email) {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email format is incorrect";
    } else if (!users.some((user) => user.email === values.email)) {
      errors.email = "Email is not registered";
    }

    if (!values.password) {
      errors.password = "Password should not be empty";
    }

    setErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validation();

    if (isValid) {
      try {
        const response = await fetch("http://localhost:3000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        response.json().then((data) => {
          if (data.success) {
            if (response.ok) {
              console.log("Successfuly logged in");
              navigate("/");
            } else {
              setErrors({ ...errors, password: "Invalid password" }); // setPassword error
              console.error("Incorrect password", response.statusText);
            }
          } else {
            setErrors({ ...errors, password: data.status });
          }
        });
      } catch (error) {
        console.error("Errors loging in: ", error);
      }
    }
  };

  return (
    <div className="loginPage_container">
      <div className="first_half">
        <img src={firstHalfImage} alt="girl making online shopping" />
        <h1>Kaira online shop</h1>
        <p>Shop that feels like a home</p>
      </div>
      <div className="second_half">
        <form action="" noValidate={true} onSubmit={handleSubmit}>
          <img src={logo} alt="shop logo" />
          <div className="input_container">
            <h3>Login</h3>

            <div className={`input-box ${errors.email && "errors"}`}>
              <input
                type="text"
                className={`transparent-input ${errors.email && "errors"}`}
                placeholder="Email"
                name="email"
                onChange={handleInput}
                required
              />
              <FaUser />
            </div>
            <h3>Password</h3>
            <div className={`password-box ${errors.password && "errors"}`}>
              <input
                type="password"
                name="password"
                className={`transparent-input ${errors.password && "errors"}`}
                onChange={handleInput}
                placeholder="Password"
                required
              />
              <FaLock />
            </div>
            <div className="forgot-password">
              <a href="*">Forgot password?</a>
            </div>
          </div>
          <ul className="error-list">
            {Object.values(errors).map(
              (error, index) => error && <li key={index}>{error}</li>
            )}
          </ul>
          <div className="form_submit_container">
            <button type="submit" className="button-27">
              Sign in
            </button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
