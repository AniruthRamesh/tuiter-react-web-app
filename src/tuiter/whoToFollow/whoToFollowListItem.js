import React from "react";

const WhoToFollowListItem = ({
    follower = {
        "_id":1,
        "userName":"Java",
        "handle":"Java",
        "avatarIcon":"java.png",
        "gold":true
    }
})=>{
    return(
        <div className="list-group-item position-relative">
    <span className="position-relative">
      <img src={`./Images/${follower.avatarIcon}`} style={{width: "45px", height: "45px", borderRadius:"20px"}} alt="empty" />
    </span>
    <div className="d-inline">
      <p
        className="d-inline fw-bold"
        style={{
          position: "absolute",  
          marginTop: "-5px",
          marginLeft: "12px" }}
      >
        {follower.userName} 

        <span>
        <img src={`./Images/${follower.gold?`gold.png`:`instagram-verification-badge.png`}`}
        style={{
            width:"20px",
            marginLeft:"1px"
        }} alt="empty"></img>
      </span>
      </p>
      <p
        className="d-inline"
        style={{
            position:"absolute",
          marginTop: "19px",
          marginLeft: "10px"
        }}>

        @{follower.handle}
      </p>

       <button type="button"
        className="btn btn-primary p-2 float-end mt-2" style={{borderRadius:"20px"}}>Follow</button>
    </div>
  </div>
    )
}

export default WhoToFollowListItem;