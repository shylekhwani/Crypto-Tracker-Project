import { useParams } from "react-router-dom"
import { Fetchcoindetails } from "../Services/Fetchcoindetails";
import { useQuery } from "@tanstack/react-query";
import CurrencyContext from "../Context/CurrencyContext";
import parse from 'html-react-parser';
import { useContext } from "react";
import { useLocation } from "react-router-dom"

function Coindetails(){

    const {currency} = useContext(CurrencyContext);

    const {symbol} = useContext(CurrencyContext);

    const { coinid } = useParams();// useParams() returns an object, and we destructure it to get the coinid

    {/* The useParams() hook returns an object containing key-value pairs of the dynamic parameters in the URL.
       The keys are the names of the dynamic segments (like coinid), 
       and the values are the actual values in the URL. */}

   const location = useLocation();
   const nameofcoin = location.state?.coinname;

    
   const{data,isLoading,isError,error}=useQuery({
    queryKey: ['coin', coinid], 
    queryFn: () => Fetchcoindetails(coinid),
    retry: 2,
    cacheTime: 1000 * 60 * 2, 
    staleTime: 1000 * 60 * 2 
})


/////////////////////////////
if(isLoading){
    <div className="flex justify-center items-center h-full">
      <span className="loading loading-dots loading-lg"></span>
   </div>
}
//////////////////////////////
if(isError){
    return (
        <div role="alert" className="alert alert-error">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Error! {error.message}</span>
  </div>
      );
}
///////////////////////////////////////
    return(
      <div className="flex flex-col md:flex-row p-4 md:p-8">

      {/* Left Section: Coin Image, Name, Description */}

      <div className="md:w-2/5 p-4">

        <div className="flex flex-col items-center">

          <img
            alt={data && data.name}
            src={data && data.image.large}
            className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4"
          />

          <h1 className="text-xl md:text-3xl font-bold mb-4 text-center">
            {data && data.name}
          </h1>

          <p className="text-sm md:text-base text-justify">
            {data && data.description && typeof data.description.en === 'string' ? parse(data.description.en) : 'Description not available'}
          </p>

        </div>
    
        <div className="mt-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-sm md:text-lg font-semibold">Rank</h2>

            <span className="text-sm md:text-lg font-bold text-gray-100 bg-gray-800 p-1 rounded">
              {data && data.market_cap_rank}
            </span>

          </div>
    
          <div className="flex justify-between items-center mb-4">

            <h2 className="text-sm md:text-lg font-semibold">Current Price</h2>

            <span className="text-sm md:text-lg font-bold text-gray-100 bg-gray-800 p-1 rounded">
             {symbol} {data && data.market_data.current_price[currency].toLocaleString()}
            </span>

          </div>

        </div>
      </div>


     {/* Vertical Divider */}
     <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

    
      {/* Right Section: Additional Coin Info */}
      <div >
        <h2 className="text-lg md:text-xl font-bold mb-4">Coin Info</h2>
        <p>Additional coin info will go here.</p>
      </div>
    </div>    
    )
}
export default Coindetails