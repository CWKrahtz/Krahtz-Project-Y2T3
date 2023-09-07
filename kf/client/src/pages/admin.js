import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import AdminCards from "../componants/adminCards";
import { useState, useEffect } from "react";
import Axios from 'axios'
import Cards from '../componants/Cards'
import BasicNav from '../componants/navbar'

function Admin() {

    const [product, setProducts] = useState();
    const [updateProducts, setUpdateProducts] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/allProducts')
            .then(res => {
                let productData = res.data;
                let slicedArray = [];
                slicedArray = productData.slice(0, 2);
                let renderProducts = productData.map((item) => <Cards key={item._id} productId={item._id} name={item.name} price={item.price} desc={item.description} stock={item.stock} varOne={item.variations.color1} varTwo={item.variations.color2} varThree={item.variations.color3} image={item.image} editRender={setUpdateProducts} />);
                setProducts(renderProducts);
                setUpdateProducts(false);
            })
            .catch(err => console.log(err))
    }, [updateProducts])

    let defaultFormVals = ["name", "price", "description", "varOne", "varTwo", "varThree"];

    const [formValues, setFormValues] = useState(defaultFormVals);

    const [imageName, setImageName] = useState("Name of file will appear here")
    const [productImage, setProductImage] = useState()

    const getValues = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const getImage = (e) => {

        //This is where Multer comes in
        let imagefile = e.target.files[0];
        setProductImage(imagefile);

        let value = e.target.value;
        let imageName = value.substring(12);
        setImageName(imageName);

        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('imgPrev');
            output.src = reader.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const addProduct = (e) => {
        // e.preventDefault();

        const payloadData = new FormData();

        var stock = +formValues['varOne'] + +formValues['varTwo'] + +formValues['varThree']

        let payload = {
            name: formValues['name'],
            price: +formValues['price'],
            stock: stock,
            description: formValues['description'],
            variations: {
                color1: +formValues['varOne'],
                color2: +formValues['varTwo'],
                color3: +formValues['varThree']
            }
        }

        payloadData.append("information", JSON.stringify(payload));
        payloadData.append("image", productImage);

        Axios.post("http://localhost:5000/api/newProducts", payloadData)
            .then((res) => {
                if (res) {
                    console.log("Item Added");
                    setUpdateProducts(true);
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <BasicNav />
            <Form onSubmit={addProduct} style={{ marginTop: "2%", width: "25%", marginLeft: "auto", marginRight: "auto" }}>

                <Form.Group controlId="formFile" className="mb-3" style={{ display: "inline-block", width: "100%" }}>
                    {/* <button variant="danger" componant="label" style={{ width: "100%", marginBottom: "2%" }}>
                        Upload Image <input type="file" style={{ width: "100%"}} hidden onChange={getImage}/>
                    </button> */}
                    <Form.Control type="file" style={{ marginBottom: "2%" }} onChange={getImage} />
                    <div >
                        <p style={{ float: "left", width: "75%" }}>{imageName}</p>
                        <img id="imgPrev" style={{ backgroundColor: "lightgrey", height: "100px", width: "100px", float: "right" }} />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Product Name" id="formProductName" onChange={getValues} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="number" placeholder="R" id="formProductPrice" onChange={getValues} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} placeholder="Text Here..." id="formProductDesc" onChange={getValues} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color One</Form.Label>
                    <Form.Control name="varOne" type="number" placeholder="Amount" id="formProductC1" onChange={getValues} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Color Two</Form.Label>
                    <Form.Control name="varTwo" type="number" placeholder="Amount" id="formProductC2" onChange={getValues} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Color Three</Form.Label>
                    <Form.Control name="varThree" type="number" placeholder="Amount" id="formProductC3" onChange={getValues} />
                </Form.Group>
                <Button variant="warning" type="submit" style={{ width: "100%", marginTop: "2%", marginBottom: "2%" }}>
                    Submit
                </Button>
            </Form>

            <div className="row row-cols-1 row-cols-md-5 g-4" style={{ margin: "5%" }}> {/* Determine how many I want to display --> row-cols-md-5*/}
                {product}
            </div>

        </>
    )
}

export default Admin;