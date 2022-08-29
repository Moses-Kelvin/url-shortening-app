import React from "react";

import Button from "../UI/Button/Button";

import { ReactComponent as Logo } from '../../asset/logo.svg'

import hamburger from '../../asset/icon-hamburger.svg'

import close from '../../asset/icon-close.svg'

import classes from './Navbar.module.css'

const Navbar = (props) => {

    const menuClickHandler = () => {
        props.onSetMenuClick(prevVal => !prevVal)
    }

    return (
        <nav className={classes.navbar}>
            <div>
                <div>
                    <Logo className={classes['navbar-img']}></Logo>
                </div>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resourses</li>
                </ul>
            </div>
            <img className={classes.hamburger} alt=""
                onClick={menuClickHandler}
                src={props.menuClick ? close : hamburger} />
            <div>
                <Button action='Login' className={classes['login-btn']}></Button>
                <Button action='Sign Up' className={classes['signup-btn']}></Button>
            </div>
        </nav>
    )
};

export default Navbar;

