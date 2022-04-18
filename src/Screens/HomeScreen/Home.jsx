import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Carousel';
import Brands from './Brands';
import PopularItems from './PopularItems';
import Hc from '../../components/homeCategories/Hc';
import Border from '../../components/Border'

function Home() {
  return (
    <div>
      <Slider />
      <Border />
      <Brands />
      <Border />
      <Hc />
      <PopularItems />
    </div>
  )
}
export default Home