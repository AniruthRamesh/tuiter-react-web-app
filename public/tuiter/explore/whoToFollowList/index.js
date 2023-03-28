import who from "./who.js";
import whoToFollowListItem from "./whoToFollowListItem.js";


const whoToFollow = () =>{
    return(` 
    <div class="list-group">
        <div class="list-group-item fw-bold">Who to follow</div>
        ${who.map( followee => whoToFollowListItem(followee)).join('')}
    </div>
    `)

}

export default whoToFollow;