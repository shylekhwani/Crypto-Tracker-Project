import CoinChart from "./CoinChart";
import { FetchcoinHistoricdata } from "../../Services/FetchcoinHistoricdata"
import { useQuery } from "@tanstack/react-query";
import CurrencyContext from "../../Context/CurrencyContext";
import { useContext, useState } from "react";
import ErrorComponent from "../Error Compo/ErrorComponent";

function CoinChartlogic({coinid}){

    const {currency} = useContext(CurrencyContext);

    const [days,Setdays] = useState(1);

    const [interval,Setinterval] = useState('daily')
 
        const{data,isLoading,isError,error}=useQuery({
            queryKey: ['coinHistoricData', coinid,currency,days,interval], 
            queryFn: () => FetchcoinHistoricdata(coinid,currency,days,interval),
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
    <ErrorComponent error={error.message}/>
      );
}
///////////////////////////////////////

    return(
        <>
        <CoinChart 
        historicdata={data} 
        setinterval={Setinterval} 
        setdays={Setdays}
        days={days}
        currency={currency}
        />
        </>
    )
}
export default CoinChartlogic