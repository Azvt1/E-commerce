import { useState } from "react";
import "./SignUp.css";

export const SignUp = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleClick = () => {
    if (validateEmail(email)) {
      setIsClicked(true);
      setIsValidEmail(true);
      setEmail("");
    } else {
      setIsValidEmail(false);
    }
  };

  const handleOnChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="signup_container">
      <h2 className="signup_title">SIGN UP FOR OUR NEWSLETTER</h2>
      <div className="form_container">
        <form>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your e-mail address"
            disabled={isClicked}
            onChange={handleOnChange}
            className={!isValidEmail ? "invalid" : ""}
          />
          <br />
          <input
            className={`submitBtn ${isClicked ? "clicked" : ""}`}
            type="button"
            value="SIGN UP"
            onClick={handleClick}
          />
          {!isValidEmail && (
            <h2 className="error_message">
              Please enter a valid email address.
            </h2>
          )}
          {isClicked && isValidEmail && (
            <h2>
              Congratulations! You have been signed up for our newsletters
            </h2>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
