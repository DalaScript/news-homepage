/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import './HamburgerMenu.css';
import Logo from '../../assets/images/logo.svg';
import HamburgerOpen from '../../assets/images/icon-menu.svg';
import HamburgerClose from '../../assets/images/icon-menu-close.svg';

const HamburgerMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        setMenuIsOpen(true);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    const menuLinks = [
        {
            title: "Home",
        },
        {
            title: "New",
        },
        {
            title: "Popular",
        },
        {
            title: "Trending",
        },
        {
            title: "Categories",
        },
    ]
        
    return (
        <nav className="navbar">
            <a className="navbar__home-link" href="#">
                <img className="navbar__logo" src={Logo} alt="logo" />
            </a>
            <img src={HamburgerOpen} onClick={openMenu} alt="" />
            {menuIsOpen &&
                <ul className="navbar__menu">
                    {menuLinks.map((item, index) => (
                        <li className="navbar__list" key={index}>
                            <a className="navbar__link" href="#">
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <img className="navbar__hamburger-close" onClick={closeMenu} src={HamburgerClose} alt="hamburger close" />
                </ul>
            }
            
        </nav>
  );
};

export default HamburgerMenu;
