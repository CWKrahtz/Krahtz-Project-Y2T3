import Button from 'react-bootstrap/Button';
import POP1 from '../images/pop1.webp'
import POP2 from '../images/pop2.jpg'
import POP3 from '../images/pop3.jpg'
import POP4 from '../images/pop4.jpg'

function SaleCards() {
    return (
        <div style={{marginTop: "2%", marginBottom: "2%", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            <h2 style={{backgroundColor: "#FFC107", borderRadius:"10px", padding:"1%"}}>On Promotion</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4" style={{marginTop: "0.5%"}}>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP1} className="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div className="card-body">
                            <h5 className="card-title">Iron Gods SWOLE Workout Hoodie</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP2} className="card-img-top" alt="Palm Springs Road" />
                        <div className="card-body">
                            <h5 className="card-title">4F Men Cap CAM009</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <br/>
                            <br/>
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP3} className="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Track Suit Men Sportswear</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <br/>
                            <br/>
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={POP4}   className="card-img-top" alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Fitness Long Sleeve Men Running Long Sleeve Men Sport T Shirt</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleCards;