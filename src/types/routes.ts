import { Course } from './course';

export type RootStackParamList = {
  HomeCourses: undefined;
  Course: { course: Course };
};

export type RootTabParamList = {
  Home: undefined;
  Courses: undefined;
};
