import React from 'react';
import { shallow } from 'enzyme';
import { CourseCreate, mapStateToProps } from './CourseCreate';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('CourseCreate', () => {
  let wrapper;
  let mockCurrentCourse;
  let mockProps;
  let mockTask;
  let fetch;

  beforeEach(() => {
    mockProps = {
      history: { push: jest.fn() },
      currentCourse: mockCurrentCourse
    };
    mockCurrentCourse = { 
      id: 1, 
      name: '',
      description: '',
      location: {},
      students: [],
      tasks: []
    };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500,
      json: jest.fn().mockImplementation(() => Promise.resolve({ data: [] }))
    }));

    wrapper = shallow(<CourseCreate {...mockProps} />, {disableLifeCycleMethods: true});
  })

  it('should match the snapshot', () => {
    
  });

  describe('handleChange', () => {
    it('should update the appropriate state', () => {
      let mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'name',
          value: 'javascript'
        }
      };
      let expected = 'javascript';
      wrapper.instance().handleChange(mockEvent);
      let actual = wrapper.state('name');

      expect(actual).toEqual(expected);
    });
  });

  describe('handleStudentSelect', () => {
    it('should call  with the correct params', async () => {
      let mockLabs = [{}, {}];
      wrapper.setState({ labsToDelete: mockLabs });
      let expected = mockLabs;
      await wrapper.instance().handleDeletedLabs();

      expect(API.deleteLabsFromTask).toHaveBeenCalledWith(expected);
    })
  })

  // describe('handleDeletedDocs', () => {
  //   it('should call  with the correct params', async () => {
  //     let mockDocs = [{}, {}];
  //     wrapper.setState({ docsToDelete: mockDocs });
  //     let expected = mockDocs;
  //     await wrapper.instance().handleDeletedDocs();

  //     expect(API.deleteDocsFromTask).toHaveBeenCalledWith(expected);
  //   })
  // })

  // describe('mapStateToProps', () => {
  //   it('should return a state with the currentTask prop', () => {
  //     let mockState = {
  //       currentTask: { id: null, name: '' },
  //       user: { id: 1 }
  //     };
  //     let mappedProps = mapStateToProps(mockState);
  //     let actual = mappedProps.currentTask;
  //     let expected = { id: null, name: '' };

  //     expect(actual).toEqual(expected);
  //   })
  // })
})
