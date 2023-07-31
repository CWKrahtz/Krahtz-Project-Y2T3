import Button from 'react-bootstrap/Button';
import POP1 from '../images/pop1.webp'
import POP2 from '../images/pop2.jpg'
import POP3 from '../images/pop3.jpg'
import POP4 from '../images/pop4.jpg'

function SaleCards() {
    return (
        <div style={{marginTop: "2%", marginBottom: "2%", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
            <h2 style={{backgroundColor: "lightgrey", borderRadius:"10px"}}>On Promotion</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4" style={{marginTop: "0.5%"}}>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP1} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Men Sports Shirt, Man Gym Fitness T-shirt</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="primary" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-primary">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP2} class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body">
                            <h5 class="card-title">Men's Gel-Noosa Tri 14 Triathlon Running Shoes - Diva</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="primary" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-primary">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP3} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Salomon XA Twinskin Mens Short</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <br/>
                            <Button variant="primary" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-primary">Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={POP4}   class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title"> Get More Photos View Similar Full Sleeve Polyester Gym Jackets For Men</h5>
                            {/* <p class="card-text">Product Detail</p> */}
                            <Button variant="primary" style={{marginRight: "2%"}}>View</Button>
                            <Button variant="outline-primary">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleCards;