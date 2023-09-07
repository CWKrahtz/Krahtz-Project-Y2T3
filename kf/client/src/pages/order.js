import React from "react";
import Button from 'react-bootstrap/Button';

import BasicNav from '../componants/navbar'
import OrderComp from '../componants/ordercomp';
import { useState, useEffect } from "react";

function Order() {

    const [cartOrder, setCartOrder] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const clearOrder = () => {
        sessionStorage.removeItem("orderStorage")

        setUpdateProducts(true);
    }

    var cartTotal = sessionStorage.getItem("orderPrice")
    var total = 0;
    useEffect(() => {
        
        let cart = JSON.parse(sessionStorage.getItem("orderStorage")) || [];
        console.log(cart)
        let renderProducts = cart.map((item) => <OrderComp key={item.productId} productId={item.productId} name={item.name} price={item.price} desc={item.desc} stock={item.stock} varOne={item.varOne} varTwo={item.varTwo} varThree={item.varThree} image={item.image} editRender={setUpdateProducts} />);
        for(let i = 0; i < cart.length; i++){
            total += cart[i].price;
        }
        sessionStorage.setItem("orderPrice", total);
        setCartOrder(renderProducts);
        setUpdateProducts(false);

    }, [updateProducts])

    return (
        <>
            <BasicNav />
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <h1 style={{ textAlign: "center", margin: "2%" }}>Orders</h1>
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
                            <td><Button variant="warning" onClick={clearOrder} style={{ width: "95%", marginTop: "2%" }}>Dispach</Button></td>
                            <td style={{ border: "solid black 2px", padding: "0.5%" }}><h3>R {cartTotal}.00</h3></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>


        </>
    )
}

export default Order;