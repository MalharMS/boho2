import React from 'react'
import './categores.css'
import im from './painting.png'
import catelist from '../../Data/categories'

function Categories() {
  return (
    <div>
      <div className='all-categories-outer'>
        <div className='all-categories'>
          <div className='cate-button-div'>  <button className='category-button'>Luxury</button></div>
          <div className='cate-button-div'>  <button className='category-button'>Design</button></div>
          <div className='cate-button-div'>  <button className='category-button'>Colour</button></div>
          <div className='cate-button-div'>  <button className='category-button'>Trending</button></div>
          <div className='cate-button-div'>  <button className='category-button'>Price</button></div>
        </div>
      </div>

      <div className='cate-second'>
        <div className='cate-side-outer'>
          <div>
            <h4>Arcu</h4>
            <h4>Condinetum</h4>
            <h4>Cras</h4>
            <h4>Cursus</h4>
            <h4>Daim</h4>
            <h4>Dolor</h4>
            <h4>Efficitur</h4>
            <h4>Egrt</h4>
            <h4>Est</h4>
          </div>
        </div>
        <div className='cate-product-container'>
          {catelist.map((card,index) => {
            return (
              <div className='cate-card'>
                <div className='cate-img-div'>
                  <img src={card.img} alt=''></img>
                </div>
                <div className='cate-product-heading'>
                  <h3>{card.name}</h3>
                </div>
                <div className='cate-product-description'>
                  <p>{card.description}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Categories