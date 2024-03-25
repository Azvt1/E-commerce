import Navbar from "../../components/Navbar/Navbar";
import "./Nopage.css";
const Nopage = () => {
  return (
    <div>
      <Navbar />
      <div className="no-page-container">
        <h1>Page was not found</h1>
      </div>
    </div>
  );
};

export default Nopage;
