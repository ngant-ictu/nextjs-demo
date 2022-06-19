import React from 'react';
import styled from 'styled-components';
import ListEmployee from './employee';
import Logo from './logo';

const SideLeft:React.FC = () => {
  return (
    <Sidebar>
      <Logo />
      <ListEmployee></ListEmployee>
    </Sidebar>
  )
}

export default SideLeft;

const Sidebar = styled.div`
  background-color: #000000a1;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  min-width: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
