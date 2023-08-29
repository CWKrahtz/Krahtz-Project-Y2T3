import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';

const ProductPage = () => {

  let navigate = useNavigate();

  let productId = sessionStorage.getItem('productId')

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDesc: "",
    productStock: "",
    varOne: "",
    varTwo: "",
    varThree: ""
  })

  useEffect(() => {
    Axios.get( "http://localhost:5000/api/oneProduct/" +  productId )
    .then(res => {
      let data = res.data
      console.log(data)
      setProductData({
        productName: data.name,
        productPrice: data.price,
        productDesc: data.description,
        productStock: data.stock,
        varOne: data.variations.color1,
        varTwo: data.variations.color2,
        varThree: data.variations.color3
      })
    })
    .catch(err => console.log(err))
  }, [])

  const backHome = () => {
    sessionStorage.clear()
    navigate('/')
  }
   
  return (
    <div>
        <Button onClick={backHome} style={{margin:"2%"}} variant="warning" size="small">Back To Home</Button>
        <h3>Available Stock: {productData.productStock} Units</h3>
        <h1>{productData.productName}</h1>
        <p>Product Description:</p>
        <p>{productData.productDesc}</p>
        <h3>Variations In Stock</h3>
        <p>Color One: {productData.varOne}</p>
        <p>Color Two: {productData.varTwo}</p>
        <p>Color Three: {productData.varThree}</p>
    </div>
  )
}

export default ProductPage