import React, { useState } from 'react';
import axios, * as others from 'axios';

const ProductForm = () => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/product/new',{
      title,
      price,
      description
    })
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("error: ", err))
  }
  

  return (
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text" onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input type="number" onChange={e=>setPrice(parseInt(e.target.value))}/>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" onChange={e=>setDescription(e.target.value)}/>
        </div>
        <input type="submit" value="CREATE" />
      </form>
  );
}

export default ProductForm;
