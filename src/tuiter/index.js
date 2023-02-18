import { useLocation } from "react-router"
import ExploreComponent from "./ExploreComponent/ExploreComponent"
import NavigationSideBar from "./NavigationSideBar"
import Tuits from "./Tuits"
import WhoToFollow from "./whoToFollow"
import { Route, Routes } from "react-router"

const Tuiter = ()=> {
    const location = useLocation()
    const pathName = location.pathname
    const allPath = pathName.split("/")

    return(
        <div>
            <div className="row mt-2">
                <div className="col d-none d-sm-block col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSideBar active={allPath[2]}/>
                </div>
                <div className="col col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-7 position-relative center-bar">
                    <Routes>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="home" element={<Tuits/>}/>
                    </Routes>
                </div>
            
                <div className="col d-none d-sm-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
                    <WhoToFollow/>
                </div>
            </div>
    
        </div>
        
    )
}

export default Tuiter