import { ErrorBoundary } from "react-error-boundary";

// when something went wrong we show this UI
// eslint-disable-next-line react/prop-types
function CustomErrorBoundaryUI({error,reseterrorboundary}){ // [reseterrorbounadry] = means we want to retry something. its an optional
    return(
        <div role="alert" className="alert alert-error">
             {/* eslint-disable-next-line react/prop-types*/}
             <span>{error?.message} Task failed </span>
             <button onClick={reseterrorboundary}>Try Again</button> {/* how we handel the reset is present is OnReset() */}
        </div>
    )
} 

// ErrorBoundary will call this UI in fallback component 
// eslint-disable-next-line react/prop-types
export default function CustomErrorBoundary({children}){
    return(

        <ErrorBoundary
        FallbackComponent={CustomErrorBoundaryUI} 
        onReset={()=>window.location.reload()}
        >

            {children}

        </ErrorBoundary>
    )
}