import React from 'react';
import { shallow } from 'enzyme';
import { TaskEdit, mapStateToProps } from './TaskEdit';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('TaskEdit', () => {
  let wrapper;
  let mockCurrentTask;

  beforeEach(() => {
    mockCurrentTask = {id: null, name: ''};
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

  describe('loadTaskInfo', () => {
    it('should update the appropriate state with info from store', () => {
      let mockTask = {
        id: 1,
        name: 'cats',
        videoLink: 'caden@youtube',
        docs: [],
        labs: []
      };
      let expected = 'caden@youtube';
      wrapper.instance().loadTaskInfo(mockTask);
      let actual = wrapper.state('videoLink');

      expect(actual).toEqual(expected);
    })
  })

  describe('handleSubmit', () => {
    it('should call updateTask with the correct params', async () => {
      let mockTask = {
        id: null,
        name: '',
        videoLink: '',
        docs: [],
        labs: []
      };
      let expected = mockTask;
      await wrapper.instance().handleSubmit();

      expect(API.updateTask).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapStateToProps', () =>  {
    it('should return a state with the currentTask prop', () => {
      let mockState = {
        currentTask: {id: null, name: ''},
        user: {id: 1}
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.currentTask;
      let expected = {id: null, name: ''};

      expect(actual).toEqual(expected);
    })
  })
})