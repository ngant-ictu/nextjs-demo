import React, { useState } from "react";
import styled from "styled-components";
import { IEmployee } from "../model/interface";

import data from "../data/EmployeeData.json";

type ListEmployeeState = {
  employees: IEmployee[];
  selectedEmployeeIndex: number;
};

const useListEmployeeState = () => {
  const [state, setState] = useState<Partial<ListEmployeeState>>({
    employees: data.employees as IEmployee[],
    selectedEmployeeIndex: 0,
  });

  return { state, setState };
};

export { useListEmployeeState };
