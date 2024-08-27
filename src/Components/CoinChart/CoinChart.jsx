import ErrorComponent from "../Error Compo/ErrorComponent";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

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
console.log(event.target.options[event.target.selectedIndex].value)
const daysselected = event.target.options[event.target.selectedIndex].value;
if(daysselected==1){
    setinterval('')
} else{
    setinterval('daily')
}
setdays(event.target.options[event.target.selectedIndex].value)
//setdays(event.target.value) this is also working
}

    Chart.register(CategoryScale)

if(!historicdata){
    return(<ErrorComponent error={'No data Available'}/>) 
}
// console.log(historicdata.market_caps.map(market=> market[1]))
return(
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">

    <Line

      data={{
        labels: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ],

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

    <div className="">
    <select className="select select-primary w-full max-w-xs"  value={days} onChange={handeldDayChange}>
     {chartdays.map((day,index)=>{
        return(
            <option key={index} value={day.value}>{day.label}</option>
        )
     })}
    </select>
    </div>

  </div>
  
)
}
export default CoinChart