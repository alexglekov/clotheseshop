import React from 'react';
import cl from "./NavButton.module.css"

const NavButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.navBtn}>
            {children}
        </button>
    );
};

export default NavButton;