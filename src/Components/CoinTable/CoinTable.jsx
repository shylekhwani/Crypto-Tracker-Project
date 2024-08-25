import { useContext, useEffect, useState } from "react"
import { Fetchcoindata } from "../../Services/Fetchcoindata"
import { useQuery } from "@tanstack/react-query";
import CurrencyContext from "../../Context/CurrencyContext";
import { useNavigate } from "react-router-dom";


function CoinTable({/*currency ,symbol*/ searchQuery}){ // kepping parametrs just for reference 

 const {currency,symbol} = useContext(CurrencyContext);
 
 const navigate = useNavigate();

    // useEffect(()=>{
    //     Fetchcoindata(1,'usd')
    // },[])
    
/*
useQuery is a custom hook within React Query used to fetch data in a React application. 
Under the hood, these hooks manage lots of things such as caching data after the initial fetch, 
re-fetching data in the background, etc.
*/


const [page,setpage] = useState(1);



const{data,isLoading,isError,error}=useQuery({
    queryKey: ['coins', page, currency], // 2nd parameter is any variable that we are going to pass to queryfunction
    queryFn: () => Fetchcoindata(page, currency),
    retry: 2, // retry 2 times
    // refetchOnWindowFocus: true,
    retryDelay: 1000, // after 1 second we retry
    cacheTime: 1000 * 60 * 2, // we store data for 2 minutes after we make an api call
    staleTime: 1000 * 60 * 2 // for how long we going to consider data fresh and we dont make an new api call that minutes
})

// useEffect(()=>{
//         console.log(data,'responeee')
//     },[data])

// if (isLoading) {
//     return <div className="text-center py-8 text-lg">Loading...</div>;
//   }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const filteredData = data && data.filter((coin) => {

  
// const lowerCaseSearchQuery = searchQuery?.toLowerCase() || ''; //If searchQuery is undefined or null, it defaults to an empty string ('') to prevent the toLowerCase() call from failing.
 
// return (
//     coin.name.toLowerCase().includes(lowerCaseSearchQuery) ||
//     coin.symbol.toLowerCase().includes(lowerCaseSearchQuery)
//   );
// });


function handelredirect(id){
navigate(`/details/${id}`)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (isError) {
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 font-semibold text-center bg-gray-100 py-2 rounded">
        <div>Coin</div>
        <div>Price</div>
        <div>24hr Change</div>
        <div>Market Cap</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-200">
        
      {isLoading && (
          <div className="flex justify-center items-center h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
     )}

       {data && data.map((coin) => (

          <div onClick={()=>handelredirect(coin.id)} key={coin.id} className="grid grid-cols-4 gap-4 py-4 items-center text-center cursor-pointer">
            {/* {console.log(coin.id)} */}

            <div className="flex items-center space-x-4">   

              <img src={coin.image} alt={coin.name} className="w-8 h-8" />

              <div>

                <div className="font-medium">{coin.name}</div>
                <div className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</div>

              </div>

            </div>

            <div>{symbol}{coin.high_24h.toLocaleString()}</div>

            <div className={coin.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}>
              {coin.price_change_24h.toFixed(2)}
            </div>

            <div>{symbol}{coin.market_cap.toLocaleString()}</div>

          </div>

        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={page === 1}
          onClick={() => setpage(page - 1)}
          className={`px-4 py-2 rounded bg-blue-500 text-white font-medium ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          Previous
        </button>
        <button
          onClick={() => setpage(page + 1)}
          className="px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CoinTable