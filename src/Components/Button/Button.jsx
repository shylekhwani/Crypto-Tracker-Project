function Button({onClick}){
    return(
        <>
        <button 
        type = 'submit'
        className="btn btn-active"
        onClick={onclick}
        >
            Search
            </button>
        </>
    )
}
export default Button