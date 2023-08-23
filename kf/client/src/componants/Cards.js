import Button from 'react-bootstrap/Button';
import React ,{ useState } from 'react';
import { Axios } from 'axios';
// import POP1 from '../images/pop1.webp'
// import POP2 from '../images/pop2.jpg'
// import POP3 from '../images/pop3.jpg'
// import POP4 from '../images/pop4.jpg'

// import Form from 'react-bootstrap/Form';

const Cards = (props) => {

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 name="name" className="card-title">{props.name}</h5>
                    {/* <p class="card-text">{props.desc}</p> */}
                    {/* <p class="card-text">Price</p> */}
                    <h3>R{props.price}</h3>
                    <p class="card-text">Availability: {props.stock}</p>
                    <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                </div>
            </div>
        </div>
    )
}

export default Cards;