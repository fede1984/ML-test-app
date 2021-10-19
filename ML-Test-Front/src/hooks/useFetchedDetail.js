import { useState, useEffect } from "react"

import { getDetail } from "../helpers/getDetail"

export const useFetchedDetail = (id) => {

    const [detail, setDetail] = useState([])

    useEffect(() => {

        getDetail(id)
            .then(detail => {

                setDetail(detail.item)

            }
            )
    }, [id])
  
    return detail
}
