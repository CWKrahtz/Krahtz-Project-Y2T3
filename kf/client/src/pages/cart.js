import React from "react";
import Button from 'react-bootstrap/Button';

import BasicNav from '../componants/navbar'
import CartComp from '../componants/cartcomp';
import { useState, useEffect } from "react";
import { toFormData } from "axios";

function Cart() {

    const [cartOrder, setCartOrder] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const displayCart = () => {
        let cart = sessionStorage.getItem("cartStorage");
        console.log(JSON.parse(cart))
    }

    // var cart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
    var cartTotal = sessionStorage.getItem("cartPrice", 0)
    var total = 0;
    useEffect(() => {
        
        let cart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
        console.log(cart)
        let renderProducts = cart.map((item) => <CartComp key={item.productId} productId={item.productId} name={item.name} price={item.price} desc={item.desc} stock={item.stock} varOne={item.varOne} varTwo={item.varTwo} varThree={item.varThree} image={item.image} editRender={setUpdateProducts} />);
        for(let i = 0; i < cart.length; i++){
            total += cart[i].price;
        }
        sessionStorage.setItem("cartPrice", total);
        setCartOrder(renderProducts);
        setUpdateProducts(false);
    }, [updateProducts])

    //TODO: 
    //Remove an item from cart
        //Create aray and remove from array and send back to sessionStorage
            //Done, remove from aray and session Storage
        //Update cart Page after removed from sessionStorage
            //DOne, Update after button press

    //Send to database or sessioStorage
        //Prefered method?
        //Does it matter if we use sessionStorage or DB?

    //Display order page
        //Previous questions should answer this wquestion

    //Remove from database or sessionStorage
        //Think I can do this one...

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
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                        {cartOrder}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><Button variant="warning" onClick={displayCart} style={{ width: "95%", marginTop: "2%" }}>Check Out</Button></td>
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