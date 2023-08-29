import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditProduct = (props) => {

  // console.log(props)

  let editFormValues = { name: props.name, price: props.price, desc: props.desc, varOne: props.varOne, varTwo: props.varTwo, varThree: props.varThree }

  const [editValues, setEditValues] = useState(editFormValues)

  const updateValues = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
    // console.log(editValues)
  }

  const updateProd = (e) => {
    e.preventDefault()
    let productId = props.id
    let payload = editValues

    Axios.patch('http://localhost:5000/api/updateProduct/' + productId, payload)
      .then(res => {
        if (res) {
          console.log("Item Updated")
          props.close();
          props.editRender(true)
          alert(payload.name + " Updated")
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  const closeModal = () => {
    props.close()
  }

  return (
    // <div className='modal show'>
    <div
      className="modal"
      style={{ display: 'block', position: 'fixed' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>Update This Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={updateProd}>
            <Form.Group className="mb-2">
              <Form.Label>Product Name</Form.Label>
              <Form.Control defaultValue={props.name} name="name" type="text" onChange={updateValues} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Price</Form.Label>
              <Form.Control defaultValue={props.price} name="price" type="number" placeholder="R" onChange={updateValues} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Product Description</Form.Label>
              <Form.Control defaultValue={props.desc} name="description" as="textarea" rows={3} placeholder="Text Here..." onChange={updateValues} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Color One</Form.Label>
              <Form.Control defaultValue={props.varOne} name="varOne" type="number" placeholder="Amount" onChange={updateValues} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Color Two</Form.Label>
              <Form.Control defaultValue={props.varTwo} name="varTwo" type="number" placeholder="Amount" onChange={updateValues} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Color Three</Form.Label>
              <Form.Control defaultValue={props.varThree} name="varThree" type="number" placeholder="Amount" onChange={updateValues} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close Modal</Button>
          <Button variant="warning" type="submit" onClick={updateProd}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default EditProduct
