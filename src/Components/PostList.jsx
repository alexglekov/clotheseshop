import React from 'react';
import cl from "./styles/Posts.css"
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {

    return (
        <div className="posts">
            <h1 style={{textAlign:'left', marginTop:'60px',
            fontFamily: '\n' +
                'Raleway', fontWeight: '400', fontSize:'42px', paddingLeft:'30px'}}>
                {title}
            </h1>
            {posts.map((post) =>
                <PostItem post = {post}/>
            )}
        </div>
    );
};

export default PostList;