import React, {useState} from "react";


const SearchBar = ({onFormSubmit}) => {
   const[term,setTerm]= useState("");


   const onInputChange =  event =>{
         setTerm(event.target.value)
    }
    const  onSubmit = event =>{
          event.preventDefault()
          onFormSubmit(term);
    };


     return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>
                        Video search
                    </label>
                    <input type="text" className="ui input"  value={term} onChange={onInputChange}></input>
                </div>

            </form>
        </div>
    )
}

export default SearchBar;



