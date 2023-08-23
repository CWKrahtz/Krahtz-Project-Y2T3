import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AdminCards from "../componants/adminCards";
import { useState, useEffect } from "react";
import Axios from 'axios'
import Cards from '../componants/Cards'

function Admin() {

    const [product, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDesc, setProductDesc] = useState();
    const [variationC1, setVariationC1] = useState();
    const [variationC2, setVariationC2] = useState();
    const [variationC3, setVariationC3] = useState();

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
        .then(res => {
            let productData = res.data;
            console.log(productData.length);
            let slicedArray =[];
            slicedArray = productData.slice(0, 6);
            //create Card component for it to work. Ask How to do it.
            let renderProducts = slicedArray.map((item) => <Cards key={item._id} stock={item.stock} name={item.name} price={item.price} desc={item.description} />);
            console.log(renderProducts);
            setProducts (renderProducts);
            setUpdateProducts(false);
        })
        .catch( err => console.log(err))
    }, [updateProducts])


    const getName = (e) => {
        let value = e.target.value;
        setProductName(value);
    }
    const getPrice = (e) => {
        let value = +e.target.value;
        setProductPrice(value);
    }
    const getDesc = (e) => {
        let value = e.target.value;
        setProductDesc(value);
    }
    const getColor1 = (e) => {
        let value = +e.target.value;
        setVariationC1(value);
    }
    const getColor2 = (e) => {
        let value = +e.target.value;
        setVariationC2(value);
    }
    const getColor3 = (e) => {
        let value = +e.target.value;
        setVariationC3(value);
    }

    const addProduct = (e) => {
        let stock = variationC1 + variationC2 + variationC3;

        let payload = {
            name: productName,
            price: productPrice,
            stock: stock,
            description: productDesc,
            variations: {
                color1: variationC1,
                color2: variationC2,
                color3: variationC3
            }
        }

        Axios.post("http://localhost:5000/api/newProducts", payload)
        .then((res) => {
            if(res){
                console.log("Item Added");
                setUpdateProducts(true);
                console.log(payload)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        
        
        document.getElementById("formProductName").value = "";
        document.getElementById("formProductPrice").value = "";
        document.getElementById("formProductDesc").value = "";
        document.getElementById("formProductC1").value = "";
        document.getElementById("formProductC2").value = "";
        document.getElementById("formProductC3").value = "";
        
    }


    return (
        <>
            <Form style={{ marginTop: "2%", marginBottom: "2%", width: "50%", marginLeft: "auto", marginRight: "auto" }}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Product Name" id="formProductName" onChange={getName}/>
                </Form.Group>
                {/* onChange --> Is it in the Form.Group or the Form.Control */}
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Product Price" id="formProductPrice" onChange={getPrice}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Product Description" id="formProductDesc" onChange={getDesc}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color One</Form.Label>
                    <Form.Control type="number" placeholder="In Stock: Color One" id="formProductC1" onChange={getColor1}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color Two</Form.Label>
                    <Form.Control type="number" placeholder="In Stock: Color Two" id="formProductC2" onChange={getColor2}/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Color Three</Form.Label>
                    <Form.Control type="number" placeholder="In Stock: Color Three" id="formProductC3" onChange={getColor3}/>
                </Form.Group>
                <Button variant="warning"  onClick={addProduct} style={{width: "100%", marginTop: "2%", marginBottom: "2%"}}>
                    Submit
                </Button>
            </Form>
            
            <div className="row row-cols-1 row-cols-md-5 g-4" style={{ margin: "5%"}}> {/* Determine how many I want to display --> row-cols-md-5*/}
                {/* Display cards here */}
                {product}
                {/* <AdminCards /> */}
            </div>
            
        </>
    )
}

export default Admin;