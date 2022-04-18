import React from 'react'
import styled from 'styled-components'
import  Hd  from '../../Data/Hd'
import Hci from './Hci'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Hc = () => {
  return (
    <Container>
          {Hd.map(item => (
              <Hci item={item}/>
          ))}
    </Container>
  )
}

export default Hc