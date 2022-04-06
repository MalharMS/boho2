import React from 'react'
import './myBag.css'
import im from '../../Assests/painting.png'

const data =[
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
  {
    productName:"cris",
    productCode:"422321",
    quantity:"42",
    price:"50",
    availability:"Available"
  },
]
function MyBag() {
  return (
    <div className="bag-cart-outer">
    {data.map((item)=>{
      return (
        <div className="bag-cart-card">
        <div className="bag-cart-image-div">
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
            <h5 className='cart-product-individual-info'>Available:</h5>
            <h5 className='cart-product-individual-info-availability'>{item.availability}</h5>
          </div>
          <div className='cart-close-button'>
            X
          </div>
      </div>
      )
    })}
      
    </div>
  )
}

export default MyBag