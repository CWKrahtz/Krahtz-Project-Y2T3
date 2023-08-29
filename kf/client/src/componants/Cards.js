import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Axios  from 'axios';
import { useNavigate } from 'react-router-dom'
import EditProduct from '../componants/EditProduct'

// import POP1 from '../images/pop1.webp'
// import POP2 from '../images/pop2.jpg'
// import POP3 from '../images/pop3.jpg'
// import POP4 from '../images/pop4.jpg'

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
            varOne={props.varOne}
            varTwo={props.varTwo}
            varThree={props.varThree}
            editRender={props.editRender}
        />)
    }

    const deleteItem = () => {
        console.log(props.productId)

        if (window.confirm("Are you sure you want to delete: " + props.name) === true) {

            Axios.delete('http://localhost:5000/api/deleteProduct/' + props.productId)
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
                <div className='card-header' style={{ background: "white", height: "50%" }}>
                    <h5 name="name" className="card-title" >{props.name}</h5>
                </div>
                <div className="card-body">
                    {/* <p class="card-text">{props.desc}</p> */}
                    {/* <p class="card-text">Price</p> */}
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