import post from "./post.js";
import PostGenerator from "./PostGenerator.js";

const AllPost = ()=>{
    return(`
        ${post.map(post=>PostGenerator(post)).join('')}
    `)
}

export default AllPost