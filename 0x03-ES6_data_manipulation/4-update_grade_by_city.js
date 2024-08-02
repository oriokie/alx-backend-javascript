export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find(
        (grade) => grade.studentId === student.id,
      ) || defaultGrade;
      return {
        ...student,
        grade: studentGrade.grade,
      };
    });
}
