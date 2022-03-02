import React, { useEffect, useState } from 'react'
import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'

// let cartItems = []
let newCart = []

function CartItem({ name, imgSrc, price, Id }) {
    const [qty, setQty] = useState(1)
    const [{ cart }, dispatch] = useStateValue()
    const [itemPrice, setItemPrice] = useState(
        parseFloat(qty * parseFloat(price))
    )

    useEffect(() => {
        newCart = cart
        setItemPrice(parseFloat(qty * parseFloat(price)))
    }, [qty, cart, price])

    const updateQty = (action, Id) => {
        if (action === 'add') {
            setQty(qty + 1)
        } else {
            if (qty === 1) {
                newCart = cart.filter((item) => item.isCart.id !== Id)

                dispatch({
                    type: actionType.SET_CART,
                    cart: newCart,
                })
            }
            setQty(qty - 1)
        }
    }

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
                        <RemoveRounded
                            className="itemRemove"
                            onClick={() => updateQty('remove', Id)}
                        />
                        <AddRounded
                            className="itemAdd"
                            onClick={() => updateQty('add', Id)}
                        />
                    </div>
                </div>
            </div>

            <p className="itemPrice">
                <span className="dolarSign">$ </span>
                <span className="itemPriceValue">{itemPrice.toFixed(2)}</span>
            </p>
        </div>
    )
}

export default CartItem
