import React from 'react';
import { shallow } from 'enzyme';
import { TaskEdit } from './TaskEdit';

describe('TaskEdit', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskEdit />);
  })

  it('should match the snapshot', () => {

  })

  describe('handleChange', () => {
    it('should update the appropriate state', () => {
      let mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'videoLink',
          value: 'caden@youtube'
        }
      };
      let expected = 'caden@youtube';
      wrapper.instance().handleChange(mockEvent);
      let actual = wrapper.state('videoLink');

      expect(actual).toEqual(expected);
    })
  })
})