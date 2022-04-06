import React from 'react'
import { Link } from 'react-router-dom'
import im from '../../Assests/painting.png'
import './brand.css'

const data=[
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  {
    productname: 'product1',
    productdescription: 'Product description',
    img:im,
  },
  
]
function Brand(index) {
  return (
    <div className="brand-outerbox">
     
    {data.map((item)=>{
      return(
        <div>
        <Link to={`/product/${1}`} className='product-link'>
                <div className='brand-product-card'>
                    <div className='cate-img-div'>
                        <img src={im} alt=''></img>
                        <div className='category-icon-outer'>
                            <div className='category-product-icon'>
                                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart-loaded.png" alt="" />
                            </div>
                            <div className='category-product-icon'>
                                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-bag-full.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='cate-product-heading'>
                        <h3>asdfasd</h3>
                    </div>
                    <div className='cate-product-description'>
                        <p>sdfasdf</p>
                    </div>
                </div>
            </Link>
            </div>
              )
    })}
            
        
    </div>
  )
}

export default Brand