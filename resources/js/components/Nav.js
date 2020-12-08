import React from "react";
import {Link} from "react-router-dom";

const Nav = () => { 
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shad">
  <Link className="navbar-brand" to="/">Trainning and Placement</Link>
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
      <li className="nav-item">
        <Link className="nav-link" to="/AddContacts">Add Contact</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}

export default Nav;