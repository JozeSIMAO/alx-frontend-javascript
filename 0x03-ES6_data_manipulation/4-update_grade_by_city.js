export default function updateStudentGradeByCity(arr, city, newGrades) {
    const nullGrade = { grade: 'N/A' };
    if (Array.isArray(arr) !== true) {
        return [];
    }
    else {
        return (arr.filter((student) => student.location === city)
        .map((student) => ({
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: (newGrades
                .filter((grade) => grade.studentId === student.id)
                .pop() || nullGrade).grade,
        })));
    }
}