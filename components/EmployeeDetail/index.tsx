import React, {useState} from 'react';
import styled from 'styled-components';
import { useListEmployee } from "../../components/ListEmployeeState";


const EmployeeDetail:React.FC = () => {
  const {state, ListEmployeeDispatcher} = useListEmployee();
  const selectedEmployee = state.employees[state.selectedEmployeeIndex];

  console.log(state, 'EmployeeDetail');

  return (
    <Item>
      {selectedEmployee.name}<br />
      {selectedEmployee.popularity}<br />
      {selectedEmployee.biography}<br />
    </Item>
  )
}

export default EmployeeDetail;

const Item = styled.div`
`
