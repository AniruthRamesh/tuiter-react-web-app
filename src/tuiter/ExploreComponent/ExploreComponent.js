import { Link } from "react-router-dom"
import PostSummaryList from "../PostSummaryComponent/index.js"
import "./Explore.css"

const ExploreComponent = ()=>{
    return(
        <div>
            <span className="position-relative">
            <i
            className="bi bi-search position-absolute 
            wd-nudge-up"
            style={{
                color: "black",
                position: "absolute",
                marginTop: "0.4rem",
                fontSize: "18px",
                marginLeft: "1rem"
            }}
            id="wd-searchImage"
            ></i>
            <input
            type="text"
            className="form-control rounded-5 m-0 d-inline"
            placeholder="Search Tuiter"
            style={{width: "90%"}}
            />
             <Link to ="" ><i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i></Link>
        </span>

        <ul className="nav nav-tabs mt-2">
            <li className="nav-item">
            <button className="nav-link active"
                >For you</button>
            </li>
            <li className="nav-item">
            <button className="nav-link" >Trending</button>
            </li>
            <li className="nav-item">
            <button className="nav-link">News</button>
            </li>
            <li className="nav-item">
            <button className="nav-link" >Sports</button>
            </li>
            <li className="nav-item d-none d-md-block">
            <button className="nav-link"
                >Entertainment</button>
            </li>
        </ul>

        <div className="position-relative mt-2">
            <img
            src="./Images/relativity.jpg"
            className="img-fluid"
            alt="relativity"
            />
            <div className="container position-relative">
            <h1
                style={{
                color: "white",
                position: "absolute",
                bottom: "1.2rem",
                paddingRight: "1.25rem"
                }}>
                Relativity Space
            </h1>
            </div>
        </div>
        <PostSummaryList/>
        </div>
    )
}

export default ExploreComponent