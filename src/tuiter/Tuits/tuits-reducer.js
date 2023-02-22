import { createSlice } from "@reduxjs/toolkit";
import tuit from "./tuit.json";

const currentUser = {
        "avatar":"./Images/tate.jpeg",
        "userName":"Andrew Tate",
        "handle":"@matrix_hater",
        "verified":true,
        "gold":true
}

const templateTuit = {
        ...currentUser,
        "isTweetImage":false,
        "tweetImage":"",
        "timings":"Feb 21",
        "comments": 0,
        "retweets": 0,
        "likes": 0,
        "isContentBelowPost":false
}

const tuitSlice = createSlice({
    name:'tuits',
    initialState: tuit,
    reducers:{
        likeReducer: (state,action)=>{
            const id = action.payload
            const index = state.findIndex(t=>t._id===id)
            state[index].likes +=1
        },

        unlikeReducer: (state,action)=>{
            const id = action.payload
            const index = state.findIndex(t=>t._id===id)
            state[index].likes -=1
        },

        createTuit:(state,action)=>{
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime()}
            )
        },

        deleteTuit:(state,action)=>{
            const id = action.payload
            const index = state.findIndex(t=>t._id===id)
            state.splice(index,1)

        }
    }
})

export const {likeReducer,unlikeReducer,createTuit,deleteTuit} = tuitSlice.actions

export default tuitSlice.reducer;