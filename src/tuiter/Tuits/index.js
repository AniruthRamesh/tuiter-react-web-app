import TuitGenerator from "./TuitGenerator";
import {useSelector,useDispatch} from "react-redux"
import Home from "../Home";
import { useEffect } from "react";
import {findTuitsThunk} from "../../services/tuits-thunks.js"

const Tuits = ()=>{
    const {tuits,loading} = useSelector((state)=>state.tuitsData);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(findTuitsThunk())
    },[])

    return(
        <>
            <Home/>
            {loading && <i class="bi bi-arrow-clockwise"></i>}
            { !loading &&
                <div className="position-relative border border-top-0 list-group">
                {tuits.map(tuits=>{
                    return(
                        <div className="list-group-item list-group-item-action">
                            <TuitGenerator tuit={tuits}/>
                        </div>
                        
                    )
                })}
                </div>
            }
            
        </>
    )
}

export default Tuits