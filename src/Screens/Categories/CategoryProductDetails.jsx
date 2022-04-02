import React from 'react'
import { useParams } from 'react-router-dom'
import catelist from '../../Data/categories'

const CategoryProductDetails = ({ match }) => {

    let { id } = useParams()

    return (
        <div>
            {id}
        </div>
    )
}

export default CategoryProductDetails