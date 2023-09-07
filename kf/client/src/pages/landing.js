import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios'

import BasicCarousel from '../componants/carousel';
import NewCards from '../componants/newCards';
import SaleCards from '../componants/saleCards';
import BasicNav from '../componants/navbar'

function Landing() {

    const [product, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const [productSale, setProductsSale] = useState();
    const [updateProductsSale, setUpdateProductsSale] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                let slicedArray = [];
                slicedArray = productData.slice(0, 4);
                let renderProducts = slicedArray.map((item) => <NewCards key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} varOne={item.variations.color1} varTwo={item.variations.color2} varThree={item.variations.color3} image={item.image} editRender={setUpdateProducts} />);
                setProducts(renderProducts);
                setUpdateProducts(false);
            })
            .catch(err => console.log(err))
    }, [updateProducts])

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                let slicedArray = [];
                slicedArray = productData.slice(4, 8);
                let renderProducts = slicedArray.map((item) => <SaleCards key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} varOne={item.variations.color1} varTwo={item.variations.color2} varThree={item.variations.color3} image={item.image} editRender={setUpdateProducts} />);
                setProductsSale(renderProducts);
                setUpdateProductsSale(false);
            })
            .catch(err => console.log(err))
    }, [updateProductsSale])

    return (
        <div>
            <BasicNav />
            <BasicCarousel />
            {/* New Cards */}
            <div>
                <h2 style={{ backgroundColor: "#FFC107", textAlign: "center", padding: "0.5%" }}>New Products</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4" style={{ margin: "1%" }} > {/* Determine how many I want to display --> row-cols-md-5*/}
                    {product}
                </div>
            </div>

            {/* Sale Cards */}
            <div>
                <h2 style={{ backgroundColor: "#FFC107", textAlign: "center", padding: "0.5%" }}>On Promotion</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4" style={{ margin: "1%"}} > {/* Determine how many I want to display --> row-cols-md-5*/}
                    {productSale}
                </div>
            </div>


        </div>
    )
}

export default Landing;