export class User {
    #privateField = '123';

    constructor(userName = '') {
        this.userName = userName;
    }

    getFullName() {
        return this.userName;
    }
}