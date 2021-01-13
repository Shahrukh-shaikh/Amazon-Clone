import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import { Button } from '@material-ui/core';


function CheckoutProduct({ id, image, title, price, rating, hideButton}) {
    
    const [{ basket }, dispatch] = useStateValue ();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        
    }

    return (
       
        <div className="checkoutproduct">
             <img className="checkoutProduct__image" src={image} 
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                
                </div>
                {!hideButton && (
                  
                  <Button onClick={removeFromBasket}>Remove from Cart</Button>
                    
                    
                )}
                
            </div>
           
        </div>
       
    )
}

export default CheckoutProduct
