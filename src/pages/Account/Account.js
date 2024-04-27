import Navbar from "../../components/Navbar/Navbar";
import "./Account.css";
import PersonalInformation from "./PersonalInformation";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login", { replace: true });
    localStorage.setItem("isAuthenticated", false);
  };
  return (
    <div className='whole-container'>
      <Navbar />
      <div className='acc-container'>
        <div className='list-container'>
          <ul>
            <li>
              <h3>Personal Information</h3>
            </li>
            <li>
              <button className='button-27' onClick={logoutHandler}>
                Log out
              </button>
            </li>
          </ul>
        </div>
        <div className=''>
          <PersonalInformation />
        </div>
      </div>
    </div>
  );
}
