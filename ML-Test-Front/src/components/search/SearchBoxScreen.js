import React from 'react'

import logo from '../../assets/logo.png'
import { NavSearch } from './NavSearch'


export const SearchBoxScreen = ({history}) => {
    
    return (
        <>
            <NavSearch history={history}></NavSearch>
            
            
                <img src={logo} className='bigLogo' alt="Logo ML" />
                <p>Buscá productos, marcas y más…</p> 
          

        </>
    )
}
