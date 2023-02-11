const Settings = ()=>{
  return(`
  <span id="wd-setting"><a href="../explore-settings.html"
  ><i
    class="fas fa-cog fa-l ms-xxl-4 me-3 mt-2 float-end"
    id="wd-settingsImage"
    style="color: black"
  ></i
></a>
</span>
`);
}

const SearchBar = ()=>{
    return(`<span class="position-relative">
    <i
      class="fas fa-magnifying-glass fa-1x"
      style="
        color: lightgray;
        position: absolute;
        margin-top: 0.6rem;
        font-size: 18px;
        margin-left: 2.5rem;
      "
      id="wd-searchImage"
    ></i>
    <input
      type="text"
      class="form-control rounded-5 ms-4 d-inline"
      placeholder="Search Tuiter"
      style="width: 80%; background-color: rgb(245, 245, 245)"
    />
    ${Settings()}
  </span>`)
}

export default SearchBar