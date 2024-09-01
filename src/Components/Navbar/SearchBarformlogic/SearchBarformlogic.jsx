import { useState } from "react";
import Searchbarform from "../Searchbar/Searchbar";

function SearchbarformLogic({ onsubmit }) {
  
    const [val, setVal] = useState('');
   

    function handelformsubmit(event) {
        event.preventDefault();
        onsubmit?.(val);
        setVal(''); // Clear the input field
    }

    function handeltextinputchange(event) {
        const inputValue = event.target.value.toLowerCase();
        // console.log(inputValue,event.target)
        setVal(inputValue);
    }

    return (
        <Searchbarform
            handelformsubmit={handelformsubmit}
            handeltextinputchange={handeltextinputchange}
            value={val}
        />
    );
}

export default SearchbarformLogic;
