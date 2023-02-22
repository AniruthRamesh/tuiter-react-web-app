import { useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import {nameChange,bioChange,locationChange,websiteChange,lastNameChange,birthDateChange} from "./profile-reducer"
import { useDispatch } from "react-redux"
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditProfile = ({handleEditProfile})=>{
    const dispatch =  useDispatch()

    const profileData = useSelector((state)=>state.profile)
    const {firstName,lastName,bio,location,website,profilePicture,bannerPicture,dateOfBirth} = profileData[0]
    

    const [nameState,setName] = useState(firstName)
    const [bioState,setBio] = useState(bio)
    const [locationState,setLocation] = useState(location)
    const [websiteState,setWebsite] = useState(website)
    const [lastNameState,setLastName] = useState(lastName)
    const [selectedDate,setSelectedDate] = useState(new Date(dateOfBirth))
    const [isDatePickerOpen,setDatePicker] = useState(false)
    const [dateChange,setDateChange] = useState(dateOfBirth)

    let date = new Date(selectedDate).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    

    const handleDispatch = ()=>{
        const newName = {
            "name":nameState
        }

        const newBio = {
            "bio":bioState
        }

        const newLocation = {
            "location":locationState
        }

        const newWebsite = {
            "website":websiteState
        }



        dispatch(nameChange(newName))
        dispatch(bioChange(newBio))
        dispatch(locationChange(newLocation))
        dispatch(websiteChange(newWebsite))
        dispatch(lastNameChange(lastNameState))
        dispatch(birthDateChange(dateChange))
        handleEditProfile()

    }

    const handleDateChange = ()=>{
        const toggle = !isDatePickerOpen
        setDatePicker(toggle)
    }

    const handleSaveDate = ()=>{
        setDatePicker(false)
        date =  new Date(selectedDate).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          });
        
        setDateChange(new Date(selectedDate).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric"
          }))
    }
    

    return(
        <div className="border mb-4">
            <div className="row pb-3 ms-2 me-1 mt-2">
                <div className="col-2">
                    <button className="btn btn-light rounded-circle " onClick={handleEditProfile}><i className="bi bi-x-lg"></i></button>
                </div>

                <div className="col-8 fw-bold fs-4">
                    Edit Profile
                </div>

                <div className="col-2">
                    <button className="btn btn-dark rounded-pill" onClick={handleDispatch}>Save</button>
                </div>
            </div>
            <div className="position-relative">
                    <img src = {`./Images/${bannerPicture}`} alt="empty" className="img-fluid w-100 h-auto" style={{maxHeight:"300px"}}/>
                    <div >
                    <img src={`./Images/${profilePicture}`} alt = "empty" className="img-fluid ms-4" 
                    style={{width:"150px",height:"150px", borderRadius:"50%", position:"absolute",top:"220px"}}  />  
                </div>
                </div>
            <div className="mb-5 p-4"></div>
            <div className="container position-relative mb-4">
                <label htmlFor="wd-name" className="fw-bold text-secondary ms-3 mt-1 position-absolute" >FirstName
                </label>
                <textarea  id="wd-name" className="form-control pt-4" style={{textIndent:"5px"}} onChange={event=> setName(event.target.value)}></textarea>
            </div>

            <div className="container position-relative mb-4">
                <label htmlFor="wd-name" className="fw-bold text-secondary ms-3 mt-1 position-absolute" >LastName
                </label>
                <textarea  id="wd-name" className="form-control pt-4" style={{textIndent:"5px"}} onChange={event=> setLastName(event.target.value)}></textarea>
            </div>

            <div className="container position-relative mb-4">
                <label htmlFor="wd-name" className="fw-bold text-secondary ms-3 mt-1 position-absolute" >Bio
                </label>
                <textarea  id="wd-name" className="form-control pt-4" style={{textIndent:"5px"}} onChange={event=> setBio(event.target.value)}></textarea>
            </div>

            <div className="container position-relative mb-4">
                <label htmlFor="wd-name" className="fw-bold text-secondary ms-3 mt-1 position-absolute" >Location
                </label>
                <textarea  id="wd-name" className="form-control pt-4" style={{textIndent:"5px"}}  onChange={event=> setLocation(event.target.value)}></textarea>
            </div>

            <div className="container position-relative mb-4">
                <label htmlFor="wd-name" className="fw-bold text-secondary ms-3 mt-1 position-absolute" >Website
                </label>
                <textarea  id="wd-name" className="form-control pt-4" style={{textIndent:"5px"}} onChange={event=> setWebsite(event.target.value)}></textarea>
            </div>

            <div>
            <span>{isDatePickerOpen && 
                <div>
                    <ReactDatePicker inline selected={selectedDate} onChange={date => setSelectedDate(date)}/>
                    <button className="btn btn-dark rounded-pill ms-5 " onClick={handleSaveDate}>Done</button>
                </div>
                }</span>
            
            </div>

            <div className="container mb-3">
                <span className="text-secondary fs-5">Birth date • <Link to ="" onClick={handleDateChange} >Edit</Link></span>
                <br></br>
                {!isDatePickerOpen && <span className="text-secondary fs-5">{date}</span>}
            </div>
                    


        </div>
    )
}

export default EditProfile