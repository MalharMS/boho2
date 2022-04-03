import React, { useState } from 'react'
import './categores.css'
// import im from './painting.png'
import catelist from '../../Data/categories'
import catelist2 from '../../Data/categories2'
import catelist3 from '../../Data/categories3'
import CategoryPage from './CategoryPage'

function Categories() {

  const [index, setIndex] = useState(0)

  const setList = (index) => {
    switch (index) {
      case 0:
        return catelist
      case 1:
        return catelist2
      case 2:
        return catelist3
      case 3:
        return catelist
      case 4:
        return catelist
      default:
        return
    }
  }

  return (
    <div>
      <div className='all-categories-outer'>
        <div className='all-categories'>
          <div className='cate-button-div'>  <button onClick={() => setIndex(0)} className='category-button'>Luxury</button></div>
          <div className='cate-button-div'>  <button onClick={() => setIndex(1)} className='category-button'>Design</button></div>
          <div className='cate-button-div'>  <button onClick={() => setIndex(2)} className='category-button'>Colour</button></div>
          <div className='cate-button-div'>  <button onClick={() => setIndex(3)} className='category-button'>Trending</button></div>
          <div className='cate-button-div'>  <button onClick={() => setIndex(4)} className='category-button'>Price</button></div>
        </div>
      </div>

      <CategoryPage index={index} list={setList(index)} />
    </div>
  )
}

export default Categories