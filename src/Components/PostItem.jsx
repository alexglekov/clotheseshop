import React from 'react';
import ItemBButton from "./UI/Buttons/ItemBButton";
import ItemDescription from "./ItemDescription";
import {Route, Switch, useHistory} from "react-router-dom";

const PostItem = (props) => {

    const router = useHistory()

    return (
                <div className="post">
                    <button className="bigBut" onClick={() => router.push(`/posts/${props.post.id}`)}>
                    <button className="post__cahrt">
                        <img src="Empty Cart.svg"/>
                    </button>
                    <div className="post__content">
                        <img src={props.post.pic}/>
                        <div className={"post__title"}>
                            {props.post.title}
                        </div>
                        <div className="post__price">
                            {props.post.price}
                        </div>
                    </div>
                    </button>
                </div>
    );
};

export default PostItem;