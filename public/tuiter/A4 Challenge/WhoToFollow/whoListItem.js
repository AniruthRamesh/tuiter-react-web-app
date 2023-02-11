const whoListItem = (who) =>{
    const {avatarIcon,userName,handle,golden,promoted} = who
    return (`<div class="list-group-item position-relative p-2 ms-3 mt-0">
    <span class="position-relative">
      <img
        src="${avatarIcon}"
        style="width: 45px; height: 45px; border-radius: 25px"
      />
    </span>
    <div class="d-inline">
      <p
        class="d-inline fw-bold"
        style="
          position: absolute;
          margin-top: 0px;
          margin-left: 6px;
          font-size: 14px;
        "
      >
        ${userName}
      </p>
      <p
        class="d-inline"
        style="
          position: absolute;
          margin-top: 19px;
          margin-left: 5px;
          font-size: 14px;
        "
      >
        ${handle}
      </p>
      <span
        ><img
          src=" ${golden? `../Images/gold.png`:`../Images/instagram-verification-badge.png`} "
          alt=""
          style="
            width: 20px;
            margin-left: 7.2rem;
            margin-top: -1.45rem;
          "
      /></span>

      <button class="btn btn-dark p-2 ms-3" style="border-radius:20px;">Follow</button>
    </div>
        ${promoted?`<div class="ms-2 mb-1">
        <span
        ><i
            class="fa-solid fa-arrow-up-right-from-square ms-5"
            style="margin-left: 1.9rem"
        ></i
        ></span>
        <span style="font-size: 13px">Promoted</span>
        </div>`:``}
  </div>`)
}

export default whoListItem