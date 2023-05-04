import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { EmployeeCreateForm } from "./components/EmployeeCreateForm";
import { EmployeeCard } from "./components/EmployeeCard";
import EmployeesStore from "./EmployeesStore";

export const EmployeesPage = observer(() => {
  const { loadEmployees, removeEmployee, createEmployee } = EmployeesStore;

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <EmployeeCreateForm onCreate={createEmployee} />

      {EmployeesStore.employees.length === 0 && <p>Нет данных</p>}

      <div className="employees">
        {EmployeesStore.employees.map(employee => <EmployeeCard 
          onRemove={() => removeEmployee(employee.id)} 
          key={employee.id} 
          employee={employee} 
        />)}
      </div>
    </>
  );
})