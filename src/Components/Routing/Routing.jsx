import { Route, Routes } from "react-router-dom"
import Mainlayout from "../../Pages/Layout"
import { lazy,Suspense } from "react"
import { Instagram } from 'react-content-loader'
import CustomErrorBoundary from "../Custom Error Boundary/CustomErrorBoundary"

const Home = lazy(() => import ('../../Pages/Home'))
const Coindetails = lazy(()=> import('../../Pages/Coindetails'))

function Routing(){
  
    return(

        <CustomErrorBoundary>

          <Routes>

           <Route path="/" element={<Mainlayout/>}>

           <Route index  element={

           <Suspense fallback={<Instagram/>}>
                <Home/>
            </Suspense>

            } />

       <Route path="/details/:coinid" element={ // :coinid => this is the dynamic part of url & we can contain any value. eg -> yash, or coin name.

            <Suspense fallback={<Instagram/>}>
                <Coindetails/>
            </Suspense>

            } /> 

        </Route>


      </Routes>

        </CustomErrorBoundary> 
    )
}
export default Routing