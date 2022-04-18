import React from 'react'
import Slider from '../../components/Carousel'
import Featured from '../../Data/Featured'
import Border from '../../components/Border'

function Popular_items() {
  return (
    <div>
      <Border />
      <h2 className="font-extrabold tracking-tight my-4 text-gray-900">Featured Products</h2>
      <div className="bg-neutral-100 my-3">
        <div className=" max-w-2xl mx-auto m py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Featured.map((product) => (
              <div key={product.id} className="group relative">
                <div className=" shadow-xl p-3	 border-2 border-gray-400	 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Border />
      <div className="slidergrp-row1 my-4">
        <Slider />
      </div>

    </div>
  )
}

export default Popular_items