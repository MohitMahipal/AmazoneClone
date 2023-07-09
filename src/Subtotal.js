import React from 'react'
// import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'
import {  useNavigate } from "react-router-dom";


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const Navigate = useNavigate();
  return (
      <div className='subtotal'>
              
          <>
            <p>
              {/* Part of the homework */}
          Subtotal ({basket?.length} items): <strong>{USDollar.format(getBasketTotal(basket)) }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
       
       
            <button onClick={()=>Navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )

}

export default Subtotal