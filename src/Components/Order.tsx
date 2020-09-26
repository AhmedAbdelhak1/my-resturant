import React from 'react';
import './Order.css';

function Order() {
    return (
        <div className="order">
            <h1>Order</h1>
            <h5>If you like our Menu make your order and we will be happy to make that happen for you</h5>
            <form className="formarea">
                <div className="container">
                    <label >FullName:</label>
                    <input type="text" placeholder="Fullname"/>
                    <label >Email:</label>
                    <input type="email" name="email" id="" placeholder="Email"/>
                    <label >Location:</label>
                    <input type="text" placeholder="Where do you want your order to sent?!!"/>
                    <label >Order:</label>
                    <textarea name="" id="" ></textarea>
                    <button className="btn" type="submit">Send It</button>
                </div>
            

        </form>
            
        </div>
    )
}

export default Order
