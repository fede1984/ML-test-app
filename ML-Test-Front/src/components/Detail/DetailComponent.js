import React from 'react'

import { useFetchedDetail } from '../../hooks/useFetchedDetail'
import shipping from '../../assets/shipping.png'

export const DetailComponent = ({ id }) => {

    const detail = useFetchedDetail(id)




    return (

        <section className="detailContainer">

            <div className="detailShop col-12">
                <figure>
                    <img alt="Product" className="detailImg" src={detail.picture} />
                </figure>
                <div className="priceContainer col-4">
                    <div className="detailCondition">

                        {(detail.condition === "used") ? "Usado" : "Nuevo "}  {(detail.sold_quantity > 0) && `- ${detail.sold_quantity} vendidos`}
                    </div>
                    <h1 className="detailTitle">{detail.title}</h1>
                    <div className="detailAmount">
                        {(detail.price?.currency === "ARS") ? "$ " : "U$S "}
                        {detail.price?.amount}  <sup>{(detail.price?.decimals === 0) ? "00" : detail.price?.decimals.toString().substr(2, 2)}  </sup>
                        {detail.free_shipping && (<img alt="ShippingImg" className="shippingImg" src={shipping} />)} </div>
                    <button className="btn detailButton">Comprar</button>
                </div>
            </div>
            <div className="detailDescription col-12">
                <div className="descriptionTitle">
                    Descripción
                </div>
                <p className="descriptionText col-8">{detail.description}</p>

            </div>


        </section>
    )


}
