export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: "N/A" };

  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.id === student.id) || defaultGrade;
      return {
        ...student,
        grade: studentGrade.grade,
      };
    });
}
