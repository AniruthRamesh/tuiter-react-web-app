import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTuit } from "../Tuits/tuits-reducer"

const Home = ()=>{
    const dispatch = useDispatch()
    const [whatsHappening,setWhatsHappening] = useState("")

    const tuitClickHandler = ()=>{
        const newTuit = {
            tuits:whatsHappening
        }
        dispatch(createTuit(newTuit))
        setWhatsHappening('')
        
    }

    return(
        <>
            <div className=" border-bottom border-start border-end p-2">
                    <span className="fw-bold mt-3 fs-4">Home </span>
                    <br></br>
                    <div className="row">
                        <div className="col-auto"><img src="./Images/tate.jpeg" alt="your" width={45} style={{borderRadius:"24px",height:"45px",marginLeft:"9px"}} /></div>
                        <div className="col-10">
                            <textarea className="form-control border-0 no-outline" placeholder={"What's happening"} style={{boxShadow: "none",
                                borderColor: "#ced4da"}} value={whatsHappening} onChange={(event)=> setWhatsHappening(event.target.value) }>
                            </textarea>
                            <div>
                                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                                        onClick={tuitClickHandler}>
                                Tuit
                                </button>
                                <div className="text-primary fs-2 ms-2">
                                <i className="bi bi-card-image me-3"></i>
                                <i className="bi bi-filetype-gif me-3"></i>
                                <i className="bi bi-bar-chart me-3"></i>
                                <i className="bi bi-emoji-smile me-3"></i>
                                <i className="bi bi-geo-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Home