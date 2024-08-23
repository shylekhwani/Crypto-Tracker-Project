import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import CoinTable from "./Components/CoinTable/CoinTable"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import CurrencyContext from "./Context/CurrencyContext"
import Searchbar from "./Components/Navbar/Searchbar/Searchbar"
import SearchbarformLogic from "./Components/Navbar/SearchBarformlogic/SearchBarformlogic"
import SearchCoinContext from "./Context/SearchContext"


function App() {
 
const [currency,Setcurrency] = useState('usd')

const [symbol,Setsymbol] = useState('$')

  return (
    <>
    {/* <Navbar setcurrency={setcurrency} setsymbol={usesymbol}/>
    <Banner/>
    <CoinTable currency={currency} symbol={symbol}/> */}

   {/* React Context Api */}
   <CurrencyContext.Provider value={{currency,Setcurrency,symbol,Setsymbol}}>
    
        <Home />
   
     </CurrencyContext.Provider>
    </>
  )
}

export default App
