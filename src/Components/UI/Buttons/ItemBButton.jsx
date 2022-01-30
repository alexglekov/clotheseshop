import React from 'react';
import cl from './ItemBButton.module.css'

const ItemBButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.itBtn}>
            {children}
        </button>
    );
};

export default ItemBButton;