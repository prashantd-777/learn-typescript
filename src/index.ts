"use strict";

console.log('Welcome to the TS');
class User {
    protected _courseCount = 1;
    email: string;
    name: string;
    private readonly city: string = 'Pune';
    constructor(email:string, name:string) {
        this.email = email;
        this.name = name;
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNumber:number) {
        this._courseCount = courseNumber;
    }

     private deleteToken() {
        console.log('token deleted');
    }
}

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const u1 = new User('pd@test.com', 'PD');
// u1.city;
// u1.deleteToken();