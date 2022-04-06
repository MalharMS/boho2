import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Carousel';
import Brands from './Brands';
import PopularItems from './PopularItems';
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