const TweetGenerator = (Tweet) =>{
    const {topic,
        trending,
        title,
        tweets,
        trendingwith,
        dots,
        topicBold,
        titleBold,
        promoter,
        promoted,firsttweet,lasttweet} = Tweet
    return(`
        <div class="ms-3 ${firsttweet? `mt-3`: `mt-4`} ${lasttweet?`mb-4`:''}">
        <span class=" ${topicBold?`fw-bold`:`text-secondary`} "
            >${topic} ${trending?`&nbsp <span>&#183;</span>&nbsp Trending`:``}
        </span>
        ${dots?`<span class="float-end me-3 fs-3" style="margin-top: -1.3rem"
        >...</span
    >`:``}
        <br />
        <span class=" ${titleBold?`fw-bold`:`text-secondary`} ">${title}</span>
        <br />
        ${promoted?`<span class="text-secondary"
        ><span
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></span>
        <span style="font-size: 13px">Promoted by ${promoter}</span></span
      >`:`<span class="text-secondary">${trendingwith?`Trending with <span class="text-primary">
      ${trendingwith}</span>`:`${tweets} Tweets`}</span>`}
        </div>
    `)
}
export default TweetGenerator