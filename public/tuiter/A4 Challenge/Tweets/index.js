import TweetGenerator from "./TweetGenerator.js"
import Tweet from "./Tweet.js"

const MainTweets = () =>{
    return(`
        ${Tweet.map(tweet=>TweetGenerator(tweet)).join('')}
    `)
}

export default MainTweets