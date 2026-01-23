// import React from 'react';
import "./CustomStyle.css"
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom sticky-top p-2" style={{ backgroundColor: "#ffff" }}>
            <div className="container-fluid " style={{ padding: "0px 170px 5px 170px " }}>
                <Link className="navbar-brand" href="#"><img src="./media/images/Broker3.png" alt="" style={{ width: "35%" }} /></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link text-muted mx-3 hover-blue" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-muted mx-3 hover-blue" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-muted mx-3 hover-blue" aria-disabled="true" to="/products" >Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-muted mx-3 hover-blue" aria-disabled="true" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-muted mx-3 hover-blue" aria-disabled="true" to="/support">Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;