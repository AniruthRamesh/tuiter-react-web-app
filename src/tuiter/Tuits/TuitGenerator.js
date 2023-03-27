import TuitStats from "./TuitStats"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitGenerator = ({tuit})=>{
    const {_id,avatar,
        userName,
        handle,
        isTweetImage,
        tweetImage,
        timings,
        comments,
        retweets,
        likes,tuits,isContentBelowPost,contentWebsite,contentBelowPost,verified,gold,
    retweet,retweetBy,liked} = tuit

    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(deleteTuitThunk(_id))
    }

    return(
        <div>
                {retweet && <div className="text-secondary fw-bold ms-5 mt-1"><i class="bi bi-reply-fill"></i>
                {retweetBy} ReTweeted</div>}
                <span>
                <img src={`${avatar}`} style={{width: "45px",
                height: "45px",
                borderRadius: "24px",
                marginTop: "12px",
                marginLeft: "3px"}} alt="empty"/>
                <span className="fw-bold ms-3">{userName} </span>
                {verified && <img
                    src={`./Images/${gold? `gold.png`:`instagram-verification-badge.png`}`}
                    alt=""
                    style={{
                        width: "20px"
                    }}/> }
                <span className="text-secondary">{handle}</span>
                <span className="text-secondary"> . {timings}</span>
                <span className="text-secondary float-end fs-3 me-3"><Link to="" ><i className="bi bi-x" onClick={handleDelete} ></i></Link></span>
                <br></br>
                </span>
        <div style={{
            marginLeft: "68px",
            marginTop: "-18px",
            width:"80%"}}>{tuits}</div>

        <div style={{
            width:"80%",
            marginLeft:"66px"}}>
        {isTweetImage && 
        <img src={tweetImage} className="img-fluid mt-1"
        style={{
            borderTopRightRadius:"20px",
            borderTopLeftRadius:"20px",
            borderBottomLeftRadius: contentBelowPost ? "0" : "20px",
            borderBottomRightRadius: contentBelowPost ? "0" : "20px"}} alt="empty"></img>
        }
        {isContentBelowPost && 
        <div className="border" style={{
            borderBottomLeftRadius:  "20px",
            borderBottomRightRadius:  "20px"}}>
            <div className="text-secondary ms-4 mt-2"> 
                <span><i class="bi bi-box-arrow-up-right"
                style={{color: "grey"}}></i></span>
            <span className="text-secondary fs-6">{contentWebsite}</span>
        </div>
        <div className="ms-4 mb-2">{contentBelowPost}</div>
        </div>}

        <div><TuitStats tuit={tuit} likes={likes} comments={comments} retweets={retweets} id={_id} liked={liked} /></div>

            
                </div>
        </div>
    )
}

export default TuitGenerator