// Importing classes and interfaces from the Subjects namespace
import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";
import { Teacher } from "./Teacher";

// Create and export constants for Cpp, Java, and React subjects
export const cpp = new Cpp(new Teacher());
export const java = new Java(new Teacher());
export const react = new React(new Teacher());

// Create and export a Teacher object with experience in teaching C
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
