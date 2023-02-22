import WhoToFollowListItem from "./whoToFollowListItem"
import { useSelector } from "react-redux"


const WhoToFollow = ()=>{

    const who = useSelector((state)=>state.who)
    return(
        <div className="list-group">
            <div className="list-group-item fw-bold">Who to follow</div>
            {who.map( followee => {
                        return(<WhoToFollowListItem key={followee._id} follower={followee}/>)
                        }
                    )}
            
        
        </div>
    )
}

export default WhoToFollow;