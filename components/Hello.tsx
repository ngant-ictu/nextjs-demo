import  styled  from 'styled-components';
import React from 'react';

const Hello = () => {
  return (
    <>
      <Heading>Hello everyone</Heading>
    </>
  )
}

export default Hello;

const Heading = styled.h1`
  color: #ff0033;
  font-size: 34px;
  text-transform: uppercase;

  &:hover {
    color: green;
  }
`
