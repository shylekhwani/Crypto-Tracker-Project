import Searchbarform from "../SearchBarform/SearchBarform";
import { useState } from "react";

// The component takes in `onsubmit` (callback for form submission) and `suggestions` (list of coin data)

// eslint-disable-next-line react/prop-types
function SearchbarformLogic({ onsubmit, suggestions }) {
  // State to store the current input value in the search bar (coin name)
  const [val, setVal] = useState('');

  // State to store filtered suggestions based on the input value
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // State to control the visibility of the dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // State to store the selected coin's ID
  const [selectedCoinId, setSelectedCoinId] = useState(null);

  // Handles form submission when the user submits the search query
  function handelformsubmit(event) {
    event.preventDefault();
    
    // Submit the selected coin's ID instead of its name
    if (selectedCoinId || val) {
      onsubmit?.(selectedCoinId || val); // Call the parent onsubmit function with the coin ID
    }

    setVal(''); // Clear the input field after submission
    setShowDropdown(false); // Hide the dropdown
    setSelectedCoinId(null); // Clear the selected coin ID
  }

  // Handles input change in the search bar
  function handeltextinputchange(event) {
    const inputValue = event.target.value; // Get the current input value
    setVal(inputValue); // Set the input value in state

    // If input is not empty, filter the suggestions based on the input
    if (inputValue) {
      // eslint-disable-next-line react/prop-types
      const filtered = suggestions.filter((coin) =>
        coin.name.toLowerCase().includes(inputValue.toLowerCase()) // Filters coins by name
      );
      setFilteredSuggestions(filtered); // Set the filtered suggestions
      setShowDropdown(true); // Show the dropdown when suggestions are available
    } 
    else {
      setShowDropdown(false); // Hide the dropdown if input is empty
    }
  }

  // Handles clicking on a suggestion in the dropdown
  function handleSuggestionClick(coin) {
    setVal(coin.name); // Set the clicked suggestion's name in the input field
    setSelectedCoinId(coin.id); // Store the clicked coin's ID
    setShowDropdown(false); // Hide the dropdown after selecting a suggestion
  }

  return (
    <div className="relative">
      {/* Render the Searchbarform component, passing down event handlers */}
      <Searchbarform
        handelformsubmit={handelformsubmit}
        handeltextinputchange={handeltextinputchange}
        value={val} // Current input value
      />

      {/* Conditionally render the dropdown if it's visible and there are filtered suggestions */}
      {showDropdown && filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full max-h-60 overflow-y-auto bg-gray-700 shadow-lg rounded-b-lg z-10">
          {filteredSuggestions.map((coin, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-600 cursor-pointer text-white flex items-center space-x-4"
              onClick={() => handleSuggestionClick(coin)}
            >
              {/* Display coin image and name in the dropdown */}
              <img src={coin.image} alt={coin.name} className="w-6 h-6" />
              <span>{coin.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchbarformLogic;
