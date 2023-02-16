import TuitGenerator from "./TuitGenerator";
import allTuits from "./tuit.json"

const Tuits = ()=>{
    
    return(
        <>
            <div className=" border-bottom border-start border-end p-2">
                    <span className="fw-bold mt-3 fs-4">Home </span>
                    <br></br>
                    <span className="text-secondary mt-3">@neoEscapedMatrix </span>
                    <br></br>
            </div>
            
            <div className="position-relative border border-top-0">
                {allTuits.map(tuits=>{
                    console.log(tuits)
                    return(
                        <TuitGenerator tuit={tuits}/>
                    )
                })}
            </div>
        </>
    )
}

export default Tuits