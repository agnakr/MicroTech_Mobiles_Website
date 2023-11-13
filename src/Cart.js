import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart)
    const removebooks = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>
            <div><h3 className='text-center fs-1' id='v'>Cart Page</h3></div>
            <br></br>
            <div className='cartWrapper text-center' >
                {cartitems.map((item) => (
                    <div className='Card d-flex justify-content-around ' key={item.id}>
                        <div><img src={require(`./assets/${item.image}.jpg`)} width={200} height={200} alt={item.model} /></div>
                        <div><h3>{item.model}</h3>
                            <h6>{item.desc}</h6></div>
                        <div><h5>{item.price}</h5></div>
                        <div><button className='btn btn-outline-dark w-100' onClick={() => removebooks(item.id)} id='b'>Delete</button></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart