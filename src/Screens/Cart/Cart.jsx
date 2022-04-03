import React from 'react'
import im from './item.png'
import './cart.css'
import { ProgressBar } from 'react-bootstrap';
import cart from '../../Data/cart';
function Cart() {
  return (
    <div className='cart-outer'>
      {cart.map((item) => {
        return (
        <div className='cart-card'>
          <div className='cart-img-div'>
            <img src={im} alt=''></img>
          </div>
          <div className='cart-product-info-div'>
            <h5 className='cart-product-individual-info'>Product Name:</h5>
            <h5 className='cart-product-individual-info'>{item.productName}</h5>
            <h5 className='cart-product-individual-info'>Product Code:</h5>
            <h5 className='cart-product-individual-info'>{item.productCode}</h5>
            <h5 className='cart-product-individual-info'>Quantity:</h5>
            <h5 className='cart-product-individual-info'>{item.quantity}</h5>
            <h5 className='cart-product-individual-info'>Price:</h5>
            <h5 className='cart-product-individual-info'>{item.price}</h5>
          </div>
          <div className='cart-product-div'>
            <div className='cart-product-status'>
              <h6>Product Status</h6>
              <div>
                <ProgressBar>
                  <ProgressBar variant="success" now={item.progress} label={`${item.progress}%`} key={1} />
                  <ProgressBar variant="danger" now={100 - item.progress} label={`${100 - item.progress}%`} key={2} />
                </ProgressBar>
              </div>
            </div>
            <div>
              <div className='cart-button-div'>
                <button className='cart-button'>Proceed to pay {item.progress}% </button></div>
            </div>

          </div>

        </div>
        )
      })}

    </div>
  )
}

export default Cart