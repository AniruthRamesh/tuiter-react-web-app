import who from "./who.js";
import whoListItem from "./whoListItem.js";

const whoToFollowListItem = () =>{
    return(`
    <div class="list-unstyled rounded-4 "
    style="background-color: rgb(245, 245, 245)">
        <div class="list-group-item fw-bold ms-3 fs-5 p-2">
        Who to follow
        </div>
        ${who.map(who=> whoListItem(who)).join('')}
        
        <div class="list-group-item ms-4 fs-6 p-2 text-primary">
        Show more
        </div>
    </div>`)
}

export default whoToFollowListItem;