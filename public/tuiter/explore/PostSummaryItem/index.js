import post from "./Post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummary = () => {
    return(`<ul class="list-group mb-3">
            ${post.map(posts => PostSummaryItem(posts)).join('')}
            </ul>
    `)
}

export default PostSummary;