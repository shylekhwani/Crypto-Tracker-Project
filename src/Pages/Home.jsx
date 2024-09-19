import Banner from "../Components/Banner/Banner"
import CoinTable from "../Components/CoinTable/CoinTable"
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