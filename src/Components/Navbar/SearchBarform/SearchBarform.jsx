import Searchbar from "../Searchbar/Searchbar";
import Button from "../../Button/Button";

function Searchbarform({ handelformsubmit, handeltextinputchange, handleSuggestionClick, value, suggestions }) {
    return (
        <>
            <form onSubmit={handelformsubmit} className="flex items-center justify-between p-4 bg-base-400 rounded-md shadow-md">
                <div className="flex items-center space-x-2">
                    <Searchbar
                        label="Search Coin"
                        type="text"
                        onChange={handeltextinputchange}
                        value={value}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <Button className="btn-primary" />
                </div>
            </form>

            {suggestions?.length > 0 && (
                <ul className="absolute top-full left-0 w-full max-h-60 overflow-y-auto bg-gray-700 shadow-lg rounded-b-lg z-10">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-600 cursor-pointer text-white"
                            onClick={() => handelformsubmit({ preventDefault: () => {}, target: { value: suggestion } })}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Searchbarform;
