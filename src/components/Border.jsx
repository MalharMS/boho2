import React from 'react'
import styled from 'styled-components'
import strip from '../Assests/strip.png'
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `;

const Border = () => {
    return (
        <Image src={strip} />
    )
}

export default Border