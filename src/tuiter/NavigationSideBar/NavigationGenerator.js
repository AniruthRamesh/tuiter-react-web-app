import { Link } from "react-router-dom"

const NavigationGenerator = ({active,content})=>{
    const {page,icon,link} = content
    return(
        <Link to={link} style={{textDecoration:"none"}}>
            <span className={`list-group-item list-group-item-action ${active===page.toLowerCase()?`active`:``}`}>
                <i className={icon}></i>
                <span className="d-none d-xl-inline m-3">
                {page}</span>
            </span>
        </Link>
    )
}

export default NavigationGenerator