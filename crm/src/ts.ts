const age: number = 123;

// number
// boolean
// string
// undefined
// null
// Object

interface IUser {
    age: number;
    name: string;
    getFullName: () => string;
}

interface IAdminUser extends IUser {
    isAdmin: boolean;
}

const object: IAdminUser = {
    age: 123,
    name: 'Ivan',
    getFullName() {
        return '';
    },
    isAdmin: true
};


enum Role {
    Admin = 'admin',
    Manager = 'manager',
    User = 'user'
}

type ID = number | string;

class User {
    id: ID | null = null;
    age: number | null = null;
    name: string = '';

    role: Role = Role.User;

    constructor() {
        this._setUser();
    }

    private _setUser() {}
}

const user = new User();


interface OrderDto {
    id: number;
    name: string;
    dateStart: Date;
    dateEnd: Date;
}

interface CreateOrderDto extends Omit<OrderDto, 'id'> {}

const createOrder: CreateOrderDto = {
    name: '',
    dateEnd: new Date(),
    dateStart: new Date()
};

class BaseService<T> {
    entites: T[] = [];
}

const listService = new BaseService<number>();

const collection: Record<number, number[]> = {
    1: [],
    2: [],
    3: [],
}

collection[4] = [123];

function get(arg: number): boolean {
    return true;
}

export {}