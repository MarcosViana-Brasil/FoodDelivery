import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react'

function CartItem({ name, imgSrc, qty, price }) {
    return (
        <div className="cartItem">
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>x {qty}</span>
                    <div className="quantity">
                        <RemoveRounded className="itemRemove" />
                        <AddRounded className="itemAdd" />
                    </div>
                </div>
            </div>

            <p className="itemPrice">
                <span className="dolarSign">$ </span>
                <span className="itemPriceValue">{price}</span>
            </p>
        </div>
    )
}

export default CartItem
