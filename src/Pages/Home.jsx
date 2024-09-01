import Banner from "../Components/Banner/Banner"
import CoinTable from "../Components/CoinTable/CoinTable"
import Navbar from "../Components/Navbar/Navbar"
import { useLocation } from "react-router-dom"

 function Home(){
  
    return(
        <>
   <Banner/>
   <CoinTable/>
   {/* <CoinTable searchQuery={nameofcoin}/> feature i implemented jeeping it for refernce*/} 
        </>
    )
}

export default Home