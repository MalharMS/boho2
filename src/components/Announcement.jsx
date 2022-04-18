import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: #f5f5f5;
    color: #70e000;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  
    @media (max-width: 700px) {
      font-size: 15px;
    }
   
`;


const Announcement = () => {
  return (

    <Container>Sale | Up to 60% Off | Use Code Boho123</Container>

  )
}

export default Announcement