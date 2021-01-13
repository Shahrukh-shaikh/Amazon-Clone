import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";

function Product({ id, title, price, rating, image}) {
    
    const [ { basket }, dispatch] = useStateValue();

    

    const addToBasket = () => {

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });

    };
    
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                
            </div>
        </div>
        <img src={image} alt=""/>
        <Button onClick={addToBasket}>Add to Cart</Button>
        
    </div>
    )
}

export default Product
