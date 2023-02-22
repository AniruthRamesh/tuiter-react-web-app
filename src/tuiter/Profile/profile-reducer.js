import profileData  from "./profile-data.json"
import { createSlice } from "@reduxjs/toolkit"


const profileSlice = createSlice({
    name:"profile",
    initialState:profileData,
    reducers:{
        nameChange:(state,action)=>{
            state[0].firstName = action.payload.name
        },
        lastNameChange: (state,action)=>{
            state[0].lastName = action.payload
        },

        bioChange:(state,action)=>{
            state[0].bio = action.payload.bio
        },
        locationChange:(state,action)=>{
            state[0].location = action.payload.location
        },
        websiteChange:(state,action)=>{
            state[0].website = action.payload.website
        },
        birthDateChange:(state,action)=>{
            state[0].dateOfBirth = action.payload
        }
    }
})

export const {nameChange,bioChange,locationChange,websiteChange,lastNameChange,birthDateChange} = profileSlice.actions;
export default profileSlice.reducer