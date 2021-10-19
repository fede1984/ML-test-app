import { useState, useEffect } from "react"


import { getResults } from "../helpers/getResults"


export const useFetchedResults = (query) => {

    const [results, setResults] = useState([])

    useEffect(() => {

        getResults(query)
            .then(result => {
                const category = () =>
                    result.categories.reduce(
                        (a, b, i, arr) =>
                            (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
                        null)

                const items = result.items.filter(item => item.category === category()).splice(0, 4)



                setResults(items)


            }
            )
    }, [query])

    return results

}
