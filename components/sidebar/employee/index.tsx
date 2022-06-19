import React from 'react';
import styled from 'styled-components';
import { IEmployee } from '../../../model/interface';

//data
import dataEmployee from '../../../data/EmployeeData.json'

const ListEmployee:React.FC<IEmployee> = () => {
  return (
    <List>
      {dataEmployee && dataEmployee["employees"].map((item, key) => 
        <Item key={key}>
          {item.name}
        </Item>
      )}
    </List>
  )
}

export default ListEmployee;

const List = styled.ul`
display: block; 
width: 100%;      
text-align: center;
list-style: none;   
padding: 0;                   
`

const Item = styled.li`
  color: ${({theme}) => theme.colors.primaryText};
  cursor: pointer;
`