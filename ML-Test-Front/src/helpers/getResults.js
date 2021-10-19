
export const getResults = async (query) => {

    const response = await fetch(`http://localhost:4000/api/items?q=${query}`)
    const { items, categories } = await response.json();


    return { items, categories }
}
