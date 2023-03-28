const whoToFollowListItem = (who) =>{
    const {avatarIcon,userName,handle} = who;
    return(`<div class="list-group-item position-relative">
    <span class="position-relative">
      <img src="${avatarIcon}" style="width: 45px; height: 45px" />
    </span>
    <div class="d-inline">
      <p
        class="d-inline fw-bold"
        style="
          position: absolute;
          margin-top: -5px;
          margin-left: 12px;
        "
      >
        ${userName}
        <span
        class="fa-stack"
        style="width:20px"
      >
        <i
          class="fa-solid fa-circle fa-stack-1x"
          style="color: black; font-size: 14px"
        ></i>
        <i
          class="fa-solid fa-check fa-stack-1x fa-inverse"
          style="font-size: 9px"
        ></i>
      </span>
      </p>
      <p
        class="d-inline"
        style="
          position: absolute;
          margin-top: 19px;
          margin-left: 10px;
        "
      >
        ${handle}
      </p>

       <button type="button"
        class="btn btn-primary p-2 float-end mt-2" style="border-radius:20px;"
        >Follow</button
      >
    </div>
  </div>`);
}

export default whoToFollowListItem;