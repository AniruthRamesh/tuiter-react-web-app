import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateTuitThunk } from "../../services/tuits-thunks"


const TuitStats = ({tuit,id,likes,comments,retweets,liked})=>{
    const dispatch = useDispatch()


    const [like,setLike] = useState(liked)
    const [dislike,setDisLike] = useState(tuit.disliked)

    const handleLikeClick = ()=>{
        const toggle = !like
        setLike(toggle)

        if(!like){
            console.log("calling update")
            dispatch(updateTuitThunk({
                ...tuit,
                likes: likes + 1
              }))
         
        }

        if(like){
            dispatch(updateTuitThunk({
                ...tuit,
                likes: likes - 1
              }))
        }
    }


    const handleDisLikeClick = ()=>{
        const toggle = !dislike
        setDisLike(toggle)

        if(!dislike){
            console.log("calling update")
            dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
                
              }))
         
        }

        if(dislike){
            dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes - 1
              }))
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
                ><i className={!dislike? "bi bi-hand-thumbs-down" : "bi bi-hand-thumbs-down-fill"} style={{color: dislike? "red":"gray"}} 
                onClick={handleDisLikeClick}></i></Link>
                <span className="text-secondary fs-6"><p className="d-inline ms-2">{tuit.dislikes}</p></span>
                </span></div>

            <div className="col"><span><Link to=""
                ><i className="bi bi-upload" style={{color: "grey"}}></i></Link>
                </span></div>

        </div>
    )

}

export default TuitStats