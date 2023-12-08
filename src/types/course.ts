export type Course = {
  id: number;
  name: string;
  description: string;
  teacherId: number;
  studentsId: number[];
  classes: CourseClass[];
};

export type CourseClass = {
  id: number;
  name: string;
  description: string;
  videoId: string;
};
