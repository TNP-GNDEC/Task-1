import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../logo.png";

const navbar = () => {
    return(
        <nav className="navbar navbarBg navbar-expand-lg">
            <Link className="navbar-brand" to="/">
            <img src={Logo} width="30" height="30" 
            className="d-inline-block align-top" alt="" loading="lazy" />
            Training and Placement Cell
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarToggleDemo02">
				<span className="navbar-toggler-icon toggle_icon"></span>
			</button>
            <div className="collapse navbar-collapse" id="navbarToggleDemo02">
                <ul className="navbar-nav ml-auto navUl">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item addlink">
                        <Link className="nav-link" to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item addlink">
                        <Link className="nav-link" to="/addPosts">Create Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar;