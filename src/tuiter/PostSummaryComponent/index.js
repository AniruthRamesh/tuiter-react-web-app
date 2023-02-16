import React from "react";
import PostSummaryItem from "./PostSummaryListItem";
import post from "./post.json"

const PostSummaryList = () =>{
    return(
        <ul className="list-group mb-3">
            {post.map( postContent =>{
                return(
                    <PostSummaryItem key={postContent._id} postItem={postContent}/>
                )
            } )}    
        </ul>
    )
}

export default PostSummaryList