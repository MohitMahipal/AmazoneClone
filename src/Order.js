import moment from 'moment/moment'
import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Order.css'
function Order({ order }) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
      <div className='order'>
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          <p className='order__id'>
              <small>{order.id}</small>
          </p>
          {order.data.basket.map(item => {
              return<CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
                rating={item.rating}
                hideButton={true}
            />
          })}
      {  <p className='order__total'>
             
          Order Total : <strong>{USDollar.format(order.data.amount/100) }</strong>
            </p>
        
         }
      </div>
  )
}

export default Order