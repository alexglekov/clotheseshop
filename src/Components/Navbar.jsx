import React from 'react';
import NavButton from "./UI/Buttons/NavButton";
import cl from "./Navbar.module.css"
import NavSelect from "./UI/Selects/NavSelect";
import ItemBButton from "./UI/Buttons/ItemBButton";



const Navbar = () => {

    return (
        <div className={cl.navBar}>
            <ul className={cl.navUl}>
                <li className={cl.navLI}><NavButton>WOMEN</NavButton></li>
                <li className={cl.navLI}><NavButton>MEN</NavButton></li>
                <li className={cl.navLI}><NavButton>KIDS</NavButton></li>
            </ul>
                <img className={cl.logo} src="a-logo.svg" alt="logo"/>
            <div className={cl.divRght}>
            <ul className={cl.navUl2}>
                <li className={cl.navLI}><NavSelect>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>BYN</option>
                </NavSelect></li>
                <li className={cl.navLI}>
                    <NavButton>
                        <img src="cart.png"></img>
                    </NavButton>
                    </li>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;