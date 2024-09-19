import axiosInstance from "../helpers/axiosInstance";

export async function Fetchcoinlist(page = 1,currency = 'usd'){ //[page]= which page we want to fetch which has default value 1
                                                                // & [currency] = usd or inr. deafult value is usd if someone doesnt pass currency parameter
   const per_page = 250
   try {

    const response  = await axiosInstance.get(`coins/markets?vs_currency=${currency}&per_page=${per_page}&page=${page}`) 

    //console.log(response);
    return response.data

   } catch (error) {

    console.log(error)

   }
}