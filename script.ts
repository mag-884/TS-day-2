/*let doctor: { fname: string, lname: string, age: number,salary:Number, jobTitle:string, jobLocation:string, printInfo: Function } = 

   {
  
  fname: "Cornard",
  lname: "Howkins",
  age: 40,
  salary: 7000,
  jobTitle:"Doctor",
  jobLocation:"at Chastain Park",
  printInfo: function () {
    return `I am${this.fname} ${this.lname}, and I am ${this.age} years old`;
  }
};
*/

interface DoctorType {
  fname: string;
  lname: string;
  age: number;
  jobTitle: string;
  printInfo?: Function;
}

let arrDoctor: Array<DoctorType> = [];


class HospitalEmployee {
  fname: string;
  lname: string;
  age: number;
  jobTitle: string;

  constructor(fname: string, lname: string, age: number, jobTitle: string) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.jobTitle = jobTitle;

    arrDoctor.push(this);
  }

  printInfo() {
    return `My name is ${this.fname} ${this.lname}, with a age of: ${this.age}, and I am a ${this.jobTitle}`;
  }
}

class Doctor extends HospitalEmployee {

  salary: number;
  jobLocation: string;
  constructor(fname: string, lname: string, age: number, jobTitle: string, salary: number, jobLocation: string) {
    super(fname, lname, age, jobTitle);
    this.salary = salary;
    this.jobLocation = jobLocation;

  }

  printInfoDoctor() {
    return `${super.printInfo()}, and I get ${this.salary} every month, and I work in ${this.jobLocation}`

  }
}


let doctor = new Doctor("John", "Harrison", 34, "Doctor", 5000, "AKH.");
let doctor2 = new Doctor("David", "Harrison", 34, "Doctor", 5000, "AKH.");

console.log(doctor.printInfoDoctor());
console.log(doctor2.printInfoDoctor());


