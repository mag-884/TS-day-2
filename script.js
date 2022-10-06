"use strict";
// let doctor: { fname: string, lname: string, salary: number, printInfo: Function } = {
//   fname: "John",
//   lname: "Doe",
//   salary: 2000,
//   printInfo: function () {
//     return `${this.fname} ${this.lname}, with a salary of: ${this.salary}`;
//   }
// };
let arrDoctor = [];
class HospitalEmployee {
    constructor(fname, lname, salary) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        arrDoctor.push(this);
    }
    printInfo() {
        return `${this.fname} ${this.lname}, with a salary of: ${this.salary}`;
    }
}
class Doctor extends HospitalEmployee {
    constructor(fname, lname, salary, insurances) {
        super(fname, lname, salary);
        this.insurances = insurances;
    }
    printInfo() {
        return `${super.printInfo()}, and he have ${this.insurances}`;
    }
}
let doctor = new Doctor("John", "Doe", 2000, ["AAA", "BBB"]);
console.log(doctor.printInfo());
// let doctor: { fname: string, lname: string, salary: number, printInfo: Function } = new Doctor("John", "Doe", 2000);
// let doctor2 : { fname: string, lname: string, salary: number, printInfo: Function } = new Doctor("test","test", 3000)
// console.log(doctor.printInfo());
