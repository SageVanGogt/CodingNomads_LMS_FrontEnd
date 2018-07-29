import { mockDocs } from './../../mockData/mockDocs';
import { mockLabs } from './../../mockData/mockLabs';
import { mockTasks } from './../../mockData/mockTasks';

export const getAllDocs = jest.fn().mockImplementation(() => 
Promise.resolve(mockDocs));

export const getAllLabs = jest.fn().mockImplementation(() => 
Promise.resolve(mockLabs));

export const deleteLabsFromTask = jest.fn(); 

export const deleteDocsFromTask = jest.fn();

export const postTask = jest.fn();

export const updateTask = jest.fn();

export const getAllTasks = jest.fn().mockImplementation(() =>
Promise.resolve(mockTasks))

