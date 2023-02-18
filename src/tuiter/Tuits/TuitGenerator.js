import { Link } from "react-router-dom"

const TuitGenerator = ({tuit})=>{
    const {avatar,
        userName,
        handle,
        tweetImage,
        postImage,
        timings,
        comments,
        retweets,
        likes,postContent,contentBelowPost,contentWebsite,actualContent,verified,gold,
    retweet,retweetBy} = tuit
    return(
        <div>
            <div className="border-bottom mb-1">
                {retweet && <div className="text-secondary fw-bold ms-5 mt-1"><i class="bi bi-reply-fill"></i>
                {retweetBy} ReTweeted</div>}
                <span>
                <img src={`${avatar}`} style={{width: "45px",
                height: "45px",
                borderRadius: "24px",
                marginTop: "12px",
                marginLeft: "16px"}} alt="empty"/>
                <span className="fw-bold ms-1">{userName} </span>
                {verified && <img
                    src={`./Images/${gold? `gold.png`:`instagram-verification-badge.png`}`}
                    alt=""
                    style={{
                        width: "20px"
                    }}/> }
                <span className="text-secondary">{handle}</span>
                <span className="text-secondary"> . {timings}</span>
                <span className="text-secondary float-end fs-3 me-3">...</span>
                <br></br>
                </span>
        <div style={{
            marginLeft: "68px",
            marginTop: "-20px",
            width:"80%"}}>{postContent}</div>

        <div style={{
            width:"80%",
            marginLeft:"66px"}}>
        {tweetImage && 
        <img src={postImage} className="img-fluid mt-1"
        style={{
            borderTopRightRadius:"20px",
            borderTopLeftRadius:"20px",
            borderBottomLeftRadius: contentBelowPost ? "0" : "20px",
            borderBottomRightRadius: contentBelowPost ? "0" : "20px"}} alt="empty"></img>
        }
        {contentBelowPost && 
        <div className="border" style={{
            borderBottomLeftRadius:  "20px",
            borderBottomRightRadius:  "20px"}}>
            <div className="text-secondary ms-4 mt-2"> 
                <span><i class="bi bi-box-arrow-up-right"
                style={{color: "grey"}}></i></span>
            <span className="text-secondary fs-6">{contentWebsite}</span>
        </div>
        <div className="ms-4 mb-2">{actualContent}</div>
        </div>}

            <div className="wd-adjusting-space d-flex justify-content-between mt-3 ms-4 me-4 mb-3">
            <span><Link to=""
            ><i class="bi bi-chat" style={{color: "grey"}}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{comments}</p></span>
                </span>

                <span><Link to=""
                ><i class="bi bi-reply" style={{color: "grey"}}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{retweets}</p></span>
                </span>

                <span><Link to=""
                ><i class="bi bi-heart-fill" style={{color: "red"}}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{likes}</p></span>
                </span>

                <span><Link to=""
                ><i class="bi bi-upload" style={{color: "grey"}}></i></Link>
                </span>
            </div>
                </div>
            </div>
        </div>
    )
}

export default TuitGenerator