import TuitGenerator from "./TuitGenerator";
import {useSelector} from "react-redux"
import Home from "../Home";

const Tuits = ()=>{
    const allTuits = useSelector((state)=>state.tuits)
    return(
        <>
            <Home/>
            
            <div className="position-relative border border-top-0 list-group">
                {allTuits.map(tuits=>{
                    return(
                        <div className="list-group-item list-group-item-action">
                            <TuitGenerator tuit={tuits}/>
                        </div>
                        
                    )
                })}
            </div>
        </>
    )
}

export default Tuits