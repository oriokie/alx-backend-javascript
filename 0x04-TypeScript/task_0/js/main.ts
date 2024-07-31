export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Edwin",
  lastName: "Orioki",
  age: 30,
  location: "Kenya",
};

const studentB: Student = {
  firstName: "Cherie",
  lastName: "Kimani",
  age: 25,
  location: "Nigeria",
};

const studentsList: Array<Student> = [studentA, studentB];

const body = document.querySelector("body");
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headRow = document.createElement("tr");
const headers = ["First Name", "Location"];

headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headRow.appendChild(th);
});

tableHead.appendChild(headRow);
table.appendChild(tableHead);

const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);
