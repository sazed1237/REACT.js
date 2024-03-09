import React from 'react';
import './Cosmetic.css'
import { addtoDB, removeFromDB } from '../../utilities/Fakedb';

const Cosmetic = (props) => {
    // distructuring items
    const {name, price, id} =props.cosmetic


    // call from Fakedb
    const addToCart = (id) =>{
        addtoDB(id)
    }
    // const addToCartWithParam = () => addToCart(id);


    // call from fakedb
    const removeFromCart = id =>{
        removeFromDB(id)
    }

    return (
        <div className='product'>
            <h3>Buy the: {name} </h3>
            <p>Price: {price} </p>
            <p><small>it has id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            {/* <button onClick={addToCartWithParam}>Purches</button> */}
            <button onClick={() => removeFromCart(id)} >Remove</button>

        </div>
    );
};

export default Cosmetic;