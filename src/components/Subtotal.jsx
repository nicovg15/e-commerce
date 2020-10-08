import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './context/StateProvider'
import { getBasketTotal } from './context/reducer'
import { useHistory } from 'react-router-dom'

function Subtotal(){
    const history = useHistory()

    const [{basket, user}, dispatch] = useStateValue()

    const goPay = () => {
        history.push('/payment')
    }

    return(
        <div className="subtotal-box">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket?.length} items):
                        <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>    
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <button onClick={goPay}>Procceed to payment</button>
        </div>
    )
}

export default Subtotal