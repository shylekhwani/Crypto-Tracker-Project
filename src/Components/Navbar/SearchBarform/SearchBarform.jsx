import Searchbar from "../Searchbar/Searchbar"
import Button from "../../Button/Button"

function Searchbarform({handelformsubmit,handeltextinputchange,value}){
    return(
        <>
      <form onSubmit={handelformsubmit} className='flex items-center justify-between p-4 bg-base-400 rounded-md shadow-md'>
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
        </>
    )
}

export default Searchbarform