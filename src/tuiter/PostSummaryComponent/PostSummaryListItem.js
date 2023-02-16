import React from "react";

const PostSummaryItem = (
    {
        postItem = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "image": "react.png",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tweets":"",
            "verified":true
        }
    }
)=>{
    const {topic,userName,time,image,title,tweets,verified,gold} = postItem
    return(
        <li className="list-group-item position-relative">
        <div className="d-inline position-relative float-end" id="wd-checkForJS">
            <img src={`./Images/${postItem.image}`} style={{width:"100px", borderRadius: "1.2rem"}}/></div>
            {topic && <span className="text-secondary">{topic}<br></br></span>}
            
            {userName && <span className="fw-bold">{userName} {verified && <img src={`./Images/${gold?`gold.png`:`instagram-verification-badge.png`}`}
        style={{
            width:"20px",
            marginLeft:"1px",
            marginRight:"2px"
        }}></img>}
            - {time}<br></br></span>}
          {title && <div className=" d-inline fw-bold">
          {title}<br></br>
        </div> }
        {tweets && <span className="text-secondary fw-normal">{tweets}</span>}   
        </li>
    )
}

export default PostSummaryItem;