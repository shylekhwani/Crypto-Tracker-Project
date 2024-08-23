import Searchbarform from "../SearchBarform/SearchBarform"
import { useState } from "react"

function SearchbarformLogic({onsubmit}){

    const [val,setval] = useState('');
    
    function handelformsubmit(event){
        event.preventDefault()
        console.log('submitted',val)
        onsubmit?.(val)
        setval(''); // Clear the input field
      }
   
      function handeltextinputchange(event){
       console.log(event.target.value)
       setval(event.target.value)
      }

    return(
        <>
         <Searchbarform
      handelformsubmit={handelformsubmit}
      handeltextinputchange={handeltextinputchange}
      value={val}
    />
        </>
    )
}
export default SearchbarformLogic