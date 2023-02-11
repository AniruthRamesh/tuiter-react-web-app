import PostSummary from "../PostSummaryItem/index.js"
const ExploreComponent = () =>{
    return(`
            <span class="position-relative">
            <i
            class="fas fa-magnifying-glass fa-1x ms-3"
            style="
                color: black;
                position: absolute;
                margin-top: 0.6rem;
                font-size: 18px;
            "
            id="wd-searchImage"
            ></i>
            <input
            type="text"
            class="form-control rounded-5 m-0 d-inline"
            placeholder="Search Tuiter"
            style="width: 90%"
            />
            <a href="../explore-settings.html"
            ><i class="fas fa-cog fa-2xl" id="wd-settingsImage"></i
            ></a>
        </span>

        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
            <a class="nav-link active" href="navigation/for-you.html"
                >For you</a
            >
            </li>
            <li class="nav-item">
            <a class="nav-link" href="navigation/trending.html">Trending</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="navigation/news.html">News</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="navigation/sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="navigation/entertainment.html"
                >Entertainment</a
            >
            </li>
        </ul>

        <div class="position-relative mt-2">
            <img
            src="Starship-Mk1-Day.jpg"
            class="img-fluid"
            alt="Your Image"
            />
            <div class="container position-relative">
            <h1
                style="
                color: white;
                position: absolute;
                bottom: 1.2rem;
                padding-right: 1.25rem;
                "
            >
                SpaceX's Starship
            </h1>
            </div>
        </div>
        ${PostSummary()}
    
  `)
}

export default ExploreComponent;