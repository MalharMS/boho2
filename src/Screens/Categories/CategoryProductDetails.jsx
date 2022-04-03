import React from 'react'
import { useParams } from 'react-router-dom'
import catelist from '../../Data/categories'
import im from '../../Assests/Rectangle 55.png'
import tempimg from '../../Assests/item.png'
import './categoryproductdetails.css'
import { DropdownButton, FormControl, InputGroup } from 'react-bootstrap'
import { Dropdown } from 'bootstrap'
import { Button } from 'bootstrap'

const CategoryProductDetails = () => {

    let { id } = useParams()

    return (
        <div>
            <div className='product-outer-box'>
                <div>
                    <div>
                        <img className='product-main-image' src={im} alt=""></img>
                    </div>
                </div>
                <div>

                </div>
                <div className='product-detail-outer-box'>
                    <div>
                        <h3>{catelist[id].name}</h3>
                    </div>
                    <div>
                        <h6>Orginal price Rs 1800.00/ m2</h6>
                    </div>
                    <div>
                        <h2>Offer Price Rs 1500.00/ m2 </h2>
                        <h4>[ Sales Tax Included ]</h4>
                        <h4>10% OFF [ you save Rs. 280 ]</h4>
                        <h6>Available for 8 Days</h6>
                        <h6>Hurry up!! Order Now</h6>
                    </div>
                    <div className='product-images-div'>
                        <div className='prdouct-sample-image-div'>
                            <button className='product-sample-image-button'>
                                <img className="product-sample-image" src={tempimg} alt=""></img>
                            </button>
                        </div>
                        <div className='prdouct-sample-image-div'>
                            <button className='product-sample-image-button'>
                                <img className="product-sample-image" src={tempimg} alt=""></img>
                            </button>
                        </div><div className='prdouct-sample-image-div'>
                            <button className='product-sample-image-button'>
                                <img className="product-sample-image" src={tempimg} alt=""></img>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input placeholder='Paper Size'></input>
                            <input placeholder='Size [m2]'></input>
                            <input placeholder='Quantity'></input>
                        </div>
                        <div>
                            <button className='category-button'>Add to Sample Bag</button>
                            <button className='category-button'>Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CategoryProductDetails
