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
            
            <div class="row row-cols-1 row-cols-md-5 g-4" style={{ marginTop: "0.5%" }}> {/* Determine how many I want to display --> row-cols-md-5*/}
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">4F Men Cap CAM009</h5>
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
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Track Suit Men Sportswear</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br />
                            <br />
                            <Form.Label >Quantity</Form.Label>
                            <Form.Range />
                            <Button variant="warning" style={{ marginRight: "2%" }}>Update</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
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