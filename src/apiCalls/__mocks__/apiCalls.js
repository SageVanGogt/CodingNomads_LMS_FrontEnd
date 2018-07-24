import { mockDocs } from './../../mockData/mockDocs';
import { mockLabs } from './../../mockData/mockLabs';

export const getAllDocs = jest.fn().mockImplementation(() => 
Promise.resolve(mockDocs));

export const getAllLabs = jest.fn().mockImplementation(() => 
Promise.resolve(mockLabs));

export const updateTask = jest.fn().mockImplementation(() => 
Promise.resolve());