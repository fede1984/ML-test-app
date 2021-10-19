
export const getDetail = async (id) => {

    const response = await fetch(`http://localhost:4000/api/items/${id}`)
    const detail = await response.json();


    return detail
}
