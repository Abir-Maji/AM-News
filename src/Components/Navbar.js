import React from 'react';
import { NavLink } from 'react-router-dom';
import './Css/Navbar.css'; 
import logo from './Images/power.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark fixed-top">
      <div className="wrapper"></div>
      <div className="container-fluid all-show">
        <a className="navbar-brand" href="">
          {/* <img src={logo} alt="Logo" className="logo" height="50px" width="50px" /> */}
          <span className="badge bg-light text-dark fs-4"><img src={logo} alt="Logo" className="logo" height="50px" width="50px" />
            AM <span className="live-icon">LIVE</span>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Toi" activeClassName="active">TOI</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Bbc" activeClassName="active">BBC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Indiatv" activeClassName="active">AAJ TAK</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Abp" activeClassName="active">ABP NEWS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Timesnow" activeClassName="active">TIMES NOW</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Ndtv" activeClassName="active">NDTV</NavLink>
            </li>
    
          </ul>
          <div className="d-flex align-items-center" style={{marginRight:"30px"}}>
            <a href="https://www.linkedin.com/in/abir-maji/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-1">
              <i className="fab fa-linkedin"></i> 
            </a>
            <a href="https://github.com/Abir-Maji" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-1">
              <i className="fab fa-github"></i> 
            </a>
          
          </div>
          <div className="d-flex flex-column sim">
            <span>Enquiry:</span>
            <small className="text-primary">aec.cse.abirmaji@gmail.com</small>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
