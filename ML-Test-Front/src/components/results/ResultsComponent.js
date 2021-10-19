import React from 'react'


import { useFetchedResults } from '../../hooks/useFetchedResults'
import { ResultItem } from './ResultItem'

export const ResultsComponent = ({ query }) => {


    const results = useFetchedResults(query)


    return (

        <section className="resultsContainer">

            {

                results.map(result => {

                    return <ResultItem key={result.id} result={result} />

                })
            }
        </section>
    )
}
