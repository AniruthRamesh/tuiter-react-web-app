import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/">Assignment 6</Link>|
            <Link to="/a7">Assignment 7</Link>|
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter/explore">Tuiter</Link>
        </div>
    )
}

export default Nav;