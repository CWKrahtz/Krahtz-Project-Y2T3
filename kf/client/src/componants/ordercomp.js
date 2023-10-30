import Button from 'react-bootstrap/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom'

function OrderComp(props) {

    let navigate = useNavigate();

    //IMAGE URL
    const imgURL = "http://localhost:5000/productImages/" + props.image;

    const toProduct = () => {
        sessionStorage.setItem('productId', props.productId)
        navigate('/ProductPage')
    }
    
    return (
        <>
            <tr style={{width: "100%"}}>
                <td><img src={imgURL} style={{width: "100px", height: "100px", marginLeft:"33%"}}/></td>
                <td><div style={{marginLeft: "5%"}}><h5>{props.name}</h5></div></td>
                <td><div style={{marginLeft: "10%"}}> R{props.price} </div></td>
                <td></td>
            </tr>
        </>
    );
}

export default OrderComp;