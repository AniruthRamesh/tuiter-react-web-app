import React from "react";
import PostSummaryItem from "./PostSummaryListItem";
import { useSelector } from "react-redux";


const PostSummaryList = () =>{
    const post = useSelector((state)=>state.post)
    return(
        <div className="list-group mb-3">
            {post.map( postContent =>{
                return(
                    <PostSummaryItem key={postContent._id} postItem={postContent}/>
                )
            } )}    
        </div>
    )
}

export default PostSummaryList