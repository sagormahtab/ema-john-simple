import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const handleRemoveProduct = (productKey) => {
        console.log("Remove clicked", productKey);
        //removing the products which are clicked on remove button
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        //taking the key'th indices value from the savedCart object to an array. If we write object[key] then we get the value of the key.
        //const counts = productKeys.map(key => savedCart[key]);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            //we are assigning a new property named quantity to the object product.
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    },[])
    let thankYou;
    if(orderPlaced){
    thankYou = <img src={happyImage} alt=""/>
}
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        removeProduct = {handleRemoveProduct}
                        key = {pd.key}
                        product={pd}></ReviewItem>)
                }
                {
                    thankYou
                }
                {
                    !cart.length && <h1>Your cart is empty. <a href="/shop">Keep shopping</a></h1>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                    {
                        auth.user ?
                        <button className="main-btn">Proceed Checkout</button>
                        :
                        <button className="main-btn">Login to Proceed</button>
                    }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;