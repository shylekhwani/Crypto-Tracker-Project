import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home"
import Coindetails from "../../Pages/Coindetails"

function Routing(){
    return(
       <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/details/:coinid" element={<Coindetails/>} /> {/* :coinid => this is the dynamic part of url & we can contain any value. eg -> yash, or coin name */}
        
       </Routes>
    )
}
export default Routing