import React from 'react';

const NavSelect = ({children, ...props}) => {
    return (
        <select {...props}>
            {children}
        </select>
    );
};

export default NavSelect;