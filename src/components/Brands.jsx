import React from 'react'
import './brands.css'
import img1 from '../Assests/image 4.png'
function Brands() {
    return (
        <div className='brands-main'>
            <div className='brand-container'>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div>
                <div className='brand-indi'><img className='brand-img' src={img1} alt='brandimage'></img></div> 
            </div>
        </div>
    )
}

export default Brands