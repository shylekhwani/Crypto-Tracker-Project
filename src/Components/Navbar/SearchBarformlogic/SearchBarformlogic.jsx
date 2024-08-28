import { useState } from "react";
import CryptoSymbols from "../../../assets/Crypto Symbols/CryptoSymbols";
import Searchbarform from "../Searchbarform/Searchbarform";

function SearchbarformLogic({ onsubmit }) {
    const [val, setVal] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    function handelformsubmit(event) {
        event.preventDefault();
        onsubmit?.(val);
        setVal(''); // Clear the input field
        setSuggestions([]); // Clear suggestions after submission
    }

    function handeltextinputchange(event) {
        const inputValue = event.target.value.toLowerCase();
        setVal(inputValue);

        // Filter suggestions based on input
        const filteredSuggestions = Object.keys(CryptoSymbols).filter((key) => key.includes(inputValue));
        setSuggestions(filteredSuggestions);
    }

    function handleSuggestionClick(suggestion) {
        setVal(suggestion); // Update input field with the selected suggestion
        onsubmit?.(suggestion);
        setSuggestions([]); // Clear suggestions after selection
    }

    return (
        <Searchbarform
            handelformsubmit={handelformsubmit}
            handeltextinputchange={handeltextinputchange}
            handleSuggestionClick={handleSuggestionClick}
            value={val}
            suggestions={suggestions}
        />
    );
}

export default SearchbarformLogic;
