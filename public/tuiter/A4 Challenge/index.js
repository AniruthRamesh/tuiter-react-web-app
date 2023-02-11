import whoToFollow from "./WhoToFollow/index.js"
import TweetGenerator from "./Tweets/index.js"
import SearchBar from "./ExploreScreen/searchBar.js"
import Navigation from "./ExploreScreen/navigation.js"

function HomeComponent(){
    $("#wd-home").append(`
        <div class="row">
        <div
          class="col d-none d-sm-block col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2 fixing-position-explorebar"
        >
          <div class="list-unstyled">
            <i
              class="fa-brands fa-twitter list-group-item mt-2"
              style="color: rgb(29, 161, 242); font-size: 25px"
            ></i>
            
            <a href= "../Challenges/index.html"style="text-decoration:none; color:black"> <span class="list-group-item mt-4">
              <i class="fa-solid fa-house" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-normal">Home</span>
            </span></a>

            <a href= "#" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-hashtag" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-bold">Explore</span>
            </span></a>

            <a href= "#" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-bell" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline ms-3 h5 fw-normal"
                >Notifications</span
              >
            </span></a>

            <a href= "#" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-envelope" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-normal">Messages</span>
            </span></a>

            <a href= "../bookmarks/index.html" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-bookmark" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-normal">Bookmarks</span>
            </span></a>

            <a href= "#" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-fire" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-normal"
                >Top Articles</span
              >
            </span></a>

            <a href= "../profile.html" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-user" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-normal">Profile</span>
            </span></a>

            <a href= "#" class="fw-bold" style="text-decoration:none; color:black"><span class="list-group-item mt-4 ms-1">
              <i class="fa-solid fa-dice-three" style="font-size: 22px"></i>
              <span class="d-none d-xl-inline m-3 h5 fw-normal">More</span>
            </span></a>
          </div>
          <a href="../tuit.html"><button
            class="btn p-2 float-end mt-2 w-100 mt-4 me-3"
            style="background-color: rgb(29, 161, 242); border-radius:30px;"
            >Tuit</button
          ></a>
        </div>

        <div
          class="col col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-7 mt-2 mb-0 position-relative center-bar"
        >
          <div class="border-start border-end">
            ${SearchBar()}
            
            ${Navigation()}
            <div class="box"></div>
          </div>
          <div class="position-relative mt-0">
            <img
              src="../Images/australian.jpeg"
              class="img-fluid"
              alt="Your Image"
            />
            <div class="container position-relative mt-0">
              <h3
                class="fw-normal"
                style="
                  color: white;
                  position: absolute;
                  bottom: 4rem;
                  padding-right: 1.25rem;
                "
              >
                Tennis Tournament . Live
              </h3>
              <h1
                style="
                  color: white;
                  position: absolute;
                  bottom: 1.2rem;
                  padding-right: 1.25rem;
                "
              >
                Australian Open 2023
              </h1>
            </div>
          </div>

        <div class="border mt-1">
        ${TweetGenerator()}
            </div>
        </div>


        <div
          class="col d-none d-sm-none d-lg-block col-lg-4 col-xl-4 col-xxl-3 mt-2"
        >
            ${whoToFollow()}
            <div class="mt-3 ms-2 text-secondary" style="font-size: 13px">
            <span>Terms of Service&nbsp&nbsp</span>
            <span>Privacy Policy&nbsp&nbsp</span>
            <span>Cookie Policy</span>
            <br />
            <span>Accesibility&nbsp&nbsp</span><span>Ads info&nbsp&nbsp</span
            ><span>More...</span>
            <br />
            <span><i class="fa-regular fa-copyright"></i></span
            ><span>&nbsp2023 Twitter, Inc.</span>
          </div>
        </div>
        
        <!---->
</div>`)
}

$(HomeComponent)