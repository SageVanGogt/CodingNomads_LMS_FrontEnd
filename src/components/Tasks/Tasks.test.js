import React from 'react';
import { shallow } from 'enzyme';
import * as API from '../../apiCalls/apiCalls';
import { Tasks } from './Tasks';
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

  describe('componentDidMount', () => {
    it('calls getAllTasks', async () => {
      await shallow(<Tasks { ...mockProps } />)

      expect(API.getAllTasks).toHaveBeenCalled(); 
    })

    it('sets the state with the tasks returned from getAllTasks', async () => {
      wrapper = await shallow(<Tasks { ...mockProps } />, { disableLifecycleMethods: true })
      expect(wrapper.state('allTasks').length).toEqual(0)

      await wrapper.instance().componentDidMount()
      expect(wrapper.state('allTasks').length).toEqual(6);
    })
  });

  describe('addTask', () => {
    beforeEach(() => {
      API.postTask = jest.fn().mockImplementation(() => Promise.resolve(mockTask));
    })

    it ('calls this.props.history.push with the correct arguments', async () => {
      const expected = '/tasks/edit';
      const wrapperInst = wrapper.instance();

      await wrapperInst.addTask();

      expect(wrapperInst.props.history.push).toHaveBeenCalledWith(expected);

    })
  })

});
