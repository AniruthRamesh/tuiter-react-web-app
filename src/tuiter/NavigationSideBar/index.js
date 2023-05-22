import React from "react";
import NavigationGenerator from "./NavigationGenerator";
import navigate from "./Navigate.json"
import { Link } from "react-router-dom";

const NavigationSideBar = ({
    active="Explore"
})=>{

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  

    return(
      <div>
        <div className="list-group">
            <Link to = "/tuiter/explore" ><i className="bi bi-twitter list-group-item"></i></Link>
            {navigate.map( navigate=>{
              const { page} = navigate;
              const isLoginOrRegister = page === "Login" || page === "Register";
              const isProfile = page === "Profile";
    
              if ((accessToken && refreshToken && isLoginOrRegister) || (!accessToken && !refreshToken && isProfile)) {
                return null; // Skip rendering the navigation item
              }
              return(
                
                <NavigationGenerator key={navigate._id} active={active} content={navigate}/>
              )
            } )}
          </div>

          <button
            className="btn btn-primary p-3 float-end mt-2 w-100" style={{borderRadius:"30px"}}
            >Tuit</button>
      </div>
    )
}

export default NavigationSideBar;