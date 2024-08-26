import { Route, Routes } from "react-router-dom"
import Mainlayout from "../../Pages/Layout"
import { useLocation } from "react-router-dom"
import { lazy,Suspense } from "react"

const Home = lazy(() => import ('../../Pages/Home'))
const Coindetails = lazy(()=> import('../../Pages/Coindetails'))

function Routing(){
  
    return(
       <Routes>

           <Route path="/" element={<Mainlayout/>}>

           <Route index  element={
            <Suspense fallback={<div>Loading Home</div>}>
               <Home/>
           </Suspense>
           } />

           <Route path="/details/:coinid" element={ // :coinid => this is the dynamic part of url & we can contain any value. eg -> yash, or coin name.
        
            <Suspense fallback={<div>laoding details</div>}>
              <Coindetails/>
            </Suspense>

           } /> 
           
            </Route>
       
        
       </Routes>
    )
}
export default Routing