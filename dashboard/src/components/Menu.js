import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }
    const handleProfileClick = (index) => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = "menu";
    const activeMenuclass = "menu selected";

    return (
        <div className="menu-container">
            <img src="./media/images/kitelogo.svg" style={{ width: "30px" }} />
            <div className="menus ">
                <ul>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/" onClick={() => handleMenuClick(0)}>
                            <p className={selectedMenu === 0 ? activeMenuclass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/orders" onClick={() => handleMenuClick(1)}>
                            <p className={selectedMenu === 1 ? activeMenuclass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/holdings" onClick={() => handleMenuClick(2)}>
                            <p className={selectedMenu === 2 ? activeMenuclass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/positions" onClick={() => handleMenuClick(3)}>
                            <p className={selectedMenu === 3 ? activeMenuclass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/funds" onClick={() => handleMenuClick(4)}>
                            <p className={selectedMenu === 4 ? activeMenuclass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/apps" onClick={() => handleMenuClick(5)}>
                            <p className={selectedMenu === 5 ? activeMenuclass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={() => handleProfileClick} >
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;