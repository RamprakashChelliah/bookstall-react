import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name*' required/>
          <input type="text" placeholder='Last name*' required/>
        </div>
        <input type="email" placeholder='Email address*' required/>
        <input type="text" placeholder='Street*' required />
        <div className="multi-fields">
          <input type="text" placeholder='City*' required/>
          <input type="text" placeholder='State*' required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code*' required/>
          <input type="text" placeholder='Country*' required/>
        </div>
        <input type="text" placeholder='Phone*' required/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <p className="title">Cart Totals</p>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{"\u20B9"}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{"\u20B9"}{20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{"\u20B9"}{getTotalCartAmount() + 20}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
