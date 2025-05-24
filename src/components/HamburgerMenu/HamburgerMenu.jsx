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

    // function updateNavbar(e) {
    //     const match = e.matches;
    //     console.log(match);
    //     if(match) {
    //         navbarMenu.removeAttribute('inert');
    //     }else {
    //         navbarMenu.setAttribute('inert', '');
    //     }
    // }

    // const closeMenu = () => {
    //     navbarMenu.classList.remove('navbar__menu--show');
    // }

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
            <img className="navbar__hamburger-open" onClick={openMenu} src={HamburgerOpen} alt="" />
            <div className={`navbar__overlay${menuIsOpen ? ' navbar__overlay--show': ''}`} onClick={closeMenu} ></div>
            <ul className={`navbar__menu${menuIsOpen ? ' navbar__menu--show' : ''}`} 
                {...(menuIsOpen ? '' : { "aria-hidden": true, inert: true })}
            >
                {menuLinks.map((item, index) => (
                    <li className="navbar__list" key={index}>
                        <a className="navbar__link" href="#">
                            {item.title}
                        </a>
                    </li>
                ))}
                <img className="navbar__hamburger-close" src={HamburgerClose} onClick={closeMenu} alt="hamburger close" />
            </ul>
        </nav>
    );
};

export default HamburgerMenu;
