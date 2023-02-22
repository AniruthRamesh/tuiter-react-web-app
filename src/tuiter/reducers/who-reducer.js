import { createSlice } from "@reduxjs/toolkit";
import who from "../data/who.json"

const whoSlice = createSlice(
    {
        name:"who",
        initialState:who
    }
)

export default whoSlice.reducer