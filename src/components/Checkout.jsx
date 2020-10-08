import React from 'react'
import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './context/StateProvider'
import Subtotal from './Subtotal'
import Grid from '@material-ui/core/Grid';

function Checkout(){
    const [{basket, user}, dispatch] = useStateValue()

    return(
        <Grid container className="checkout-box">
            <Grid item lg={9} xs={12} className="checkout-left">
                <div>
                    <h3>Hi, {user?.email}</h3>
                    <h2 className="checkout-title">Basket shopping</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            titulo={item.titulo}
                            content={item.content}
                            imagen={item.imagen}
                            price={item.price}
                        />
                    ))}
                </div>
            </Grid>
            <Grid item lg={3} xs={12} className="checkout-right">
                <Subtotal />
            </Grid>
        </Grid>
    )
}

export default Checkout