import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BasicNav from "../componants/navbar";

const ProductPage = () => {

  let navigate = useNavigate();

  let productId = sessionStorage.getItem('productId')

  const [imageURL, setImageURL] = useState();

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDesc: "",
    productStock: "",
    image: ""
  })

  //Add item to cart
  const updateCart = () => {
    var listOfCart = JSON.parse(sessionStorage.getItem("cartStorage")) || [];
    if (listOfCart == null) {
        listOfCart.push(productData)
    } else {
        listOfCart.push(productData)
    }
    sessionStorage.setItem("cartStorage", JSON.stringify(listOfCart))       
}

  useEffect(() => {
    Axios.get("http://localhost:5000/api/oneProduct/" + productId)
      .then(res => {
        let data = res.data
        console.log(data)
        setProductData({
          productId: productId,
          name: data.name,
          price: data.price,
          desc: data.description,
          stock: data.stock,
          image: data.image
        })

        let URL = 'http://localhost:5000/productImages/' + data.image;
        setImageURL(URL);

      })
      .catch(err => console.log(err))
  }, [])

  const backHome = () => {
    sessionStorage.removeItem("productId")
    navigate('/')
  }

  return (
    <>
      <BasicNav />
      <div style={{ marginTop: "5%" }}>
        <div style={{ width: "50%", float: "left" }}>
          <img src={imageURL} style={{ width: "75%", paddingLeft: "10%" }} />
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <h1>{productData.name}</h1>
          <h2>Product Description:</h2>
          <p>{productData.desc}</p>
          <h3>Product Stock</h3>
          <p>{productData.stock}</p>
          <Button onClick={updateCart} style={{ display: "block"}} variant="warning" size="small">Add To Cart</Button>
          <Button onClick={backHome} style={{ display: "block", marginTop: "1%" }} variant="danger" size="small">Back To Home</Button>
        </div>
      </div>

    </>
  )
}

export default ProductPage
