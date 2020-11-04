import React, {useContext, useEffect, useState} from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './context/StateProvider'
import { getBasketTotal } from './context/reducer'
import { useHistory } from 'react-router-dom'
import newContext from './context/newContext'


function Subtotal({productsPrice}){
    const history = useHistory()
    const {newBasket, setNewBasket} = useContext(newContext)
    const [{basket, user}, dispatch] = useStateValue()

    const goPay = () => {
        history.push('/payment')
    }
    return(
        <div className="subtotal-box">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({newBasket} items):
                        <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>    
                )}
                decimalScale={2}
                value={getBasketTotal(productsPrice)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            {/* <span>{`the price is ${price}`}</span> */}
            <button onClick={goPay}>Procceed to payment</button>
        </div>
    )
}

export default Subtotal