import courses from '../data/courses.json';
import { Course } from '../types/course';

type getAllCoursesType = () => Course[];

export const getAllCourses: getAllCoursesType = () => {
  return courses.data;
};

type getCoursesByTeacherIdType = (teacherId: number) => Course[];

export const getCoursesByTeacherId: getCoursesByTeacherIdType = teacherId => {
  const coursesByTeacher = courses.data.filter(
    course => course.teacherId === teacherId
  );
  return coursesByTeacher.length > 0 ? coursesByTeacher : [];
};

type getCoursesByStudentIdType = (studentId: number) => Course[];

export const getCoursesByStudentId: getCoursesByStudentIdType = studentId => {
  const coursesByStudent = courses.data.filter(course =>
    course.studentsId.includes(studentId)
  );
  return coursesByStudent.length > 0 ? coursesByStudent : [];
};
