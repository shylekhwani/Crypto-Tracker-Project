function Searchbar({ label, type = 'text', value, onChange }){
    return(
        <>
        <label className="block"> 

        <input 

         onChange={onChange}
         placeholder={label}
         type={type}
         value={value}
         className="input input-bordered w-full max-w-xs" />

        </label>
       
        </>
    )
}
export default Searchbar