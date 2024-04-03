import firstHalfImage from "../../assets/img/goodBg-removebg.png";
import logo from "../../assets/img/logo.svg";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Register.css";
import { useState, useEffect } from "react";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching the users", error));
  }, []);

  const resetForm = () => {
    const inputs = document.querySelectorAll(".transparent-input");
    inputs.forEach((element) => {
      element.value = "";
    });
  };

  const validation = () => {
    let errors = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };

    if (!values.username) {
      errors.username = "Username should not be empty";
    } else if (users.some((user) => user.name === values.username)) {
      errors.username = "Username is already taken";
    }

    if (!values.email) {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email format is incorrect";
    } else if (users.some((user) => user.email === values.email)) {
      errors.email = "Email is already associated with another account";
    }

    if (!values.password) {
      errors.password = "Password should not be empty";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    // Check if there are no errors
    return Object.values(errors).every((error) => !error);
  };

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validation();

    if (isValid) {
      try {
        const response = await fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            name: values.username,
          }),
        });

        if (response.ok) {
          resetForm();
          setSuccessMessageVisible(true);
          console.log("ok");
          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        } else {
          console.error("Failed to register user:", response.statusText);
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      console.log("Form submission failed due to validation errors");
    }
  };

  return (
    <div className="registerPage_container">
      <div className="first_half">
        <img src={firstHalfImage} alt="girl making online shopping" />
        <h1>Kaira online shop</h1>
        <p>Shop that feels like a home</p>
      </div>
      <div className="second_half">
        <form action="" noValidate={true} onSubmit={handleSubmit}>
          <img src={logo} alt="shop logo" />
          <div className="input_container">
            <h3>Register</h3>
            <div className={`input-box ${errors.username && "error"}`}>
              <input
                type="text"
                className={`transparent-input ${errors.username && "error"}`}
                placeholder="Username"
                name="username"
                onChange={handleInput}
                required
              />
              <FaUser />
            </div>

            <div className={`input-box ${errors.email && "error"}`}>
              <input
                type="email"
                name="email"
                className={`transparent-input ${errors.email && "error"}`}
                placeholder="Email"
                onChange={handleInput}
                required
              />
              <FaEnvelope />
            </div>

            <h3>Password</h3>
            <div className={`password-box ${errors.password && "error"}`}>
              <input
                type="password"
                name="password"
                className={`transparent-input ${errors.password && "error"}`}
                placeholder="Password"
                onChange={handleInput}
                required
              />
              <FaLock />
            </div>
            <div
              className={`confirm-password-box ${
                errors.confirmPassword && "error"
              }`}
            >
              <input
                type="password"
                name="confirmPassword"
                className={`transparent-input ${
                  errors.confirmPassword && "error"
                }`}
                placeholder="Confirm Password"
                onChange={handleInput}
                required
              />
              <FaLock />
            </div>
            {successMessageVisible && (
              <div className="success-message">
                Successfully registered. Redirecting to login page...
              </div>
            )}

            <ul className="error-list">
              {Object.values(errors).map(
                (error, index) => error && <li key={index}>{error}</li>
              )}
            </ul>
          </div>
          <div className="form_submit_container">
            <button type="submit" className="button-27">
              Register
            </button>
            <div className="login-link">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
