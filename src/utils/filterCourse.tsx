import { Course } from '../types/course';

type Props = {
  input: string;
  labels: { subscribed: boolean; unsubscribed: boolean };
  studentId: number;
  course: Course;
};

type filterCourseType = (props: Props) => boolean;

export const filterCourse: filterCourseType = function ({
  input,
  labels,
  studentId,
  course
}) {
  const searchByInput = () => {
    return (
      course.name.toLowerCase().includes(input.toLowerCase()) ||
      course.description.toLowerCase().includes(input.toLowerCase())
    );
  };

  const searchByLabels = () => {
    if (labels.subscribed && labels.unsubscribed) return true;

    if (labels.subscribed) return course.studentsId.includes(studentId);

    if (labels.unsubscribed) return !course.studentsId.includes(studentId);
  };

  const searchedCourses = searchByInput() && searchByLabels();
  return searchedCourses ? true : false;
};
