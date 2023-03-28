const plainSearchBox = () =>{
    return(`<div class="position-relative mb-2">
    <i
      class="fas fa-magnifying-glass fa-1x"
      style="
        color: lightgray;
        position: absolute;
        margin-top: 0.6rem;
        font-size: 18px;
        margin-left: 1.5rem;

      "
      id="wd-searchImage"
    ></i>
    <input
      type="text"
      class="form-control rounded-5 d-inline"
      placeholder="Search Tuiter"
      style=" background-color: rgb(245, 245, 245);text-indent:45px;"
      
    />
    </div>`)
}

export default plainSearchBox;