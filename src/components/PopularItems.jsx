import React from 'react'
import Slider from './Carousel'

function Popular_items() {
  return (
    <div>
        <div className="slidergrp-row1">
        <Slider />
        <Slider />
      </div>
      <div className="slidergrp-row2">
        <Slider />
        <Slider />
      </div>
    </div>
  )
}

export default Popular_items