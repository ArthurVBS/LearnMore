import courses from '../data/courses.json';
import { Course } from '../types/course';

type getAllCoursesType = () => Course[];

export const getAllCourses: getAllCoursesType = () => {
  return courses.data;
};

type getCourseByIdType = (id: number) => Course | null;

export const getCourseById: getCourseByIdType = id => {
  const course = courses.data.find(course => course.id === id);
  return course ? course : null;
};
