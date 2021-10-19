import React, { useState } from 'react'


import logo from '../../assets/logo.png'


export const NavSearch = ({history}) => {
    
    const [search, setSearch] = useState("")
    
    const handleInputChange = ({ target }) =>  setSearch( target.value);

    const handleSearch = (e) => {
        e.preventDefault();
        
        if(search !== ""){
        
            history.push(`/items?q=${ search}`); 
          
        }
        
    }
    
    return (
       <>  
            <header>
                <div className="navContainer col-10">
                    <img alt="Logo ML" className="logo" src={logo}/>
                    <form className="navSearch col-11" onSubmit={ handleSearch }>
                        <input type="text" className="nav-search-input"  name="search" onChange={handleInputChange} value={search} placeholder="Nunca dejes de buscar" maxLength="120" autoCapitalize="off" autoCorrect="off" spellCheck="false" autoComplete="off" />
                        <button className="navButton"></button> 
                    </form> 
                </div>
                
            </header>
       </> 
        
    )
}

