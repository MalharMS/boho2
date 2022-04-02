import React from 'react'
import im from './item.png'
import './cart.css'
import { ProgressBar } from 'react-bootstrap';

const now = 70;
function Cart() {
  return (
    <div className='cart-outer'>
      <div className='cart-card'>
        <div className='cart-img-div'>
          <img src={im} alt=''></img>
        </div>
        <div className='cart-product-info-div'>
          <h5 className='cart-product-individual-info'>Product Name:</h5>
          <h5 className='cart-product-individual-info'>Consectetur adipiscing elit</h5>
          <h5 className='cart-product-individual-info'>Product Code:</h5>
          <h5 className='cart-product-individual-info'>ABL89T456</h5>
          <h5 className='cart-product-individual-info'>Quantity:</h5>
          <h5 className='cart-product-individual-info'>10 rolls</h5>
          <h5 className='cart-product-individual-info'>Price:</h5>
          <h5 className='cart-product-individual-info'>Rs 1,58,234</h5>
        </div>
        <div className='cart-product-div'>
          <div className='cart-product-status'>
            <h6>Product Status</h6>
            <div>
              <ProgressBar>
                <ProgressBar variant="success" now={now} label={`${now}%`} key={1} />
                <ProgressBar variant="danger" now={100 - now} label={`${100 - now}%`} key={2} />
              </ProgressBar>
            </div>
          </div>
          <div>
            <div className='cart-button-div'>
              <button className='cart-button'>Proceed to pay {now}% </button></div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Cart