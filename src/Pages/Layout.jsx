import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function Mainlayout(){
    
    return(
        <>
        <Navbar />
        <Outlet/>
        </>
    )
}
export default Mainlayout