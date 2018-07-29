import { mockDocs } from './../../mockData/mockDocs';
import { mockLabs } from './../../mockData/mockLabs';
import { mockTasks } from './../../mockData/mockTasks';
import { mockCourses } from './../../mockData/mockCourses';

export const getAllTasks = jest.fn().mockImplementation(
  () => Promise.resolve(mockTasks)
);

export const getTask = jest.fn();

export const postTask = jest.fn();

export const updateTask = jest.fn();

export const deleteTask = jest.fn();

export const getAllCourses = jest.fn().mockImplementation(
  () => Promise.resolve(mockCourses)
);

export const getCourse = jest.fn();

export const addCourse = jest.fn();

export const updateCourse = jest.fn();

export const deleteCourse = jest.fn();

export const getAllCoursesStudents = jest.fn();

export const addCourseStudent = jest.fn();

export const deleteCourseStudent = jest.fn();

export const getCourseTeachers = jest.fn();

export const addTeacherToCourse = jest.fn();

export const deleteTeacherFromCourse = jest.fn();

export const getCourseTasks = jest.fn();

export const postTaskToCourse = jest.fn();

export const deleteTaskFromCourse = jest.fn();

export const getAllDocs = jest.fn().mockImplementation(
  () => Promise.resolve(mockDocs)
);

export const getAllLabs = jest.fn().mockImplementation(
  () => Promise.resolve(mockLabs)
);

export const deleteLabsFromTask = jest.fn(); 

export const deleteDocsFromTask = jest.fn();

export const deleteTasksFromCourse = jest.fn();

export const deleteStudentsFromCourse = jest.fn();



