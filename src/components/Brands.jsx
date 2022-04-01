import React from 'react'
import './brands.css'
import img1 from '../Assests/image3.jpg'
function Brands() {
    return (
        <div className='brands-main'>
            <div>
                <div className='brand-indi'><img src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img src={img1} alt='brandimage'></img></div>
            </div>
            <div>
                <div className='brand-indi'><img src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img src={img1} alt='brandimage'></img></div>
            </div>
        </div>
    )
}

export default Brands