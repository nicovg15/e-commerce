import React, { useEffect, useState, useContext } from 'react'
import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './context/StateProvider'
import Subtotal from './Subtotal'
import Grid from '@material-ui/core/Grid';
import { firestore } from 'firebase'
import newContext from './context/newContext'

function Checkout(){
    const {newBasket, setNewBasket} = useContext(newContext)
    const [{basket, user}, dispatch] = useStateValue()
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState()
    
    useEffect(() => {
        if(user){
            firestore().collection('users').doc(user?.uid).collection('basket').get().then(snapshot => {
                setProducts(snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id} }))
                setNewBasket(snapshot.size)
            })        
        }
    }, [{basket, user}])

    return(
        <Grid container className="checkout-box">
            <Grid item lg={9} xs={12} className="checkout-left">
                <div>
                    <h3>Hi, {user?.email}</h3>
                    <h2 className="checkout-title">Basket shopping</h2>
                    {products.map((product, index)=> (
                        <CheckoutProduct      
                            key={index}
                            id={product.id}
                            titulo={product.title}
                            price={product.price}
                            content={product.cont}
                            imagen={product.img}
                        />
                    ))}
                </div>
            </Grid>
            <Grid item lg={3} xs={12} className="checkout-right">
                <Subtotal productsPrice={products}/>
            </Grid>
        </Grid>
    )
}

export default Checkout