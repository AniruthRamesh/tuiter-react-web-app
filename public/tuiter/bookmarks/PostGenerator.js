const PostGenerator = (post) =>{

    const {avatar,
    userName,
    handle,
    tweetImage,
    postImage,
    timings,
    comments,
    retweets,
    likes,postContent,contentBelowPost,contentWebsite,actualContent} = post
    
    return(`
    <div class="border-bottom mb-1">
    <span>
    <img src="${avatar}" style="width: 45px;
    height: 45px;
    border-radius: 24px;
    margin-top: 12px;
    margin-left: 16px;" />
    <span class="fw-bold ms-1">${userName} </span>
    <img
  src=" ../Images/instagram-verification-badge.png "
  alt=""
  style="
    width: 20px;
  "
/>
    <span class="text-secondary">${handle}</span>
    <span class="text-secondary"> . ${timings}</span>
    <span class="text-secondary float-end fs-3 me-3">...</span>
    <br>
    </span>
    <div style="margin-left: 68px;
    margin-top: -20px;
    width:80%">${postContent}</div>

    <div style="width:80%;
    margin-left:66px;">
    ${tweetImage? `<img src="${postImage}" class="img-fluid mt-1"
    style="border-top-right-radius:20px;
    border-top-left-radius:20px;
    ${contentBelowPost?``:`border-bottom-left-radius:  20px;border-bottom-right-radius:  20px;`}
    "
    > `:``}
    ${contentBelowPost? `<div class="border" style="border-bottom-left-radius:  20px;border-bottom-right-radius:  20px;">
        <div class="text-secondary ms-4 mt-2"> <span><i
        class="fa-solid fa-link fa-2xs"
        style="color: grey;"
    ></i></span>
        <span class="text-secondary fs-6">${contentWebsite}</span>
    </div>
    <div class="ms-4 mb-2">${actualContent}</div>
    </div>`:``}

        <div class="wd-adjusting-space d-flex justify-content-between mt-3 ms-4 me-4 mb-3">
        <span><a href="#"
        ><i class="fa-regular fa-message fa-sm" style="color: grey"></i
    ></a>
            <span class="text-secondary fs-6"><p class="d-inline">${comments}</p></span>
            </span>

            <span><a href="#"
            ><i class="fa-solid fa-retweet fa-sm" style="color: grey"></i
            ></a>
            <span class="text-secondary fs-6"><p class="d-inline">${retweets}</p></span>
            </span>

            <span><a href="#"
            ><i class="fa-solid fa-heart fa-sm" style="color: red"></i
            ></a>
            <span class="text-secondary fs-6"><p class="d-inline">${likes}</p></span>
            </span>

            <span><a href="#"
            ><i class="fa-solid fa-upload fa-sm" style="color: grey"></i
            ></a>
            </span>
        </div>
            </div>
        </div>

    `)
}

export default PostGenerator