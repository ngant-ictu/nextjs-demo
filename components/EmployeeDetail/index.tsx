import React, {useState} from 'react';
import styled from 'styled-components';
import { useListEmployeeState } from "../../components/ListEmployeeState";


const EmployeeDetail:React.FC = () => {
  const {state, setState} = useListEmployeeState();
  const selectedEmployee = state.employees[state.selectedEmployeeIndex];


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
