import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const baseUrl = "https://642e447c8ca0fe3352cbfd27.mockapi.io/crud";
  
  const onCreateProduct = () => {
    axios.post(baseUrl, {
      name,
      brand,
      price,
      description,
      image
    })
  }
  return (
    <div className='create-product'>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input 
            name="name" 
            placeholder='Product Name' 
            onChange={(e) => setName(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>Brand</label>
          <input 
            name="brand" 
            placeholder='Brand Name' 
            onChange={(e) => setBrand(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input 
            name="price" 
            placeholder='Price' 
            onChange={(e) => setPrice(e.target.value)} 
        />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input 
            name="desc" 
            placeholder='Description' 
            onChange={(e) => setDescription(e.target.value)} 
        />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <input 
          name="image" 
          placeholder='http://....' 
          onChange={(e) => setImage(e.target.value)} 
        />
        </Form.Field>
        <Button type='submit' onClick={onCreateProduct}>Submit</Button>
      </Form>
    </div>
  )
}


export default CreateProduct