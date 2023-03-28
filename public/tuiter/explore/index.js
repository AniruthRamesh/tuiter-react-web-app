import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummary from "./PostSummaryItem/index.js";
import whoToFollow from "./whoToFollowList/index.js";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').css('color','white')
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div
        class="col d-none d-sm-block col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2"
      >
                <!--Navigation Sidebar-->
                ${NavigationSidebar('Explore')}

        </div>

            <div class="col col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-7 position-relative center-bar">
                ${ExploreComponent()}
            </div>


        <div
          class="col d-none d-sm-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
        >
        ${whoToFollow()}
        </div>
    `);
    
 }
 
 $(exploreComponent);