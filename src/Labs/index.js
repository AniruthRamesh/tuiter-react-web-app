import { Route,Routes} from "react-router";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import Nav from "../nav";

const Labs = ()=>{
    return(
        <div>
            <Nav/>
        <Routes>
            <Route index element={<Assignment6/>}></Route>
            <Route path="a7" element={<Assignment7/>}></Route>
        </Routes>

        
    </div>
    );
}
 export default Labs;