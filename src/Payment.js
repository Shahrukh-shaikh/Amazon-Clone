import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { db } from './firebase';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios';

function Payment() {



    const [{basket , user } , dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();

    }, [basket])

    console.log('The secret is >>>', clientSecret)

    console.log('user' , user)
   

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })
              

                setSucceeded(true);
                setError(null)
                setProcessing(false)

                dispatch({
                    type: 'EMPTY_BASKET'
                })

                history.replace('/orders')

              
        })

    }

    const handlechange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
        //setError(event.error ? event.error.message: "");

    }
    


    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout ({<Link to="/checkout">{basket?.length} items</Link>})
                </h1>
                <div className="payment_Section">
                        <div className="payment__title">
                            <h3>Deievery address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>123 React Lane</p>
                            <p>Los Angeles</p>
                        </div>
                </div>

                <div className="payment_Section">
                        <div className="payment__title">
                            <h3>Review item and Deievery address</h3>
                        </div>
                        <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_Section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__detail">
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handlechange}/>
                                    <div className="payment__priceContainer">
                                    <CurrencyFormat
                                            renderText={(value) => (
                                                <h3>Order Total: {value}</h3>
                                            )
                                            }
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                            />

                                            <button disabled={processing || disabled || succeeded}>
                                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                            </button>

                                    </div>
                                    {error && <div>{error}</div>}
                                </form>
                        </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Payment
