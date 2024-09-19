import { useQuery } from "@tanstack/react-query";
import CurrencyContext from "../../Context/CurrencyContext";
import { useContext } from "react";
import SearchbarformLogic from "./SearchBarformlogic/SearchBarformlogic";
import { useNavigate } from "react-router-dom";
import { Fetchcoinlist } from "../../Services/Fetchcoinlist";

function Navbar() {
  const { Setcurrency, Setsymbol } = useContext(CurrencyContext);
  const navigate = useNavigate();

  const { data: coins, isLoading, isError } = useQuery({
    queryKey: ['coins', Setcurrency],
    queryFn: () => Fetchcoinlist(Setcurrency),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  // Handle form submission when the coin ID is submitted
  function handleSubmit(coinId) {
    console.log("Submitted Coin ID:", coinId);
    navigate(`/details/${coinId}`);
  }

   // This function handles redirection to the homepage.
   function handelredirect() {
    navigate('/');
  }

  const coinSuggestions = coins?.map((coin) => ({
    id: coin.id,
    name: coin.name,
    image: coin.image,
  })) || [];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* INR Currency */}
            <li
              onClick={() => {
                Setcurrency('inr');
                Setsymbol('₹');
              }}
            >
              <a>INR</a>
            </li>

            {/* USD Currency */}
            <li
              onClick={() => {
                Setcurrency('usd');
                Setsymbol('$');
              }}
            >
              <a>USD</a>
            </li>
          </ul>
        </div>
      </div>
      <div onClick={() => handelredirect()} className="navbar-center">
        <a className="btn btn-ghost text-xl">Crypto Tracker</a>
      </div>
      <div className="navbar-end">
        {/* Conditionally show the search form only if data is available */}
        {!isLoading && !isError && (
          <SearchbarformLogic
            onsubmit={handleSubmit} // Submit coin ID on form submit
            suggestions={coinSuggestions} // Pass suggestions (coin names, images, IDs)
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
