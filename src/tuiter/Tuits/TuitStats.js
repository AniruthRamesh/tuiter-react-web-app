import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { likeReducer,unlikeReducer } from "./tuits-reducer"


const TuitStats = ({id,likes,comments,retweets})=>{
    const dispatch = useDispatch()


    const [like,setLike] = useState(false)

    const handleLikeClick = ()=>{
        const toggle = !like
        setLike(toggle)

        if(!like){
            dispatch(likeReducer(id))
        }

        if(like){
            dispatch(unlikeReducer(id))
        }
    }


    return(
        <div className="row mt-2 mb-2">
            <div className="col">
                <span><Link to=""><i className="bi bi-chat" style={{color: "grey"}}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{comments}</p></span>
                </span>
            </div>
            <div className="col"><span><Link to=""
                ><i className="bi bi-reply" style={{color: "grey"}}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{retweets}</p></span>
                </span></div>
            <div className="col"><span><Link to=""
                ><i className={like? "bi bi-heart-fill" : "bi bi-heart"} style={{color: like? "red":"gray"}} 
                onClick={handleLikeClick}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{likes}</p></span>
                </span></div>
            <div className="col"><span><Link to=""
                ><i className="bi bi-upload" style={{color: "grey"}}></i></Link>
                </span></div>

        </div>
    )

}

export default TuitStats