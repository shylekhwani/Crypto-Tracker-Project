import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

function Mainlayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default Mainlayout