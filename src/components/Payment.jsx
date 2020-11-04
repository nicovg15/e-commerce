import React, {useEffect, useState, useContext} from 'react'
import '../css/Payment.css'
import { useStateValue } from './context/StateProvider'
import {Link, useHistory} from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './context/reducer'
import {db} from './firebase/firebase'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import newContext from './context/newContext'


function Payment() {
    const {newBasket, setNewBasket} = useContext(newContext)
    const [{basket,user}, dispatch] = useStateValue()
    const history = useHistory()
    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // WHENEVER THE BASKET CHANGES WILL MAKE A NEW REQUEST
        // AND WILL UPDATE THE STRIPE SECRET FOR THE CORRECT AMOUNT
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `https://us-central1-acsonsound-d4340.cloudfunctions.net/api/payments/create?total=${getBasketTotal(basket)*100}`,
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {            
            // paymentIntent = payment confirmation
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({basket: basket,amount: paymentIntent.amount,created: paymentIntent.created})
            

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/done')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    }

    return (
        <div className="payment-box ">
           <div className="payment-container">
               <h1>Checkout (<Link to="/checkout">{newBasket}  items</Link>)</h1>
                <Grid container className="payment-section">
                    <Grid item xs={12} lg={3} className="payment-title">
                        <h3>Payment Method</h3>
                    </Grid>
                    <Grid item xs={12} lg={9} className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment-priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <div>
                                        <h3>You have to be logged in to pay</h3>
                                        <h5>This is just a demo. So just add 42 consecutively as many times as you can.</h5>
                                        </div>
                                    )}
                                    decimalScale={2}
                                    value={70}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Pay now"}</span>
                                </button>
                            </div> 
                            {error && <div>{error}</div>}
                        </form>
                    </Grid>
                </Grid>
            </div> 
        </div>
    )
}

export default Payment
