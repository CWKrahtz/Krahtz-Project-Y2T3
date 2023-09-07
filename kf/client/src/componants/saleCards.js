import Button from 'react-bootstrap/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function SaleCards(props) {
   
    let navigate = useNavigate();

    const toProduct = () => {
        sessionStorage.setItem('productId', props.productId)
        navigate('/ProductPage')
    }

    //Add item to cart
    const updateCart = () => {
        var listOfCart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
        
        if (listOfCart == null) {
            listOfCart.push(props)
        } else {
            listOfCart.push(props)
        }

        sessionStorage.setItem("cartStorage", JSON.stringify(listOfCart))       
    }

    //IMAGE URL
    const imgURL = "http://localhost:5000/productImages/" + props.image;

    return (
        <div className="col">
            <div className="card h-100" >
                <img variant="top" src={imgURL} />
                <div className='card-header' style={{ background: "white", height: "50%" }}>
                    <h5 name="name" className="card-title" >{props.name}</h5>
                </div>
                <div className="card-body">
                    <h3>R{props.price}</h3>
                    <p className="card-text">Availability: {props.stock}</p>
                </div>
                <div className='card-footer' style={{ background: "white" }}>
                    <Button id="btnView" variant="warning" onClick={toProduct} style={{ margin: "2%" }}>View</Button>
                    <Button variant="outline-warning" onClick={updateCart} style={{ margin: "2%" }}>Add Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default SaleCards;