import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryProduct.css'
const CategoryProduct = ({ card, index }) => {
    return (
        <>
            <Link to={`/product/${index}`} className='product-link'>
                <div className='category-product-card'>


                    <div className='cate-img-div'>
                        <img src={card.img} alt=''></img>
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
                        <h3>{card.name}</h3>
                    </div>
                    <div className='cate-product-description'>
                        <p>{card.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CategoryProduct

