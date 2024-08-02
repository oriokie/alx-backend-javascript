interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

/* Interface describing the constructor parameters */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

/* Interface describing the class */
interface StudentClass {
  firstName: string;
  lastName: string;
  workonHomework(): string;
  displayName(): string;
}

/* Class implementation */
class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workonHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
