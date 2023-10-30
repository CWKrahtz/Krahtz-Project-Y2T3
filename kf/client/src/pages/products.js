import React from "react";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import Axios from 'axios'


import ProductCards from "../componants/productCards"
import BasicNav from "../componants/navbar";

function Products() {

    const [product, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                let slicedArray = [];
                slicedArray = productData.slice(0, 20);
                let renderProducts = slicedArray.map((item) => <ProductCards key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} image={item.image} editRender={setUpdateProducts} />);
                setProducts(renderProducts);
                setUpdateProducts(false);
            })
            .catch(err => console.log(err))
    }, [updateProducts])

    return (
        <div>
            {/* Product Cards */}
            <BasicNav />
            <div>
                <h2 style={{ backgroundColor: "#FFC107", textAlign: "center", padding: "0.5%" }}>Product Page</h2>
                <Form.Select aria-label="Default select example">
                    <option>Sort Products by:</option>
                    <option value="1">T-Shirts</option>
                    <option value="2">Price (low - high) </option>
                    <option value="3">New</option>
                </Form.Select>
                <div className="row row-cols-1 row-cols-md-5 g-4" style={{ margin: "1%" }} > {/* Determine how many I want to display --> row-cols-md-5*/}
                    {product}
                </div>
            </div>
        </div>
    )
}

export default Products;