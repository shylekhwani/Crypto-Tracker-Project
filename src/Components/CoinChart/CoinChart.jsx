import ErrorComponent from "../Error Compo/ErrorComponent";
import { Bar, Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale)

function CoinChart({historicdata, setinterval,setdays,days,currency}){

    const chartdays = [
        {
            label : '24 hours',
            value : 1
        },
        {
            label : '7 Days',
            value : 7
        },
        {
            label : '30 Days',
            value : 30
        },
        {
            label : '90 Days',
            value : 90
        },
        {
            label : '365 Days',
            value : 365
        },
    ];

function handeldDayChange(event){

console.log(event.target.options[event.target.selectedIndex].value) // event.target is <select> tag, in this we have 'option' property which gives list of option we have and it has 'selectedIndex' which option we have selected 

const daysselected = event.target.options[event.target.selectedIndex].value;
if(daysselected==1){
    setinterval('')
} else{
    setinterval('daily')
}

setdays(event.target.options[event.target.selectedIndex].value)
//setdays(event.target.value) this is also working
}

if(!historicdata){
    return(<ErrorComponent error={'No data Available'}/>) 
}
// console.log(historicdata.market_caps.map(market=> market[1]))
return(
  <div className="flex flex-col items-center justify-center space-y-8 w-full">

 <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">

 <Line

  data={{
    
    labels: historicdata.prices.map(coinPrice => {
        let date = new Date(coinPrice[0]); // CONVERTING UNIX TIMESTAMP TO DATE
        let time = date?.getHours() > 12 ? `${date?.getHours() - 12}:${date?.getMinutes()} PM` : `${date?.getHours()}:${date.getMinutes()} AM`;
        return days === 1 ? time : date.toLocaleDateString(); 
    }),

    datasets: [{
      label: `Price (Past ${days} ${days === 1 ? 'Day ': 'Days'} ) in ${currency.toUpperCase()}`,
      data: historicdata.prices.map(coinprice => coinprice[1]),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1

    }]
  }}

  options={{
     responsive: true,
    maintainAspectRatio: false,// allow us to re-size the chart

    elements: {
      point: {
        // radius: 0
      }
    }
  }}

/>

<hr/>

<div  className="w-full h-[300px] md:h-[400px] lg:h-[500px]">

<Bar
  data={{
  labels: historicdata.market_caps.map(marketcap => {
    let date = new Date(marketcap[0]);
    let time = date?.getHours() > 12 
      ? `${date?.getHours() - 12}:${date?.getMinutes()} PM` 
      : `${date?.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString(); 
  }),

  datasets: [{
    label: `Market Cap (Past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${currency.toUpperCase()}`,
    data: historicdata.market_caps.map(marketcap => marketcap[1]),
    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Single color with reduced opacity
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 1,
  }]
}}
/>
</div>


<div className="flex justify-center w-full">
<select className="select select-primary w-full max-w-xs"  value={days} onChange={handeldDayChange}>
 {chartdays.map((day,index)=>{
    return(
        <option key={index} value={day.value}>{day.label}</option>
    )
 })}
</select>
</div>

</div>


  </div>
   
)
}
export default CoinChart