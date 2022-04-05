import React from 'react'
// import catelist from '../../Data/categories'
import CategoryProduct from './CategoryProduct'
import CategorySideBar from './CategorySideBar'

const CategoryPage = ({ index, list }) => {

    // const setTitle = (index) => {
    //     switch (index) {
    //         case 0:
    //             return "Luxury"
    //         case 1:
    //             return "Design"
    //         case 2:
    //             return "Colour"
    //         case 3:
    //             return "Trending"
    //         case 4:
    //             return "Price"
    //             default:
    //     }
    // }

    return (
        <div className='cate-second'>
            <div className='cate-side-outer'>
                <CategorySideBar index={index} />
            </div>
            <div className='cate-product-container'>
                {list.map((card, index) => {
                    return (
                        <div className='cate-card' key={index}>
                            <CategoryProduct card={card} index={index} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default CategoryPage