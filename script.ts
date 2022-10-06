// let doctor: { fname: string, lname: string, salary: number, printInfo: Function } = {
//   fname: "John",
//   lname: "Doe",
//   salary: 2000,
//   printInfo: function () {
//     return `${this.fname} ${this.lname}, with a salary of: ${this.salary}`;
//   }
// };

// console.log(doctor.fname);

// console.log(doctor.printInfo());

interface DoctorType {
  fname: string;
  lname: string;
  salary: number;
  printInfo?: Function;
}

let arrDoctor: Array<DoctorType> = [];


class HospitalEmployee {
  fname: string;
  lname: string;
  salary: number;

  constructor(fname: string, lname: string, salary: number) {
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
  insurances: Array<string>;

  constructor(fname: string, lname: string, salary: number, insurances: Array<string>) {
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
