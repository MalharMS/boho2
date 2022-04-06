import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import catelist from '../../../Data/categories'
import im from '../../../Assests/Rectangle 55.png'
import tempimg from '../../../Assests/item.png'
import './categoryproductdetails.css'


const CategoryProductDetails = () => {

    const imgarr = [im, tempimg, im];
    const [bigimage, setbigimage] = useState(0)
    const setimage = (index) => {
        return imgarr[index]
    }

    let { id } = useParams()

    return (
        <div>
            <div className='product-outer-box'>
                <div>
                    <div>
                        <img className='product-main-image' src={setimage(bigimage)} alt=""></img>
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
                            <button onClick={() => setbigimage(0)} className='product-sample-image-button'>
                                <img className="product-sample-image" src={tempimg} alt=""></img>
                            </button>
                        </div>
                        <div className='prdouct-sample-image-div'>
                            <button onClick={() => setbigimage(1)} className='product-sample-image-button'>
                                <img className="product-sample-image" src={tempimg} alt=""></img>
                            </button>
                        </div><div className='prdouct-sample-image-div'>
                            <button onClick={() => setbigimage(2)} className='product-sample-image-button'>
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
            <div>
                <div className='product-details-heading-div'>
                    <h3 className='product-details-heading'>Product Details</h3>
                </div>
                <div className='produt-detail-outer-box'>
                    <div className='product-detail-main'>
                        <h3>Technical features</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <h3>Disclaimer</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <h3>Quality</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <h3>Note</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div>
                        <h3>Technical details</h3>
                        <div className='product-technical-details-outer'>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                            <div className='product-technical-details-div'><h5>Design Code:</h5></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='product-details-heading-div'>
                    <h3 className='product-details-heading'>Similar Products</h3>
                </div>
                <div className='product-similar-outer-div'>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                    <div className='product-similar-product-card'>
                        <div>
                            <img src={tempimg} alt=''></img>
                        </div>
                        <div className='product-similiar-product-heading'>
                            <h3>Product 1</h3>
                        </div>
                        <div className='product-similiar-product-heading-description'>
                            <p>Best product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CategoryProductDetails
