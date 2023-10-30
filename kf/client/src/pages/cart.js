import React from "react";
import Button from 'react-bootstrap/Button';

import BasicNav from '../componants/navbar'
import CartComp from '../componants/cartcomp';
import { useState, useEffect } from "react";

function Cart() {

    const [cartOrder, setCartOrder] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const toOrders = async () => {
        try {
            const cart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
            const username = localStorage.getItem("loggedUser");

            // Assuming you have an API endpoint for creating orders
            const response = await fetch('http://localhost:5000/api/addOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: username, // Provide a name for the order
                    total: cartTotal,
                    details: cart,
                }),
            });

            if (response.ok) {
                // Order created successfully, clear the cart
                sessionStorage.removeItem("cartStorage");
                setUpdateProducts(true);
                
            } else {
                console.error('Failed to create order');
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }

    // var cart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
    var cartTotal = sessionStorage.getItem("cartPrice")
    var total = 0;
    useEffect(() => {
        
        let cart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
        console.log(cart)
        let renderProducts = cart.map((item) => <CartComp key={item.productId} productId={item.productId} name={item.name} price={item.price} desc={item.desc} stock={item.stock}  image={item.image} editRender={setUpdateProducts} />);
        for(let i = 0; i < cart.length; i++){
            total += cart[i].price;
        }
        sessionStorage.setItem("cartPrice", total);
        setCartOrder(renderProducts);
        setUpdateProducts(false);

    }, [updateProducts])

    //TODO: 
        //Add functionality to change amount of items

    return (
        <>
            <BasicNav />
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <h1 style={{ textAlign: "center", margin: "2%" }}>My Cart</h1>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                        {cartOrder}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><Button variant="warning" onClick={toOrders} style={{ width: "95%", marginTop: "2%" }}>Check Out</Button></td>
                            <td></td>
                            <td style={{ border: "solid black 2px", padding: "0.5%" }}><h3>R {cartTotal}.00</h3></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>


        </>
    )
}

export default Cart;