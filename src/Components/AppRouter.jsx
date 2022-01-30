import React from 'react';
import {Route, Switch, useParams} from "react-router-dom";
import ItemDescription from "./ItemDescription";
import PostList from "./PostList";

const AppRouter = (props) => {

    return (
        <Switch>
            <Route exact path="/">
                <PostList title={props.title} posts={props.posts}></PostList>
            </Route>

            <Route exact path="/posts/:id" children={<ItemDescription/>}>
                    <ItemDescription posts={props.posts}/>
            </Route>
        </Switch>
    );
};

export default AppRouter;