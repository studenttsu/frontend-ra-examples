import { User } from './User.js';

// // Переменные

// const COLOR_BLUE = '#1231da';
// let firstName = 'Ivan';

// // Примитивы
// // string
// // number
// // boolean
// // undefined
// // null
// // bigInt

// // Array, Object, function, Class
// // object

// let isManager;
// let isAdmin = null;

// // js операторы сравнения
// if (isManager || isAdmin) {
//     console.log('Роль: админ и менеджер');
// } else if (false) {
//     console.log('');
// }  else if (false) {
//     console.log('');
// }  else if (false) {
//     console.log('');
// }  else if (false) {
//     console.log('');
// } else {
//     console.log('');
// }


// let role = 'Admin';

// switch (role) {
//     case 'Admin':
//         console.log('Роль Admin');
//         break;
//     case 'Manager':
//         console.log('Роль Manager');
//         break;
//     default:
//         console.log('Нет роли');
// }

// const typeOfRoleVaruable = typeof role;
// // typeOfRoleVaruable is 'string'


// // false-значения
// null, undefined, '', false, 0


// // Циклы
// for (let i = 0; i <= 10; i++) {

// }

// const array = [1, 2, 3];

// for (let num of array) {
//     // 1,
//     // 2,
//     // 3
// }

// const obj = {
//     name: 'Name',
//     age: 18
// };

// for (let prop in obj) {
//     // name,
//     // age
// }

// let count = 0;

// while (count <= 5) {
// 	// Выводим в консоль значение переменной count
// 	console.log(count);

// 	// Увеличиваем значение переменной на 1;
// 	count++;
// }

// // let value = false;
// // while (!value) {
// //     // do

// //     if () {
// //         value = true;
// //     }
// // }


// // Функции
// // Чистые
// // Сайд-эффекты
// function log(message = 'doSomething', method = 'log') {
//     const values = ['log', 'warn', 'error'];

//     if (values.includes(method)) {
//         console[method](message);
//     }

//     return message;
// }

// log('Message');

// let result;

// // good
// // function summClear(a, b) {
// //     return a + b;
// // }

// // bad
// // function summEffect(a, b) {
// //     result = a + b;
// // }

// // const summClear = function() {
// //     return a + b;
// // };

// const summClear = () => a + b;

// function doSomething(callback) {
//     const value = 123;

//     if (callback) {
//         callback(value);
//     }
// }

// doSomething((value) => {
//     console.log(value);
// });

// [1, 2, 3].forEach(value => console.log(value));


// Объекты

console.log(this);

const user = {
    username: 'username',
    role: 'admin',
    age: 18,
    firstName: 'Name',
    lastName: 'LastName',
    patronymic: 'MiddleName',
    getFullName: function() {
        return `${this.lastName} ${this.firstName} ${this.patronymic}`;
    },
    getFullName2: () => {
        return `${this?.lastName} ${this?.firstName} ${this?.patronymic}`;
    }
};

console.log(user.getFullName());
console.log(user.getFullName2());

Object.keys(user).forEach(key => {
    console.log(`Key - ${key}; Value - ${user[key]}`);
})

Object.values(user).forEach(value => console.log(value));

const getAge = ({ age }) => {
    return age;
};

const [friut1, friu2] = ['apple', 'orange'];

// Методы примитивов

// 'string'.toLocaleUpperCase();

// new String('string')


class Student extends User {
    constructor(userName) {
        super(userName);
    }

    getEstimates() {
        return {
            Math: 5,
            Liturate: 3
        }
    }
}

const student = new Student('Ivanov');
console.log(student.getEstimates(), student.getFullName());

const user1 = new User('Ivan');
const user2 = new User('Vika');

// Object, Array, Class
// передаются по ссылке

// Примитивы - передаются по значению

const a = {
    prop: 'value'
};

const b = a;
b.prop = 'value2';

a === b;

/////////////////////
