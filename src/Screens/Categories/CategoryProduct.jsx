import React from 'react'
import { Link } from 'react-router-dom'

const CategoryProduct = ({ card, index }) => {
    return (
        <Link to={`/product/${index}`} className='product-link'>
            
                <div className='cate-img-div'>
                    <img src={card.img} alt=''></img>
                </div>
                <div className='cate-product-heading'>
                    <h3>{card.name}</h3>
                </div>
                <div className='cate-product-description'>
                    <p>{card.description}</p>
                </div>
        </Link>
    )
}

export default CategoryProduct

