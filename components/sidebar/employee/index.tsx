import React, { useState } from "react";
import styled from "styled-components";
import { IEmployee } from "../../../model/interface";

//data
import data from "../../../data/EmployeeData.json";
import { useListEmployeeState } from "../../ListEmployeeState";

const ListEmployee = () => {
  const { state, setState } = useListEmployeeState();

  return (
    <List>
      {state?.employees?.map((item, index) => (
        <Item
          onClick={() => {
            setState({ selectedEmployeeIndex: index });
          }}
          key={index}
        >
          {item.name}
        </Item>
      ))}
    </List>
  );
};

export default ListEmployee;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  color: ${({theme}) => theme.colors.primary};
  font-size: 30px;
  padding: 10px 0;
  cursor: pointer;
`;
