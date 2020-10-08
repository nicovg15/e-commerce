import React from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from './context/StateProvider'
import EuroIcon from '@material-ui/icons/Euro';

function CheckoutProduct({id, price, titulo, content, imagen, hiddenButton}){
    const [{basket, user}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            titulo: titulo,
            imagen: imagen,
            content: content,
            price: price
        })
    }
    
    return(
        <div className="checkoutProduct-box">
            <img className="checkoutProduct-image" src={imagen} alt=""/>
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{titulo}</p>
                <p className="checkoutProduct-price">
                    <small className="checkoutProduct-price-euro"><EuroIcon /></small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct-content">{content}</p>
                {!hiddenButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct