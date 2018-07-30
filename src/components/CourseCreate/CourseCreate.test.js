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
    mockCurrentCourse = { 
      id: 1, 
      name: '',
      description: '',
      students: [],
      tasks: []
    };

    mockProps = {
      history: { push: jest.fn() },
      currentCourse: mockCurrentCourse
    };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500,
      json: jest.fn().mockImplementation(() => Promise.resolve({ data: [] }))
    }));

    wrapper = shallow(<CourseCreate {...mockProps} />, {disableLifeCycleMethods: true});
  })

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

  describe('rearrangeTasks', () => {
    it('should rearrange tasks to given array', () => {
      wrapper.setState({tasks: [1, 2]});
  
      const expected = [2, 1];
  
      wrapper.instance().rearrangeTasks([2, 1]);
      let actual = wrapper.state('tasks');
  
      expect(actual).toEqual(expected);
    });
  });
});