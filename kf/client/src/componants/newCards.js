import Button from 'react-bootstrap/Button';
import NT1 from '../images/new1.jpg'
import NT2 from '../images/new2.jpg'
import NT3 from '../images/new3.webp'
import NT4 from '../images/new4.webp'

function NewCards() {
    return (
        <div style={{marginTop: "2%", marginBottom: "2%", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            <h2 style={{backgroundColor: "#FFC107", borderRadius:"10px", padding:"1%"}}>New Products</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4" style={{marginTop: "0.5%"}}>
                <div className="col">
                    <div className="card h-100">
                        <img src={NT1} className="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div className="card-body">
                            <h5 className="card-title">Men Sports Shirt, Man Gym Fitness T-shirt</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={NT2} className="card-img-top" alt="Palm Springs Road" />
                        <div className="card-body">
                            <h5 className="card-title">Men's Gel-Noosa Tri 14 Triathlon Running Shoes - Diva</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={NT3} className="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Salomon XA Twinskin Mens Short</h5>
                            {/* <p className="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="warning" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-warning">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={NT4}   className="card-img-top" alt="Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">Full Sleeve Polyester Gym Jackets For Men</h5>
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

export default NewCards;