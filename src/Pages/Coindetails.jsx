import { useParams } from "react-router-dom"

function Coindetails(){

    const { coinid } = useParams();// useParams() returns an object, and we destructure it to get the coinid

    {/* The useParams() hook returns an object containing key-value pairs of the dynamic parameters in the URL.
       The keys are the names of the dynamic segments (like coinid), 
       and the values are the actual values in the URL. */}

    return(
        <>
        hi <br/>
        {coinid}
        </>
    )
}
export default Coindetails