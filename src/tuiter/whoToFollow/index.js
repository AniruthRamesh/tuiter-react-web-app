import who from "./who.json"
import WhoToFollowListItem from "./whoToFollowListItem"

const WhoToFollow = ()=>{
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