import React, { useState } from 'react'
import { phonesData } from "./product.data";
import { useDispatch } from 'react-redux'
import { add } from "./cartSlice"
import './index.css'
const Products = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState(phonesData);
  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };
  const incQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };
  const addbooks = (item) => {
    dispatch(add(item));
  }
  return (
    <div>
      <h1 className=' text-center p-4' id='v'>Our Products</h1>
      {items.map((item) => (
        <div className='d-inline-flex' key={item.id}>
          <div className="card shadow-lg p-3 m-2 bg-body-tertiary rounded" style={{ width: '13rem', height:'38rem' }}>
            <img src={require(`./assets/${item.image}.jpg`)} className="card-img-top p-2" alt="..." style={{ height: '15rem' }}/>
            <div className="card-body" id="myDIV">
              <h5 className="card-title text-primary">{item.model}</h5>
              <p className="card-text">{item.desc}</p>
              <h5>Price: ₹ {item.price}</h5>
              <div class="hide">
                <p>Qty:<button className='btn bg-primary m-1 text-white' onClick={() => decQty(item.id)}>-</button>{item.qty}<button onClick={() => incQty(item.id)} className='btn bg-primary m-1 text-white'>+</button></p>
                <button className="btn btn-outline-dark" onClick={() => addbooks(item)} id="b"> Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products