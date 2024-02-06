 import { Link } from 'react-router-dom';
import '../assets/css/navbar.css'; // Import CSS file for styling
import profile from "../assets/images/tm2.jpeg"
const CustomNavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="company-name">BritEngCert</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/enquiry">Enquiry</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        <div className="profile">
          <img src={profile} alt="Profile" />
          <div className="dropdown">
            <button className="dropbtn">Profile</button>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavBar;
