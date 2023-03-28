import NavigationSidebar from "../NavigationSidebar/index.js";
import plainSearchBox from "../Challenges/plainSearchBox.js";
import PostSummary from "../A4 Challenge/Tweets/index.js";
import whoToFollow from "../A4 Challenge/WhoToFollow/index.js";
import AllPost from "./AllPost.js";

function BookMarks(){
    $('#wd-bookmarks').append(
        `<div class="row mt-2">
        <div
        class="col d-none d-sm-block col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2"
      >
                <!--Navigation Sidebar-->
                ${NavigationSidebar('BookMarks')}

        </div>

            <div class="col col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-7 position-relative center-bar">
                <div class=" border-bottom border-start border-end p-2">
                    <span class="fw-bold mt-3 fs-4">Bookmarks </span>
                    <br>
                    <span class="text-secondary mt-3">@neoEscapedMatrix </span>
                    <br>
                </div>
                <div class="position-relative border border-top-0">
                ${AllPost()}
                </div>
                

            </div>


        <div
          class="col d-none d-sm-none d-lg-block col-lg-4 col-xl-4 col-xxl-3 mb-3"
        >
        ${plainSearchBox()}

        <div class=" mb-2 p-1" style="background-color: rgb(245, 245, 245); border-radius:15px;">
        <div class="fw-bold ms-3 pt-2 fs-4">What's happening</div>
        ${PostSummary()}
         </div>
        
        ${whoToFollow()}
        </div>`
    );
}

$(BookMarks)