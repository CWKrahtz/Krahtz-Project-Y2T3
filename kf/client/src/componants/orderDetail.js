import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BasicNav from "../componants/navbar";
import OrderComp from './ordercomp';

function OrderDetail() {

    const [order, setOrder] = useState();
    const [updateOrders, setUpdateOrders] = useState(false);

    const orderId = sessionStorage.getItem("orderId")
    console.log(orderId)

    useEffect(() => {
        axios.get(`http://localhost:5000/orderDetail/${orderId}`)
            .then(res => {
                let orderData = res.data.details;
                console.log(orderData);
                let renderOrders = orderData.map((item) => <OrderComp key={item._id} productId={item._id} name={item.name} price={item.price}  image={item.image} editRender={setUpdateOrders} />);
                setOrder(renderOrders);
                setUpdateOrders(false);
            })
            .catch(err => console.log(err));
    }, [updateOrders])

    let navigate = useNavigate();

    const toOrders = () => {
        navigate('/order')
    }

    return (
        <>
            <BasicNav />
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <h1 style={{ textAlign: "center", margin: "2%" }}>Order: { orderId }</h1>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <td><h5>Image</h5></td>
                            <td><h5>Name</h5></td>
                            <td><h5>Price</h5></td>
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                        {order}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><Button variant="warning" onClick={toOrders} style={{ width: "95%", marginTop: "2%" }}>Back</Button></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default OrderDetail