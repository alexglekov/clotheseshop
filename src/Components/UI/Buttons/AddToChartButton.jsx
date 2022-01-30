import React from 'react';
import cl from "./AddToChartButton.module.css";

const AddToChartButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.Btn}>
            {children}
        </button>
    );
};

export default AddToChartButton;