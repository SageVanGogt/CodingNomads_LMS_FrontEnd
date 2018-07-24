import React from 'react';
import { shallow } from 'enzyme';
import { TaskEdit, mapStateToProps } from './TaskEdit';

describe('TaskEdit', () => {
  let wrapper;
  let mockCurrentTask;

  beforeEach(() => {
    mockCurrentTask = {id: null, topic: ''};
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

  describe('mapStateToProps', () =>  {
    it('should return a state with the currentTask prop', () => {
      let mockState = {
        currentTask: {id: null, topic: ''},
        user: {id: 1}
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.currentTask;
      let expected = {id: null, topic: ''};

      expect(actual).toEqual(expected);
    })
  })
})