
import EditProfile from "./EditProfile";
import ProfilePage from "./ProfilePage";

import { useState } from "react";

const Profile = ()=>{
    
    const [editProfile,setEditProfile] = useState(false)

    const handleEditProfile = ()=>{
        const toggle = !editProfile
        setEditProfile(toggle)
    }

    return(
        <>
           <div>
                {!editProfile&& <ProfilePage handleEditProfile={handleEditProfile}/>}
                
                {editProfile && <EditProfile handleEditProfile={handleEditProfile}/>}
            </div>
        </>
    )
}

export default Profile