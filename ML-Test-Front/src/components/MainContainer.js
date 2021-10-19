import React from 'react'
import { SearchMap } from './search/SearchMap'


export const MainContainer = ({ component, query, id }) => {
    return (
        <section className="mainContainer col-10">
            <SearchMap query={query} id={id}></SearchMap>
            {component}
        </section>
    )
}
