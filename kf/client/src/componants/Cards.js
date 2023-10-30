import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom'
import EditProduct from '../componants/EditProduct'

const Cards = (props) => {

    const [modelArea, setModel] = useState()

    let navigate = useNavigate();

    const toProduct = () => {
        sessionStorage.setItem('productId', props.productId)
        navigate('/ProductPage')
    }

    const edit = () => {
        setModel(<EditProduct
            close={setModel}
            id={props.productId}
            name={props.name}
            desc={props.desc}
            price={props.price}
            stock={props.stock}
            editRender={props.editRender}
        />)
    }

    //IMAGE URL
    const imgURL = "http://localhost:5000/productImages/" + props.image;

    const deleteItem = () => {
        console.log(props.productId)

        if (window.confirm("Are you sure you want to delete: " + props.name) === true) {

            axios.delete('http://localhost:5000/api/deleteProduct/' + props.productId)
                .then((res) => {
                    console.log('item Deleted')
                    // alert(props.name + ", is deleted")
                    props.editRender(true)
                })
                .catch(err => console.log(err))
        }
    }

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
                    <Button id="btnView" variant="warning" onClick={toProduct} style={{ margin: "2%", background: "white" }}>View</Button>

                </div>
                <div className='card-footer' style={{ background: "white" }}>
                    <Button id="btnUpdate" variant="warning" onClick={edit} style={{ margin: "2%" }}>Update</Button>
                    <Button id="btnDelete" variant="danger" onClick={deleteItem} style={{ margin: "2%" }}>Delete</Button>
                </div>
                {modelArea}
            </div>
        </div>
    )
}

export default Cards;