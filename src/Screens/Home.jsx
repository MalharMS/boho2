import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../components/Carousel';
import Brands from '../components/Brands';
import PopularItems from '../components/PopularItems';
function Home() {
  return (
    <div>
        
      <Slider />
      <Brands />
      <PopularItems />
    </div>
  )
}

export default Home