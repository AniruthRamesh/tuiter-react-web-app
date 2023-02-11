const PostSummaryItem = (post) =>{
    const {topic,userName,time,image,title,tweets,verified} = post;

    return(`
        <li class="list-group-item position-relative">
        <div class="d-inline position-relative float-end" id="wd-checkForJS"><img src="${image}" style="width:100px; border-radius: 1.2rem;"></div>
            ${topic? `<span class="text-secondary">${topic}</span>
            <br />`:``}
            ${userName?`<span class="fw-bold">${userName} 
            <span
            class="fa-stack" style="width:3%" >
            <i
              class="fa-solid fa-circle fa-stack-1x"
              style="color: black; font-size: 14px"
            ></i><i
            class="fa-solid fa-check fa-stack-1x fa-inverse"
            style="font-size: 9px"
          ></i></span>
             <span class="text-secondary fw-normal">- ${time}</span>
          <br />`:``}
          ${title?`<div class=" d-inline fw-bold">
          ${title}
        </div> <br>`:``}
        ${tweets?`<span class="text-secondary fw-normal">${tweets}</span>`:``}   
        </li>
    `)
};

export default PostSummaryItem;