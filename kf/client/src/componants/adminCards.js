import Button from 'react-bootstrap/Button';
import POP1 from '../images/pop1.webp'
import POP2 from '../images/pop2.jpg'
import POP3 from '../images/pop3.jpg'
import POP4 from '../images/pop4.jpg'

import Form from 'react-bootstrap/Form';

function AdminCards() {
    return (
        <div style={{ marginTop: "2%", marginBottom: "2%", width: "90%", marginLeft: "auto", marginRight: "auto" }}>
            <Form.Select aria-label="Default select example">
                <option>Sort Products by:</option>
                <option value="1">T-Shirts</option>
                <option value="2">Price (low - high) </option>
                <option value="3">New</option>
                <option value="3">Quantity</option>
            </Form.Select>
            
            <div className="row row-cols-1 row-cols-md-5 g-4" style={{ marginTop: "0.5%" }}> {/* Determine how many I want to display --> row-cols-md-5*/}
                <div className="col">
                    <div className="card h-100">
                        <img src={POP1} className="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div className="card-body">
                            <h5 className="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP2} className="card-img-top" alt="Palm Springs Road" />
                        <div className="card-body">
                            <h5 className="card-title">4F Men Cap CAM009</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP3} className="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP4} className="card-img-top" alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AdminCards;