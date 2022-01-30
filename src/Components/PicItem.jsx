import React from 'react';

const PicItem = (props) => {
    return (
        <div>
            <ul>
                <li><button ><img src={props.descr1}/></button></li>
                <li><button ><img src={props.descr2}/></button></li>
                <li><button ><img src={props.descr3}/></button></li>
            </ul>
        </div>
    );
};

export default PicItem;