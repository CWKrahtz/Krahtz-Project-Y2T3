import Button from 'react-bootstrap/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom'

function CartComp(props) {

    let navigate = useNavigate();

    

    const toProduct = () => {
        sessionStorage.setItem('productId', props.productId)
        navigate('/ProductPage')
    }

    //IMAGE URL
    const imgURL = "http://localhost:5000/productImages/" + props.image;

    const removeFromCart = () => {
        var listOfCart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
        console.log(listOfCart);
        var selecetedItem = props.productId;
        console.log(selecetedItem);
        for( let i = 0; i < listOfCart.length; i++){
            
            if (selecetedItem == listOfCart[i].productId){
                delete listOfCart[i];
                console.log(listOfCart[i]);
                for (let x = i; x < listOfCart.length; x++){
                    listOfCart[x] = listOfCart[x + 1];
                }
                listOfCart.pop();
                console.log(listOfCart);
                sessionStorage.setItem("cartStorage", JSON.stringify(listOfCart))
                props.editRender(true)
            }
        }
    }

    return (
        <>
            <tr style={{width: "100%"}}>
                <td><img src={imgURL} style={{width: "100px", height: "100px", marginLeft:"33%"}}/></td>
                <td><div style={{marginLeft: "5%"}}><h5>{props.name}</h5></div></td>
                <td><div style={{marginLeft: "10%"}}> R{props.price} </div></td>
                <td>
                    <Button id="btnView" variant="warning" onClick={toProduct} style={{ margin: "2%" }}>View</Button>
                    <Button variant="danger" onClick={removeFromCart} style={{ margin: "2%" }}>Remove</Button>
                </td>
            </tr>
        </>
    );
}

export default CartComp;