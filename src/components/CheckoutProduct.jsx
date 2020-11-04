import React, {useEffect} from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from './context/StateProvider'
import EuroIcon from '@material-ui/icons/Euro';
import {db} from './firebase/firebase'
import { firestore } from 'firebase';

function CheckoutProduct({id, price, titulo, content, imagen, hiddenButton}){
    const [{basket, user}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        firestore().collection('users').doc(user?.uid).collection('basket').doc(id.toString()).delete();
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