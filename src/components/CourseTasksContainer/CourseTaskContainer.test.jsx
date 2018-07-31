import React from 'react';
import { shallow } from 'enzyme';
import {CourseTaskContainer} from './CourseTaskContainer';

describe('CourseTaskContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseTaskContainer />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has default state of tasks as an empty array', () => {
    expect(wrapper.state('tasks').length).toEqual(0);
  });

  describe('shouldCancelStart', () => {
    it('returns true if the event tag matches', () => {
      const mockEvent = { target: { tagName: 'select' } }
      const result = wrapper.instance().shouldCancelStart(mockEvent);

      expect(result).toBe(true);
    })

    it('returns undefined if the event tag does not match', () => {
      const mockEvent = { target: { tagName: 'john' } }
      const result = wrapper.instance().shouldCancelStart(mockEvent);

      expect(result).toBe(undefined);

    })
  })
});
