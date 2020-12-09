import React from 'react';
import {Link} from 'react-router-dom';
import "./app.css";
import Logo from "../../logo.png";


const Nav = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <div className="image-logo" >
      <img src={Logo} className="profile-pic"></img>
    </div>
    
  <Link className="navbar-brand" to="/">Training & Placement cell</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/addPost" >Add Post</Link>
      </li>
    </ul>
    <ul className="nav justify-content-end navUl">
      <ul className="navbar-nav mr-auto">
      <li class="nav-item active">
         <a class="nav-link" href="#" >Login</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#" >Register</a>
      </li>
      </ul>
    </ul>
 
  </div>
  </div>
</nav>
    )

    
}

export default Nav;