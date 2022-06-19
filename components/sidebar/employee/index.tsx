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

const List = styled.ul``

const Item = styled.li``