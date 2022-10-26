import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../styles/app.css'

const  PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={350} classNames='post'>
                        <PostItem remove = {remove} number = {index+1} post = {post}></PostItem>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;