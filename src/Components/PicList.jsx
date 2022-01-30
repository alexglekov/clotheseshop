import React from 'react';
import PicItem from "./PicItem";
import PostItem from "./PostItem";

const PicList = (props) => {

    let a
    {props.posts.map((post) =>
        a = post
    )}

    return (
        <div>
                <PicItem descr1={a.descr1} descr2={a.descr2} descr3={a.descr3}/>
        </div>
    );
};

export default PicList;