import React from 'react'
import { Link } from 'react-router-dom'

import shipping from '../../assets/ic_shipping.png'

export const ResultItem = ({ result }) => {

    return (
        <>
            <article className="itemContainer col-12">
                <img className="itemImg" src={result.picture} alt="Product" />
                <div className="itemData col-10">
                    <div className="itemTitle col-12">
                        <div className="itemPrice col-9">
                            {(result.price.currency === "ARS") ? "$ " : "U$S "}
                            {result.price.amount} {result.free_shipping && (<img alt="Free shipping" src={shipping} />)}
                        </div>
                        <div className="itemLocation">{result.address}</div>
                    </div>
                    <Link className="itemDescription col-6" to={`/items/${result.id}`} >
                        {result.title}
                    </Link>
                </div>
            </article>

        </>
    )
}
