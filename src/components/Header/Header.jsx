 import React, { useState } from "react";

 import Modal from "../UI/Modal/Modal";

import  './Header.module.css'

import HeaderContent from "./HeaderContent";

import Navbar from "./Navbar";

const Header = () => {

    const [menuClick, setMenuClick] = useState(false);

    return <header>
         {menuClick && <Modal onSetMenuClick={setMenuClick} />}
        <Navbar menuClick={menuClick} onSetMenuClick={setMenuClick} />
        <HeaderContent />
    </header>
}

export default Header