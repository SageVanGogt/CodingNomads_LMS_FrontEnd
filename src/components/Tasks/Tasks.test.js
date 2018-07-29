import React from 'react';
import { shallow } from 'enzyme';
import * as API from '../../apiCalls/apiCalls';
import { Tasks, mapDispatchToProps } from './Tasks';
import { updateCurrentTask } from '../../actions/currentTask';
jest.mock('../../apiCalls/apiCalls');

describe('Tasks', () => {
  let mockProps; 
  let mockTask;
  let wrapper;
    
  beforeEach(() => {
    mockProps = {
      updateCurrentTask: jest.fn(),
      history: { push: jest.fn() }
    }
    mockTask = {
      id: 1,
      name: '',
      description: '',
      videoLink: '',
      docs: [],
      labs: []
    }
    wrapper = shallow(<Tasks {...mockProps} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('addTask', () => {
    beforeEach(() => {
      API.postTask = jest.fn().mockImplementation(() => Promise.resolve(mockTask));
    })

    it('calls postTask', async () => {
      
    })

    // it('calls this.props.updateCurrentTask with the correct arguments', async () => {
    //   const expected = mockTask;
    //   const wrapperInst = wrapper.instance();
      
    //   await wrapperInst.addTask();

    //   expect(wrapperInst.props.updateCurrentTask).toHaveBeenCalledWith(expected);
    // })

    it ('calls this.props.history.push with the correct arguments', async () => {
      const expected = '/tasks/edit';
      const wrapperInst = wrapper.instance();

      await wrapperInst.addTask();

      expect(wrapperInst.props.history.push).toHaveBeenCalledWith(expected);

    })
  })

  // describe('mapDispatchToProps', () => {
  //   it('calls dispatch with the correct arguments', () => {
  //     const dispatch = jest.fn();
  //     const expected = updateCurrentTask(mockTask); 
  //     const mappedProps = mapDispatchToProps(dispatch);

  //     mappedProps.updateCurrentTask(mockTask);

  //     expect(dispatch).toHaveBeenCalledWith(expected);
  //   })
  // })
});
