import post from "./post.json"
import { createSlice } from "@reduxjs/toolkit"

const postSummarySlice =  createSlice({
    name:"postSummary",
    initialState:post
})

export default postSummarySlice.reducer