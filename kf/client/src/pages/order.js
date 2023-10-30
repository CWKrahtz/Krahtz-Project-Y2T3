import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import BasicNav from '../componants/navbar'
import { useNavigate } from 'react-router-dom'

function Order() {
    const [orders, setOrders] = useState([]);
    const [cartOrder, setCartOrder] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [updateProducts, setUpdateProducts] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allOrders')
            .then(res => {
                let ordersData = res.data;
                setOrders(ordersData);
                console.log(ordersData)
            })
            .catch(err => console.log(err))
    }, [setOrders])

    const showOrderDetails = (orderId) => {
        // Implement your logic to show order details based on orderId
        console.log("Showing details for order ID:", orderId);
        sessionStorage.setItem("orderId", orderId);
        navigate('/orderDetail')
    };

    const clearOrder = (orderId) => {
        // Implement your logic to dispatch/clear the order by deleting it from the database
        Axios.delete(`http://localhost:5000/delete/${orderId}`)
            .then(res => {
                console.log("Order dispatched!");
                // You may also want to update the state to reflect the changes
                setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
            })
            .catch(err => console.log(err));
    };

    return (
        <>
        <BasicNav />
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <h1 style={{ textAlign: "center", margin: "2%" }}>Orders</h1>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Name</th>
                            <th>Total</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%" }}>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>R {order.total}.00</td>
                                <td>
                                    <Button variant="info" onClick={() => showOrderDetails(order._id)}>
                                        View Details
                                    </Button>
                                    <Button variant="warning" onClick={() => clearOrder(order._id)} style={{ marginLeft: "10px" }}>
                                        Dispatch
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Order;
