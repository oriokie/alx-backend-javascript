export default function getListStudents() {
  const studentsArray = [];
  studentsArray.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  studentsArray.push({ id: 2, firstName: 'James', location: 'Columbia' });
  studentsArray.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return (studentsArray);
}
