import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const user = useContext(UserContext)
    // console.log(user);
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 30)
        shipping = 0;
    else if(total>15)
        shipping = 4.99;
    else if(total>0)
        shipping = 15.99;

    let tax = (total * 0.15).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    
    return (
        <div>
            <h4>Order summary: </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total.toFixed(2)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
            <p>{}</p>
        </div>
    );
};

export default Cart;