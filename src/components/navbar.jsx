
import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar(props) {
/*    getClasses() {
        return props.itemsCount === 0
            ? "bg-warning"
            : "bg-danger";
    }*/
     return (
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                            className="navbar-brand " to="/">
                            Navbar
                        </NavLink>
                        <div className = "collapse navbar-collapse"
                             id = "navbarNav">
                            <ul className = "navbar-nav">
                                <li className = "nav-item">
                                    <NavLink
                                        className = "nav-link active "
                                        aria-current = "page"
                                        style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                                        to = "/">Home</NavLink>
                                </li>
                                <li className = "nav-item">
                                    <NavLink
                                        className = "nav-link "
                                        style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                                        to = "/about">About</NavLink>
                                </li>
                                <li className = "nav-item">
                                    <NavLink
                                        className = "nav-link "
                                        style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                                        to = "/contact">Contact</NavLink>
                                </li>
                                <li className = "nav-item">
                                    <NavLink
                                        className = "nav-link "
                                        style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                                        to = "/products">Products</NavLink>
                                </li>
                                <li className = "nav-item">
                                    <NavLink
                                        className = "nav-link "
                                        style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
                                        to = "/cart">Shopping Cart</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="mx-3 btn btn-primary position-relative"
                    >
                        Items
                        <span className="bg-danger position-absolute top-0 start-100 translate-middle badge rounded-pill">
              {props.itemsCount}
            </span>
                    </button>
                </nav>
            </div>
        );
}

export default Navbar;
