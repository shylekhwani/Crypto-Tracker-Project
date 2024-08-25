import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home"
import Coindetails from "../../Pages/Coindetails"
import Mainlayout from "../../Pages/Layout"

function Routing(){
    return(
       <Routes>

           <Route path="/" element={<Mainlayout/>}>

           <Route index  element={<Home/>} />
           <Route path="/details/:coinid" element={<Coindetails/>} /> {/* :coinid => this is the dynamic part of url & we can contain any value. eg -> yash, or coin name */}
           
            </Route>
       
        
       </Routes>
    )
}
export default Routing