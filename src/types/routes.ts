import { Course, CourseClass } from './course';

export type RootStackParamList = {
  HomeCourses: undefined;
  Course: { course: Course };
  Class: { class: CourseClass };
};

export type RootTabParamList = {
  Home: undefined;
  Courses: undefined;
  Permissions: undefined;
};
