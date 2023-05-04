import { makeAutoObservable } from "mobx";
import { EmployeeDto } from "../../common/dto";
import { EmployeesApi } from "../../common/api";
import { EmployeeCreateFormData } from "./components/EmployeeCreateForm";

class EmployeesStore {
    employees: EmployeeDto[] = [];

    constructor() {
        makeAutoObservable(this, undefined, { autoBind: true });
    }

    async loadEmployees() {
        const data = await EmployeesApi.getAll();
        this.employees = data;
    }

    removeEmployee(employeeId: number) {
        this.employees = this.employees.filter(x => x.id !== employeeId);
    }

    createEmployee(data: EmployeeCreateFormData) {
        this.employees = this.employees.concat({
            "firstName": data.name,
            "patronymic": "Сергеевна",
            "surName": data.lastName,
            "position": "Мастер ногтевого сервиса",
            "photo": "http://localhost:3003/api/staff/photo/d7be2a0cc36277ba0d5fcb3b325389a5.jpg",
            "startWorkDate": "2023-04-17T12:11:35.178Z",
            "id": this.employees.length + 1,
            "fullName": "Краснова Ирина Сергеевна",
        });
    }
}

export default new EmployeesStore();