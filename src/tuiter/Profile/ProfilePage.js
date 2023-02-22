import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({handleEditProfile})=>{
    const profileData = useSelector((state)=>state.profile)
    const {firstName, 
    lastName, 
    handle,
    profilePicture, 
    bannerPicture,
    bio,
    location,	
    dateOfBirth,	
    dateJoined,
    followingCount,	
    followersCount,tuits} = profileData[0]

    const history = useNavigate()

    const handleGoBack = ()=>{
        history(-1)
    }

    


    return(
        <>
            <div className="border-top border-end border-start mb-3">
                <div className="container">
                    <Link to="" className="text-decoration-none text-secondary "><i class="bi bi-arrow-left" onClick={handleGoBack}></i></Link>
                    <span className="fw-bold me-2 ms-4">{firstName}</span><span className="fw-bold">{lastName}</span>
                    <br></br>
                    <span className="text-secondary ms-4 ps-3">{tuits} Tuits</span>
                </div>
                <div className="position-relative">
                    <img src = {`./Images/${bannerPicture}`} alt="empty" className="img-fluid w-100 h-auto" style={{maxHeight:"300px"}}/>
                
                <div >
                    <img src={`./Images/${profilePicture}`} alt = "empty" className="img-fluid ms-4" 
                    style={{width:"150px",height:"150px", borderRadius:"50%", position:"absolute",top:"220px"}}  />  
                </div>
                </div>
                <div className="p-3"></div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-pill border rounded-pill fw-bold btn-light me-3" onClick={handleEditProfile}>Edit Profile</button>
                </div>
                <div className="container">
                    <span className=" fw-bold fs-3">
                        <span className="me-1">{firstName}</span><span>{lastName}</span>
                    </span>
                </div>
                <div className="container text-secondary" style={{marginTop:"-8px"}}>
                    @{handle}
                </div>

                <p className="container pt-3">{bio}</p>
                <div className="container text-secondary">
                    <span className="me-4"><i class="bi bi-geo-alt me-1"></i>{location}</span>
                    <span className="me-4"><i class="bi bi-balloon me-1"></i>{dateOfBirth}</span>
                    <span className="me-4"><i class="bi bi-calendar3 me-1"></i>Joined {dateJoined}</span>
                </div>
                <div className="container pt-2">
                    <span className="fw-bold">{followingCount}</span> <span>following</span>
                    <span className="fw-bold ms-4">{followersCount}</span> <span>followers</span>
                </div>
            </div>
        </>
    )
}

export default ProfilePage