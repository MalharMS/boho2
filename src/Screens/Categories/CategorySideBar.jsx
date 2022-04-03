import React from 'react'

const CategorySideBar = ({ index }) => {
    const setTitle = (index) => {
        switch (index) {
            case 0:
                return sidebarLuxury()
            case 1:
                return "Design"
            case 2:
                return "Colour"
            case 3:
                return "Trending"
            case 4:
                return "Price"
        }
    }
    const sidebarLuxury = () => {
        return (
            <div><div>
            <h4>sfdsdf</h4>
            <h4>Arcu</h4>
            <h4>Condinetum</h4>
            <h4>Cras</h4>
            <h4>afdasdf</h4>
            <h4>Daim</h4>
            <h4>Dolor</h4>
            <h4>Efficitur</h4>
            <h4>Egrt</h4>
            <h4>Est</h4>
        </div></div>)
    }
    return (
        <div>
            {setTitle(index)}
        </div>
    )
}

export default CategorySideBar