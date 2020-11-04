import React, {useContext} from 'react'
import '../css/Product.css'
import { useStateValue } from './context/StateProvider'
import EuroIcon from '@material-ui/icons/Euro';
import {db} from './firebase/firebase'

function Product({id, price, titulo, content, imagen}) {
    const [{basket, user}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                titulo: titulo,
                imagen: imagen,
                content: content,
                price: price
            }
        })
        
        db.collection('users').doc(user?.uid).collection('basket').add({productId: id, title: titulo, cont: content, img: imagen, price: price})
    } 

    return (
        <div className="product-box">
            <img src={imagen}/>
            <div className="product-info">
                <div className="product-title-price">
                    <h3>{titulo}</h3>
                    <p className="product-price"> <small><EuroIcon /></small><strong>{price}</strong></p>
                </div>
                <p className="product-content">{content}</p>
                <div className="product-button-box">
                    <button onClick={addToBasket}>ADD TO BASKET</button>
                </div>
            </div>
        </div>
    )
}

export default Product
